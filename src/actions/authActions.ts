import { User } from "@/interface/auth";
import { api } from "@/services/api";

export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserResponse {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string;
  createdAt: Date;
  isActive: boolean;
  roles: string[];
}

export const returnUserToken = (data: AuthResponse) => {
  const { token, user } = data;
  const { id, email, fullName, avatarUrl, isActive, roles } = user;

  const userData: User = {
    id,
    email,
    fullName,
    avatarUrl,
    isActive,
    roles,
  };

  return { token, user: userData };
};

export const authLogin = async (email: string, password: string) => {
  email = email.trim().toLowerCase();

  try {
    const { data } = await api.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await api.get<AuthResponse>("/auth/check-status");

    return returnUserToken(data);
  } catch (error) {
    return null;
  }
};
