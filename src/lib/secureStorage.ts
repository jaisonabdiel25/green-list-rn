import * as SecureStore from "expo-secure-store";

export const saveItemSecureStorage = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    alert("🔐 Error al guardar el key 🔐 \n");
  }
};

export const getItemSecureStorage = async (key: string) => {
  try {
    return SecureStore.getItemAsync(key);
  } catch (error) {
    return null;
  }
};

export const deletedItemSecureStorage = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    return null;
  }
};
