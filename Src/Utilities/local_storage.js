import AsyncStorage from '@react-native-async-storage/async-storage';

export const save_bool_data = async (key, data) => {
    try{
  let convertBoolToString = new Boolean(data);
  await AsyncStorage.setItem(key, convertBoolToString.toString());
    }
    catch(err){
        console.log(err);
    }
};

export const get_bool_data = async (key) => {
    try{
  let response = await AsyncStorage.getItem(key);
  return response === 'true' ? true : false;
    }
    catch(err){
        console.log(err);
    }
};

export const save_json_data = async (key, jsonOBJ) => {
  try {
    let stringifyData = JSON.stringify(jsonOBJ);
    await AsyncStorage.setItem(key, stringifyData, (err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
};

export const get_json_data = async (key) => {
  try {
    let jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    return null;
  }
};

export const remove_with_multikeys = async (arraykeys) => {
  try {
    await AsyncStorage.multiRemove(arraykeys);
  } catch (err) {
    console.log(err);
  }
};

export const remove_with_key = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
