import { ThemedText } from "@/components/shared/themed-text";
// import ThemedIconButton from "@/components/shared/ThemedIconButton";
import { useLogoutAction } from "@/hooks/auth/useLogoutAction";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const StoreScreen = () => {
  const { top } = useSafeAreaInsets();
  const { handleLogout } = useLogoutAction();
  const colorPrimary = useTheme().text;

  return (
    <View style={{ flex: 1, paddingTop: top, paddingHorizontal: 20, gap: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedText themeColor="primary" style={{ fontFamily: "KanitLight" }}>
          StoreScreen
        </ThemedText>

        {/* <ThemedIconButton
          icon="log-out-outline"
          accessibilityLabel="Cerrar sesión"
          onPress={handleLogout}
          themeColor="primary"
        /> */}
      </View>
    </View>
  );
};

export default StoreScreen;
