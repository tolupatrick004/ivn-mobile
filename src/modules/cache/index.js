import { AsyncStorage } from "react-native";

export const set = async ({key, value}) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

export const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) return false;
    return value;
   } catch (error) {
     return false;
   }
}

export const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
   } catch (error) {
     return false;
   }
}

export const mapSet = details => {
  if (Array.isArray(details)) {
    details.forEach(detail => {
      const [ detailKey, detailValue ] = Object.entries(detail)[0];
      set({ key: detailKey, value: detailValue });
    });
  }
}

