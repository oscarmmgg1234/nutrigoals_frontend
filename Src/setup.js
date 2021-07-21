import React, {useEffect, useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import RootNavigation from './Navigation/RootNavigation';
console.disableYellowBox = true;
export const app_context = createContext();
export const user_context = createContext();
export const water_context = createContext();
export const foodLog_context = createContext();

const Root = (props) => {
  const [BFLogData, setBFLogData] = useState([
    {name: 'add', id: Math.random() % 5000},
    {name: 'toast', id: Math.random() % 5000, protein: 5},
    {name: 'Egg', id: Math.random() % 5000, protein: 10},
    {name: 'pancacke', id: Math.random() % 5000, protein: 20},
    {name: 'orange juice', id: Math.random() % 5000, protein: 10},
  ]);
  const [LunchLogData, setLunchLogData] = useState([
    {name: 'add', id: Math.random() % 5000},
    {name: 'chicken sandwich', id: Math.random() % 5000},
    {name: 'stella rose wine palor wine', id: Math.random() % 5000},
  ]);
  const [DinnerLogData, setDinnerLogData] = useState([
    {name: 'add', id: Math.random() % 5000},
    {name: 'stake', id: Math.random() % 5000},
    {name: 'mashed potatoes', id: Math.random() % 5000},
    {name: 'broccoli', id: Math.random() % 5000},
  ]);
  const [SnackLogData, setSnackLogData] = useState([
    {name: 'add', id: Math.random() % 5000},
    {name: 'trail mix', id: Math.random() % 5000},
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

  function update() {
    let PG = userGoals.proteinGoal;
    let FG = userGoals.fatGoal;
    let CG = userGoals.carbGoal;
    let PC;
    let FC = 10;
    let CC = 10;
    BFLogData.map((obj) => {
      PC += obj.protein;
      setUserGoals({
        proteinGoal: PG,
        fatGoal: FG,
        carbGoal: CG,
        proteinCurrent: PC,
        fatCurrent: FC,
        carbCurrent: CC,
      });
    });
  }

  function editBFLogData(value) {
    value.map((obj) =>
      setBFLogData([
        ...BFLogData,
        {name: obj.name, id: Math.random(), protein: 20},
      ]),
    );
  }
  function removeBFLogData(value) {
    let temp = BFLogData.filter((obj) => value.id != obj.id);
    setBFLogData(temp);
  }
  function editLunchLogData(value) {
    value.map((obj) =>
      setLunchLogData([...LunchLogData, {name: obj.name, id: Math.random()}]),
    );
  }
  function removeLunchLogData(value) {
    let temp = LunchLogData.filter((obj) => value.id != obj.id);
    setLunchLogData(temp);
  }
  function editDinnerLogData(value) {
    value.map((obj) =>
      setDinnerLogData([...DinnerLogData, {name: obj.name, id: Math.random()}]),
    );
  }
  function removeDinnerLogData(value) {
    let temp = DinnerLogData.filter((obj) => value.id != obj.id);
    setDinnerLogData(temp);
  }
  function editSnackLogData(value) {
    value.map((obj) =>
      setSnackLogData([...SnackLogData, {name: obj.name, id: Math.random()}]),
    );
  }
  function removeSnackLogData(value) {
    let temp = SnackLogData.filter((obj) => value.id != obj.id);
    setSnackLogData(temp);
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
                editDinnerLogData,
                editSnackLogData,
                removeBFLogData,
                removeLunchLogData,
                removeDinnerLogData,
                removeSnackLogData,
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
