import React, {useEffect, useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import FoodLog from './Components/Log/LogBody/foodLog/foodLog';
import AppStack from './Navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './Navigation/RootNavigation';
console.disableYellowBox = true;
export const app_context = createContext();
export const user_context = createContext();
export const water_context = createContext();
export const foodLog_context = createContext();

const Root = (props) => {
  const [BFLogData, setBFLogData] = useState([
    {name: 'toast', id: Math.random() % 5000},
    {name: 'Egg', id: Math.random() % 5000},
    {name: 'pancacke', id: Math.random() % 5000},
    {name: 'orange juice', id: Math.random() % 5000},
    {name: 'add', id: Math.random() % 5000},
  ]);
  const [LunchLogData, setLunchLogData] = useState([
    {name: 'chicken sandwich', id: Math.random() % 5000},
    {name: 'stella rose wine palor wine', id: Math.random() % 5000},
    {name: 'add', id: Math.random() % 5000},
  ]);
  const [DinnerLogData, setDinnerLogData] = useState([
    {name: 'stake', id: Math.random() % 5000},
    {name: 'mashed potatoes', id: Math.random() % 5000},
    {name: 'broccoli', id: Math.random() % 5000},
    {name: 'add', id: Math.random() % 5000},
  ]);
  const [SnackLogData, setSnackLogData] = useState([
    {name: 'trail mix', id: Math.random() % 5000},
    {name: 'add', id: Math.random() % 5000},
  ]);

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
    proteinGoal: 100,
    fatGoal: 100,
    carbGoal: 100,
    proteinCurrent: 80,
    fatCurrent: 50,
    carbCurrent: 50,
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

  function editBFLogData(value) {
    let newLog = BFLogData.filter((obj) => obj.name != 'add');
    setBFLogData(newLog);
    value.map((obj) =>
      setBFLogData([...BFLogData, {name: obj.name, id: Math.random()}]),
    );
    setBFLogData([...BFLogData, {name: 'add'}]);
  }
  function removeBFLogData(index) {
    let temp = BFLogData.filter((obj) => index != obj.id);
    setBFLogData(temp);
  }
  function editLunchLogData(value) {
    setLunchLogData([...LunchLogData, {value}]);
  }
  function removeLunchLogData(index) {
    let temp = LunchLogData.filter((obj) => index != obj.id);
    setLunchLogData(temp);
  }

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
      <app_context.Provider
        value={{
          selectImage,
          imagePath,
          User,
        }}>
        <user_context.Provider
          value={{
            macroData: macroData.data,
            graphData,
            userGoals,
          }}>
          <water_context.Provider
            value={{waterGoals, increaseWaterLevel, decreaseWaterLevel}}>
            <foodLog_context.Provider
              value={{
                BFLogData,
                LunchLogData,
                DinnerLogData,
                SnackLogData,
                editBFLogData,
                editLunchLogData,
                removeBFLogData,
                removeLunchLogData,
              }}>
              <View style={{flex: 1}}>
                <RootNavigation />
              </View>
            </foodLog_context.Provider>
          </water_context.Provider>
        </user_context.Provider>
      </app_context.Provider>
    </>
  );
};
export default Root;
