import { useAuthStore } from "@/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";

export const useLogoutAction = () => {
  const logout = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();

  // No hace falta navegar: al quedar "unauthenticated", el layout de
  // (market-social-app) redirige al login.
  const handleLogout = async () => {
    await logout();
    queryClient.clear();
  };

  return { handleLogout };
};
