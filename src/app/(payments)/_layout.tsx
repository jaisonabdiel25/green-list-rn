import { useTheme } from "@/hooks/use-theme";
import { useAuthStore } from "@/store/useAuthStore";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const MarketSocialScreen = () => {
  const { status, checkStatus } = useAuthStore();
  const color = useTheme();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "checking") {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  if (status === "unauthenticated") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Redirect href="/auth/login" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: color.background,
          },
          headerStyle: {
            backgroundColor: color.background,
          },
        }}
      />
    </View>
  );
};

export default MarketSocialScreen;
