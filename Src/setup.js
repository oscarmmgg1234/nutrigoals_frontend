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

const Root = () => {
  const [BFLogData, setBFLogData] = useState([
    {name: 'add', id: Math.random() % 5000},
    {name: 'toast', id: Math.random() % 5000, protein: 5, fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'Egg', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'pancacke', id: Math.random() % 5000, protein: 20,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'orange juice', id: Math.random() % 5000, protein: 10, fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
  ]);
  const [LunchLogData, setLunchLogData] = useState([
    {name: 'add', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'chicken sandwich', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'stella rose wine palor wine', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
  ]);
  const [DinnerLogData, setDinnerLogData] = useState([
    {name: 'add', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'stake', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'mashed potatoes', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'broccoli', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
  ]);
  const [SnackLogData, setSnackLogData] = useState([
    {name: 'add', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
    {name: 'trail mix', id: Math.random() % 5000, protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
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
        colorStart: '#fb8be3',
        colorMiddle: '#fa7be8',
        colorEnd: '#ff67ea'
      },
      {
        name: 'Fat',
        macroGoal: userGoals.fatGoal,
        macroCurrent: userGoals.fatCurrent,
        colorStart: '#fada7a',
        colorMiddle: '#ffd968',
        colorEnd: '#ffd454'
      },
      {
        name: 'Carbohydrates',
        macroGoal: userGoals.carbGoal,
        macroCurrent: userGoals.carbCurrent,
        colorStart: '#6ae7bd',
        colorMiddle: '#5beebc',
        colorEnd: '#49ffc2'
      },
      {
        name: 'Sugar',
        macroGoal: missGoals.sugarGoal,
        macroCurrent: missGoals.sugarCurrent,
        colorStart: '#74abdf',
        colorMiddle: '#6aaeee',
        colorEnd: '#4fa0ed'
      },
      {
        name: 'Sodium',
        macroGoal: missGoals.sodiumGoal,
        macroCurrent: missGoals.sodiumCurrent,
        colorStart: '#a064e0',
        colorMiddle: '#9754de',
        colorEnd: '#9046df'
      },
    ],
  });

  const [imagePath, setImagePath] = useState('');

  const [AuthStatus, setAuthStatus] = useState('1');

function setValue(value, dataSetIndex, arg){
  
  switch(dataSetIndex){
    case(0): {
      let temp = BFLogData.map((obj)=>{
        value.id === obj.id ? 
          {...obj, quantity: arg} : obj
     }
      )
      setBFLogData(temp)
      updateBF();
  
      break;
    }
  }
  
  
  
}

function updateBF(){
  let pc = 0;
  let fc = 0;
  let cc = 0;
  let sc = 0;
  let soc = 0;
  BFLogData.map((obj, index)=>{if(index > 0){
    pc += obj.protein * parseInt(obj.quantity);
    fc += obj.fat * parseInt(obj.quantity);
    cc += obj.carbohydrate * parseInt(obj.quantity);
    sc += obj.sugar * parseInt(obj.quantity);
    soc += obj.sodium * obj.quantity;
  }})
  setGoals(pc,fc,cc,sc, soc);
}
function updateLunch(){
  let pc = 0;
  let fc = 0;
  let cc = 0;
  let sc = 0;
  let soc = 0;
  LunchLogData.map((obj, index)=>{if(index > 0){
    pc += obj.protein * obj.quantity;
    fc += obj.fat * obj.quantity;
    cc += obj.carbohydrate * obj.quantity;
    sc += obj.sugar * obj.quantity;
    soc += obj.sodium * obj.quantity;
  }})
  setGoals(pc,fc,cc,sc, soc);
}
function updateD(){
  let pc = 0;
  let fc = 0;
  let cc = 0;
  let sc = 0;
  let soc = 0;
  DinnerLogData.map((obj, index)=>{if(index > 0){
    pc += obj.protein * parseInt(obj.quantity);
    fc += obj.fat * parseInt(obj.quantity);
    cc += obj.carbohydrate * parseInt(obj.quantity);
    sc += obj.sugar * parseInt(obj.quantity);
    soc += obj.sodium * parseInt(obj.quantity);
  }})
  setGoals(pc,fc,cc,sc, soc);
}
function updateSnack(){
  let pc = 0;
  let fc = 0;
  let cc = 0;
  let sc = 0;
  let soc = 0;
  SnackLogData.map((obj, index)=>{if(index > 0){
    pc += obj.protein * parseInt(obj.quantity);
    fc += obj.fat * parseInt(obj.quantity);
    cc += obj.carbohydrate * parseInt(obj.quantity);
    sc += obj.sugar * parseInt(obj.quantity);
    soc += obj.sodium * parseInt(obj.quantity);
  }})
  setGoals(pc,fc,cc,sc, soc);
}

  function editBFLogData(value) {
    value.map((obj) =>
      setBFLogData([
        ...BFLogData,
        {name: obj.name, id: Math.random(), protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'},
      ]),
    );
    updateBF();
  }
  function removeBFLogData(value) {
    let temp = BFLogData.filter((obj) => value.id != obj.id);
    setBFLogData(temp);
    updateBF();
  }
  function editLunchLogData(value) {
    value.map((obj) =>
      setLunchLogData([...LunchLogData, {name: obj.name, id: Math.random(), protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30 , quantity: '1'}]),
    );
    updateLunch();
    }
  function removeLunchLogData(value) {
    let temp = LunchLogData.filter((obj) => value.id != obj.id);
    setLunchLogData(temp);
    updateLunch();
  }
  function editDinnerLogData(value) {
    value.map((obj) =>
      setDinnerLogData([...DinnerLogData, {name: obj.name, id: Math.random(), protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'}]),
    );
    updateD();
  }
  function removeDinnerLogData(value) {
    let temp = DinnerLogData.filter((obj) => value.id != obj.id);
    setDinnerLogData(temp);
    updateD();
  }
  function editSnackLogData(value) {
    value.map((obj) =>
      setSnackLogData([...SnackLogData, {name: obj.name, id: Math.random(), protein: 10,fat: 20, carbohydrate: 10, sugar: 12, sodium: 30, quantity: '1'}]),
    );
    updateSnack();
  }
  function removeSnackLogData(value) {
    let temp = SnackLogData.filter((obj) => value.id != obj.id);
    setSnackLogData(temp);
    updateSnack
  }
  function increaseWaterLevel() {
    let oldGoal = waterGoals.waterGoal;
    let oldCurrent = waterGoals.waterCurrent;
    if (oldCurrent < 15) {
      setWaterGoals({waterGoal: oldGoal, waterCurrent: oldCurrent + '1'});
    }
  }
  function decreaseWaterLevel() {
    let oldGoal = waterGoals.waterGoal;
    let oldCurrent = waterGoals.waterCurrent;
    if (oldCurrent > 0) {
      setWaterGoals({waterGoal: oldGoal, waterCurrent: oldCurrent - '1'});
    }
  }

  useEffect(()=>
  setMacroData({
    data: [
      {
        name: 'Protein',
        macroGoal: userGoals.proteinGoal,
        macroCurrent: userGoals.proteinCurrent,
        colorStart: '#fb8be3',
        colorMiddle: '#fa7be8',
        colorEnd: '#ff67ea'

      },
      {
        name: 'Fat',
        macroGoal: userGoals.fatGoal,
        macroCurrent: userGoals.fatCurrent,
        colorStart: '#fada7a',
        colorMiddle: '#ffd968',
        colorEnd: '#ffd454'
      },
      {
        name: 'Carbohydrates',
        macroGoal: userGoals.carbGoal,
        macroCurrent: userGoals.carbCurrent,
        colorStart: '#6ae7bd',
        colorMiddle: '#5beebc',
        colorEnd: '#49ffc2'
      },
      {
        name: 'Sugar',
        macroGoal: missGoals.sugarGoal,
        macroCurrent: missGoals.sugarCurrent,
        colorStart: '#74abdf',
        colorMiddle: '#6aaeee',
        colorEnd: '#4fa0ed'
      },
      {
        name: 'Sodium',
        macroGoal: missGoals.sodiumGoal,
        macroCurrent: missGoals.sodiumCurrent,
        colorStart: '#a064e0',
        colorMiddle: '#9754de',
        colorEnd: '#9046df'
      },
    ],
  }), [userGoals])


  function setGoals(val, val2, val3, val4, val5) {
    setUserGoals({
      proteinGoal: userGoals.proteinGoal,
      fatGoal: userGoals.fatGoal,
      carbGoal: userGoals.carbGoal,
      proteinCurrent: val,
      fatCurrent: val2,
      carbCurrent: val3,
    });
    setMissGoals({
      sugarCurrent: val4,
      sugarGoal: missGoals.sugarGoal,
      sodiumCurrent: val5,
      sodiumGoal: missGoals.sodiumGoal,
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
                setValue
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
