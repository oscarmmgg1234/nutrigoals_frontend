import React, {useEffect, useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
console.disableYellowBox = true;
export const app_context = createContext();
export const user_context = createContext();
export const water_context = createContext();

const Root = (props) => {
  const [ThemeStyle, setThemeStyle] = useState('dark');
  const [User, setUserInfo] = useState({
    name: '',
    age: 0,
    weight: 0,
    gender: '',
    username: 'Oscarmmgg',
  });
  const [graphData, setGraphData] = useState({
    graphLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    graphDataP: [80, 20, 30, 45, 50, 60, 70],
  });
  const [userGoals, setUserGoals] = useState({
    proteinGoal: 0,
    fatGoal: 0,
    carbGoal: 0,
    proteinCurrent: 0,
    fatCurrent: 0,
    carbCurrent: 0,
  });
  const [waterGoals, setWaterGoals] = useState({
    waterGoal: 15,
    waterCurrent: 0,
  });
  const [missGoals, setMissGoals] = useState({
    sodiumCurrent: 0,
    sugarCurrent: 0,
    sodiumGoal: 0,
    sugarGoal: 0,
  });
  const [macroData, setMacroData] = useState({
    data: [
      {
        name: 'Protein',
        macroGoal: userGoals.proteinGoal,
        macroCurrent: userGoals.proteinCurrent,
      },
      {
        name: 'Fat',
        macroGoal: userGoals.fatGoal,
        macroCurrent: userGoals.fatCurrent,
      },
      {
        name: 'Carbohydrates',
        macroGoal: userGoals.carbGoal,
        macroCurrent: userGoals.carbCurrent,
      },
      {
        name: 'Sugar',
        macroGoal: missGoals.sugarGoal,
        macroCurrent: missGoals.sugarCurrent,
      },
      {
        name: 'Sodium',
        macroGoal: missGoals.sodiumGoal,
        macroCurrent: missGoals.sodiumCurrent,
      },
    ],
  });

  const [imagePath, setImagePath] = useState('');

  const [AuthStatus, setAuthStatus] = useState('1');

  function increaseWaterLevel() {
    let oldGoal = waterGoals.waterGoal;
    let oldCurrent = waterGoals.waterCurrent;
    if (oldCurrent < 15) {
      setWaterGoals({waterGoal: oldGoal, waterCurrent: oldCurrent + 1});
    }
  }
  function decreaseWaterLevel() {
    let oldGoal = waterGoals.waterGoal;
    let oldCurrent = waterGoals.waterCurrent;
    if (oldCurrent > 0) {
      setWaterGoals({waterGoal: oldGoal, waterCurrent: oldCurrent - 1});
    }
  }

  function setGoals(val, val2, val3, val4, val5) {
    setUserGoals({
      proteinGoal: val,
      fatGoal: val2,
      carbGoal: val3,
      proteinCurrent: userGoals.proteinCurrent,
      fatCurrent: userGoals.fatCurrent,
      carbCurrent: userGoals.carbCurrent,
    });
    setMissGoals({
      sugarCurrent: missGoals.sugarCurrent,
      sugarGoal: val4,
      sodiumCurrent: missGoals.sugarCurrent,
      sodiumGoal: val5,
    });
  }

  const selectImage = () => {
    const options = {
      quality: 0.1,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const {fileName, type, uri, fileSize} = response;

        setImagePath(uri);
      }
    });
  };

  return (
    <>
      <app_context.Provider value={{macroData: macroData.data, selectImage, imagePath, username: User.username}}>
        <user_context.Provider
          value={{
            macroData: macroData.data,
            graphData,
          }}>
          <water_context.Provider
            value={{waterGoals, increaseWaterLevel, decreaseWaterLevel}}>
            <View style={{flex: 1}}>
              <RootNavigation />
            </View>
          </water_context.Provider>
        </user_context.Provider>
      </app_context.Provider>
    </>
  );
};
export default Root;
