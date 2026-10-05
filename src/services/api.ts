import { getItemSecureStorage } from "@/lib/secureStorage";
import axios from "axios";
import { Platform } from "react-native";

const stage = process.env.EXPO_PUBLIC_STAGE;

export const API_URL =
  stage === "prod"
    ? process.env.EXPO_PUBLIC_API_URL
    : Platform.OS === "ios"
      ? process.env.EXPO_PUBLIC_API_IOS
      : process.env.EXPO_PUBLIC_API_ANDROID;

console.log("API_URL", API_URL);
console.log("stage", stage);

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  // verificar si hay toquen en secure storage
  const token = await getItemSecureStorage("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api };

