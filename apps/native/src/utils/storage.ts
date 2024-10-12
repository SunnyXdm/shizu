import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('AsyncStorage setItem error');
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log('AsyncStorage getItem error');
  }
};

export const storage = {
  save,
  get,
};
