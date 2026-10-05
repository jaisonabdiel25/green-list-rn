import "@/global.css";

import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useTheme } from "@/hooks/use-theme";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const color = useTheme();

  SplashScreen.hideAsync();

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: color.background,
        }}
      >
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
