import * as yup from "yup";

// Schemas por campo: cada form.Field valida solo el suyo, así el error de un
// campo no aparece cuando el usuario interactúa con otro.
export const emailSchema = yup
  .string()
  .trim()
  .required("El correo es obligatorio")
  .email("Ingrese un correo válido");

// Igual que la API: el login no valida longitud, solo presencia.
export const loginPasswordSchema = yup
  .string()
  .required("La contraseña es obligatoria");

export const loginSchema = yup.object({
  email: emailSchema,
  password: loginPasswordSchema,
});

export type LoginFormValues = yup.InferType<typeof loginSchema>;
