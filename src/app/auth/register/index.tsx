import { ThemedText } from "@/components/shared/themed-text";
import ThemedButton from "@/components/shared/ThemedButton";
import ThemedInputText from "@/components/shared/ThemedInputText";
import ThemedLink from "@/components/shared/ThemedLink";
import { useTheme } from "@/hooks/use-theme";
import {
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";

const RegisterScreen = () => {
  const height = useWindowDimensions().height;
  const color = useTheme();
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
            paddingTop: height * 0.25,
          }}
        >
          {/* Title */}
          <View>
            <ThemedText type="codeTitle">Crear cuenta</ThemedText>
            <ThemedText type="code">Complete sus datos</ThemedText>
          </View>

          {/* inputs */}
          <View style={{ marginBlock: 20, gap: 10 }}>
            <View style={{ gap: 3 }}>
              <ThemedText type="code">Correo electrónico</ThemedText>
              <ThemedInputText
                placeholder="Correo electrónico"
                icon="mail-open-outline"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={"#ccc"}
              />
            </View>

            <View style={{ gap: 3 }}>
              <ThemedText type="code">Contraseña</ThemedText>
              <ThemedInputText
                placeholder="Contraseña"
                placeholderTextColor={"#ccc"}
                secureTextEntry
                icon="lock-closed-outline"
                autoCapitalize="none"
              />
            </View>

            <View style={{ gap: 3 }}>
              <ThemedText type="code">Nombre</ThemedText>
              <ThemedInputText
                placeholder="Nombre"
                placeholderTextColor={"#ccc"}
                icon="person-outline"
                autoCapitalize="words"
              />
            </View>
          </View>

          {/* button */}
          <View>
            <ThemedButton icon="arrow-forward-outline">
              Crear cuenta
            </ThemedButton>
          </View>

          {/* link to login */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <ThemedText type="code">¿Ya tienes una cuenta?</ThemedText>
            <ThemedLink style={{ marginHorizontal: 5 }} href={"/auth/login"}>
              Ingresar
            </ThemedLink>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
