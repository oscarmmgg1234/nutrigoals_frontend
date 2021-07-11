
import React, {useEffect,useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import { createContext } from 'react/cjs/react.development';
import RootNavigation from './Navigation/RootNavigation';
console.disableYellowBox = true;
export const app_context = createContext();


const Root = (props) => {
const [ThemeStyle, setThemeStyle] = useState('dark');
const [User, setUserInfo] = useState({name: '', age: 0, weight: 0, gender: '',  username: '',
 })
const [userGoals, setUserGoals] = useState({ proteinGoal: 0, fatGoal: 0, carbGoal: 0,proteinCurrent: 0, fatCurrent: 0, carbCurrent: 0,})
const [waterCurrent, setWaterCurrent] = useState( {waterCurrent: 0})
const [waterGoals, setWaterGoals] = useState({ waterGoal: 15})
const [missGoals, setMissGoals] = useState({ sodiumCurrent: 0, sugarCurrent: 0, sodiumGoal: 0, sugarGoal: 0})
const [macroData, setMacroData] = useState({data: [{
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
  macroGoal:missGoals.sugarGoal,
  macroCurrent: missGoals.sugarCurrent,
},
{
  name: 'Sodium',
  macroGoal: missGoals.sodiumGoal,
  macroCurrent: missGoals.sodiumCurrent,
},]})



useEffect(()=>{setMacroData({data:  [{
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
  macroGoal:missGoals.sugarGoal,
  macroCurrent: missGoals.sugarCurrent,
},
{
  name: 'Sodium',
  macroGoal: missGoals.sodiumGoal,
  macroCurrent: missGoals.sodiumCurrent,
},]})}, [userGoals.proteinCurrent, userGoals.fatCurrent,userGoals.carbCurrent])



const [AuthStatus, setAuthStatus] = useState('1');

function increaseWaterLevel(){
  let old = waterCurrent.waterCurrent;
  setWaterCurrent({waterCurrent: old + 1})
}
function decreaseWaterLevel(){
  let old = waterCurrent.waterCurrent;
  setWaterCurrent({waterCurrent: old - 1})
}

function setGoals(val,val2, val3, val4, val5){
setUserGoals({proteinGoal: val, fatGoal: val2, carbGoal: val3, proteinCurrent: userGoals.proteinCurrent, fatCurrent: userGoals.fatCurrent, carbCurrent: userGoals.carbCurrent});
setMissGoals({sugarCurrent: missGoals.sugarCurrent, sugarGoal: val4, sodiumCurrent: missGoals.sugarCurrent, sodiumGoal: val5})
}


return (
  <>
  <app_context.Provider value={{ThemeStyle,macroData: macroData.data,LoggedInStatus: AuthStatus,
  User, increaseWaterLevel, userGoals, missGoals, userGoals, waterGoals, waterCurrent, decreaseWaterLevel, setGoals}}>
    <View style={{flex: 1}}>
      <RootNavigation />
    </View>
    </app_context.Provider>
  </>
);
  }
export default Root;
