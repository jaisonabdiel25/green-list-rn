import { ThemedText } from "@/components/shared/themed-text";
import ThemedButton from "@/components/shared/ThemedButton";
import ThemedInputText from "@/components/shared/ThemedInputText";
import ThemedLink from "@/components/shared/ThemedLink";
import { useLoginFormAction } from "@/hooks/auth/useLoginFormAction";
import { useTheme } from "@/hooks/use-theme";
import { emailSchema, loginPasswordSchema } from "@/schemas/authSchemas";
import {
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";

const LoginScreen = () => {
  const height = useWindowDimensions().height;
  const color = useTheme();

  const { form } = useLoginFormAction();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior="padding"
    >
      <ScrollView
        style={{
          backgroundColor: color.background,
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          {/* Title */}
          <View>
            <ThemedText type="title">Ingresar</ThemedText>
            <ThemedText>Ingrese sus credenciales</ThemedText>
          </View>

          {/* inputs */}
          <View style={{ marginBlock: 20, gap: 10 }}>
            <form.Field
              name="email"
              // Yup valida siempre de forma asíncrona, por eso onDynamicAsync.
              validators={{ onDynamicAsync: emailSchema }}
            >
              {(field) => (
                <View style={{ gap: 3 }}>
                  <ThemedText>Correo electrónico</ThemedText>
                  <ThemedInputText
                    placeholder="Correo electrónico"
                    icon="mail-open-outline"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={"#ccc"}
                    value={field.state.value}
                    onChangeText={field.handleChange}
                    onBlur={field.handleBlur}
                    isError={field.state.meta.errors.length > 0}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <ThemedText type="small" themeColor="error">
                      {field.state.meta.errors[0]?.message}
                    </ThemedText>
                  )}
                </View>
              )}
            </form.Field>

            <form.Field
              name="password"
              validators={{ onDynamicAsync: loginPasswordSchema }}
            >
              {(field) => (
                <View style={{ gap: 3 }}>
                  <ThemedText>Contraseña</ThemedText>
                  <ThemedInputText
                    placeholder="Contraseña"
                    placeholderTextColor={"#ccc"}
                    secureTextEntry
                    icon="lock-closed-outline"
                    autoCapitalize="none"
                    value={field.state.value}
                    onChangeText={field.handleChange}
                    onBlur={field.handleBlur}
                    isError={field.state.meta.errors.length > 0}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <ThemedText type="small" themeColor="error">
                      {field.state.meta.errors[0]?.message}
                    </ThemedText>
                  )}
                </View>
              )}
            </form.Field>
          </View>

          {/* button */}
          <View>
            <ThemedButton
              size={"lg"}
              icon="arrow-forward-outline"
              onPress={() => form.handleSubmit()}
            >
              Ingresar
            </ThemedButton>
          </View>

          {/* link to register */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <ThemedText type="small">¿No tienes una cuenta?</ThemedText>
            <ThemedLink style={{ marginHorizontal: 5 }} href={"/auth/register"}>
              Crear cuenta
            </ThemedLink>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
