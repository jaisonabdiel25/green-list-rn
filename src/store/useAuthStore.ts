import { authCheckStatus, authLogin } from "@/actions/authActions";
import { User } from "@/interface/auth";
import {
  deletedItemSecureStorage,
  saveItemSecureStorage,
} from "@/lib/secureStorage";
import { create } from "zustand";
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (token?: string, user?: User) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  //properties
  status: "checking",
  token: undefined,
  user: undefined,

  //actions
  login: async (email: string, password: string) => {
    const response = await authLogin(email, password);

    return get().changeStatus(response?.token, response?.user);
  },
  checkStatus: async () => {
    const response = await authCheckStatus();

    get().changeStatus(response?.token || "", response?.user || ({} as User));
  },
  logout: async () => {
    await deletedItemSecureStorage("token");

    set({ status: "unauthenticated", token: undefined, user: undefined });
  },
  changeStatus: async (token?: string, user?: User) => {
    if (!token || !user) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
      await deletedItemSecureStorage("token");
      return false;
    }

    set({
      status: "authenticated",
      token,
      user,
    });

    await saveItemSecureStorage("token", token);

    return true;
  },
}));
