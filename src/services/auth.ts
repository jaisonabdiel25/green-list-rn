import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

export interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuthLoginMutation = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: ({ email, password }: LoginCredentials) =>
      login(email, password),
  });
};
