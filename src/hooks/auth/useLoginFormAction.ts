import { LoginFormValues } from "@/schemas/authSchemas";
import { useAuthLoginMutation } from "@/services/auth";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { router } from "expo-router";
import { Alert } from "react-native";

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

export const useLoginFormAction = () => {
  const loginMutation = useAuthLoginMutation();

  const form = useForm({
    defaultValues,
    // Valida al salir de un campo y, tras el primer intento de envío, en cada
    // cambio: así los errores no aparecen mientras el usuario escribe.
    validationLogic: revalidateLogic({ mode: "blur" }),
    onSubmit: async ({ value }) => {
      const response = await loginMutation.mutateAsync(value);

      if (!response) {
        Alert.alert("Error", "Correo o contraseña incorrectos");
        return;
      }

      router.replace("/");
    },
  });

  return { form, isPending: loginMutation.isPending };
};
