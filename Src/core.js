import React, {useEffect, useState, createContext, useRef} from 'react';
import {upload_image, local_upload_image} from './Services/image_upload';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import moment from 'moment';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import RootNavigation from './Navigation/RootNavigation';
import AuthStack from './Navigation/AuthStack';
import UserStack from './Navigation/AppStack';
import {APITokenCall} from './http_config/axios_config';
import {navigation_key, USERNAME, user_account_key, user_macro_goals_key, user_soi_goals_key, user_water_goals_key} from './Constants';
import {get_BOOLdata, get_bool_data, get_JSONdata, get_STRINGdata, save_bool_data, get_json_data} from './Utilities/local_storage';
import ActivityScreen from './Components/appStartScreen';

import { set } from 'react-native-reanimated';
export const app_context = createContext();
export const user_context = createContext();
export const water_context = createContext();
export const foodLog_context = createContext();

const Root = (props) => {
  {
    ('Core App States');
  }
  const [date, setDate] = useState('');
  const [DisplayDate, setDisplayText] = useState('');
  const [waterTracker, setWaterT] = useState('');
  const [waterText, setWaterText] = useState('Drink Water');
  const [APIT, setAPIT] = useState('');
  const [markedDate, setMarked] = useState({});
  const [ThemeStyle, setThemeStyle] = useState('dark');
  const [actScreen, setActScreen] = useState(true);

  const toggleInitialStack = (bool) =>{
    props.setInitialS(bool);
  }

  const [User, setUserInfo] = useState({
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    gender: '',
    username: '',
    user_id: '',
    profile_image: '',
    email: '',
    fitnessLevel: 0,
    weeklyLossGoal: 0,
  });
  const [graphData, setGraphData] = useState({
    graphLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    graphDataP: [80, 20, 30, 45, 50, 60, 70],
  });
  const [userGoals, setUserGoals] = useState({
    proteinGoal: 100,
    fatGoal: 100,
    carbGoal: 100,
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
        colorStart: '#fb8be3',
        colorMiddle: '#fa7be8',
        colorEnd: '#ff67ea',
      },
      {
        name: 'Fat',
        macroGoal: userGoals.fatGoal,
        macroCurrent: userGoals.fatCurrent,
        colorStart: '#fada7a',
        colorMiddle: '#ffd968',
        colorEnd: '#ffd454',
      },
      {
        name: 'Carbohydrates',
        macroGoal: userGoals.carbGoal,
        macroCurrent: userGoals.carbCurrent,
        colorStart: '#6ae7bd',
        colorMiddle: '#5beebc',
        colorEnd: '#49ffc2',
      },
      {
        name: 'Sugar',
        macroGoal: missGoals.sugarGoal,
        macroCurrent: missGoals.sugarCurrent,
        colorStart: '#74abdf',
        colorMiddle: '#6aaeee',
        colorEnd: '#4fa0ed',
      },
      {
        name: 'Sodium',
        macroGoal: missGoals.sodiumGoal,
        macroCurrent: missGoals.sodiumCurrent,
        colorStart: '#a064e0',
        colorMiddle: '#9754de',
        colorEnd: '#9046df',
      },
    ],
  });
  const [imagePath, setImagePath] = useState('');
  const [AuthStatus, setAuthStatus] = useState('1');

  {
    ('Core App Refs');
  }

  const BFLogRef = useRef([{name: 'add', id: Math.random() % 5000}]);
  const LunchLogRef = useRef([
    {
      name: 'add',
      id: Math.random() % 5000,
    },
  ]);
  const DinnerLogRef = useRef([
    {
      name: 'add',
      id: Math.random() % 5000,
    },
  ]);
  const SnackLogRef = useRef([
    {
      name: 'add',
      id: Math.random() % 5000,
    },
  ]);

  {
    ('useEffect functionailties');
  }
  React.useEffect(()=>{
    setTimeout(()=>{setActScreen(false)}, 1850)
  }, [])
  React.useEffect(async ()=>{
    let USERresponse = await get_json_data(user_account_key);
    let MACROresponse = await get_json_data(user_macro_goals_key);
    let WATERresponse = await get_json_data(user_water_goals_key);
    let SOIresponse = await get_json_data(user_soi_goals_key);
    if(USERresponse !== null && USERresponse !== undefined){
      setUserInfo(USERresponse);
      setUserGoals({...userGoals, fatGoal: MACROresponse.fatGoal, carbGoal: MACROresponse.carbGoal, proteinGoal: MACROresponse.proteinGoal })
      setWaterGoals({...waterGoals, waterGoal: WATERresponse.waterGoal})
      setMissGoals({...missGoals, sugarGoal: SOIresponse.sugarGoal, sodiumGoal: SOIresponse.sodiumGoal})
    }
    else{
      null;
    }
  }, [])
  
  React.useEffect(async () => {
    if (imagePath === '') {
      const now = moment.now();
      const cDate = moment(now).format('MMMM Do, YYYY');
      

      setDate(now);
      setDisplayText(cDate);
    }
  }, []);

  useEffect(() => {
    setMacroData({
      data: [
        {
          name: 'Protein',
          macroGoal: userGoals.proteinGoal,
          macroCurrent: userGoals.proteinCurrent,
          colorStart: '#fb8be3',
          colorMiddle: '#fa7be8',
          colorEnd: '#ff67ea',
        },
        {
          name: 'Fat',
          macroGoal: userGoals.fatGoal,
          macroCurrent: userGoals.fatCurrent,
          colorStart: '#fada7a',
          colorMiddle: '#ffd968',
          colorEnd: '#ffd454',
        },
        {
          name: 'Carbohydrates',
          macroGoal: userGoals.carbGoal,
          macroCurrent: userGoals.carbCurrent,
          colorStart: '#6ae7bd',
          colorMiddle: '#5beebc',
          colorEnd: '#49ffc2',
        },
        {
          name: 'Sugar',
          macroGoal: missGoals.sugarGoal,
          macroCurrent: missGoals.sugarCurrent,
          colorStart: '#74abdf',
          colorMiddle: '#6aaeee',
          colorEnd: '#4fa0ed',
        },
        {
          name: 'Sodium',
          macroGoal: missGoals.sodiumGoal,
          macroCurrent: missGoals.sodiumCurrent,
          colorStart: '#a064e0',
          colorMiddle: '#9754de',
          colorEnd: '#9046df',
        },
      ],
    });
  }, [userGoals]);

  useEffect(async () => {
    let response = await APITokenCall.get('getFoodAccessToken');
    setAPIT(response.data.access_token);
  }, []);

  {
    ('Handler functions');
  }

  const setMarkedDate = (day) => {
    const ccday = day.dateString;
    setMarked({[ccday]: {selected: true}});
  };
  const editMarkedDate = (day) => {
    const nday = day;
    setMarked({[nday]: {selected: true}});
  };

  updateWaterTracker = () => {
    const dateTime = moment.now();
    const dateTimeText = moment(dateTime).format('h:mm a');
    setWaterT(dateTime);
    setWaterText(dateTimeText);
  };

  incrementDate = () => {
    let newDate = moment(date).add(1, 'days');
    let newDisplayDate = moment(newDate).format('MMMM Do, YYYY');
    let newMarked = moment(newDate).format('YYYY-MM-DD');
    editMarkedDate(newMarked);

    setDate(newDate);
    setDisplayText(newDisplayDate);
  };
  decrementDate = () => {
    let newDate = moment(date).subtract(1, 'days');
    let newDisplayDate = moment(newDate).format('MMMM Do, YYYY');
    let newMarked = moment(newDate).format('YYYY-MM-DD');
    editMarkedDate(newMarked);
    setDate(newDate);
    setDisplayText(newDisplayDate);
  };
  editDate = (arg) => {
    const dateString = arg.dateString;
    const date = moment(dateString).format();
    const DisplayDate = moment(date).format('MMMM Do, YYYY');
    setDate(date);
    setDisplayText(DisplayDate);
  };

  function setLogQuantity(object, value) {
    console.log(`entry: will now begin to setValue with value ${value}`);
    switch (object.logGroup) {
      case 'BF': {
        let temp = BFLogRef.current.map((obj) =>
          object.id === obj.id ? {...obj, quantity: value} : obj,
        );
        BFLogRef.current = temp;
        update();

        break;
      }
      case 'LN': {
        let temp = LunchLogRef.current.map((obj) =>
          object.id === obj.id ? {...obj, quantity: value} : obj,
        );
        LunchLogRef.current = temp;
        update();
      }
      case 'DN': {
        let temp = DinnerLogRef.current.map((obj) =>
          object.id === obj.id ? {...obj, quantity: value} : obj,
        );
        DinnerLogRef.current = temp;
        update();
      }
      case 'SN': {
        let temp = SnackLogRef.current.map((obj) =>
          object.id === obj.id ? {...obj, quantity: value} : obj,
        );
        SnackLogRef.current = temp;
        update();
      }
    }
  }

  function update() {
    let pc = 0;
    let fc = 0;
    let cc = 0;
    let sc = 0;
    let soc = 0;
    BFLogRef.current.map((obj, index) => {
      if (index > 0) {
        pc += obj.protein * parseFloat(obj.quantity);
        fc += obj.fat * parseFloat(obj.quantity);
        cc += obj.carbohydrate * parseFloat(obj.quantity);
        sc += obj.sugar * parseFloat(obj.quantity);
        soc += obj.sodium * parseFloat(obj.quantity);
      }
    });

    LunchLogRef.current.map((obj, index) => {
      if (index > 0) {
        pc += obj.protein * obj.quantity;
        fc += obj.fat * obj.quantity;
        cc += obj.carbohydrate * obj.quantity;
        sc += obj.sugar * obj.quantity;
        soc += obj.sodium * obj.quantity;
      }
    });
    DinnerLogRef.current.map((obj, index) => {
      if (index > 0) {
        pc += obj.protein * parseFloat(obj.quantity);
        fc += obj.fat * parseFloat(obj.quantity);
        cc += obj.carbohydrate * parseFloat(obj.quantity);
        sc += obj.sugar * parseFloat(obj.quantity);
        soc += obj.sodium * parseFloat(obj.quantity);
      }
    });
    SnackLogRef.current.map((obj, index) => {
      if (index > 0) {
        pc += obj.protein * parseFloat(obj.quantity);
        fc += obj.fat * parseFloat(obj.quantity);
        cc += obj.carbohydrate * parseFloat(obj.quantity);
        sc += obj.sugar * parseFloat(obj.quantity);
        soc += obj.sodium * parseFloat(obj.quantity);
      }
    });
    setGoals(pc, fc, cc, sc, soc);
  }

  function editBFLogData(value) {
    let newEntry = {
      name: value.food_name,
      id: Math.random(),
      protein: parseFloat(value.protein),
      fat: parseFloat(value.fat),
      carbohydrate: parseFloat(value.carbohydrates),
      sugar: parseFloat(value.sugar),
      sodium: parseFloat(value.sodium),
      servingDescription: value.serving_description,
      brand_name: value.brand_name,
      quantity: '1',
      logGroup: 'BF',
    };
    let size = 0;
    BFLogRef.current.map((obj) => {
      size += 1;
    });
    BFLogRef.current[size] = newEntry;
    update();
  }
  function removeBFLogData(value) {
    let temp = BFLogRef.current.filter((obj) => value.id != obj.id);
    BFLogRef.current = temp;
    update();
  }
  function editLunchLogData(value) {
    let newEntry = {
      name: value.food_name,
      id: Math.random(),
      protein: parseFloat(value.protein),
      fat: parseFloat(value.fat),
      carbohydrate: parseFloat(value.carbohydrates),
      sugar: parseFloat(value.sugar),
      sodium: parseFloat(value.sodium),
      servingDescription: value.serving_description,
      brand_name: value.brand_name,
      quantity: '1',
      logGroup: 'LN',
    };
    let size = 0;
    LunchLogRef.current.map((obj) => {
      size += 1;
    });
    LunchLogRef.current[size] = newEntry;
    update();
  }
  function removeLunchLogData(value) {
    let temp = LunchLogRef.current.filter((obj) => value.id != obj.id);
    LunchLogRef.current = temp;
    update();
  }
  function editDinnerLogData(value) {
    let newEntry = {
      name: value.food_name,
      id: Math.random(),
      protein: parseFloat(value.protein),
      fat: parseFloat(value.fat),
      carbohydrate: parseFloat(value.carbohydrates),
      sugar: parseFloat(value.sugar),
      sodium: parseFloat(value.sodium),
      servingDescription: value.serving_description,
      brand_name: value.brand_name,
      quantity: '1',
      logGroup: 'DN',
    };
    let size = 0;
    DinnerLogRef.current.map((obj) => {
      size += 1;
    });
    DinnerLogRef.current[size] = newEntry;
    update();
  }
  function removeDinnerLogData(value) {
    let temp = DinnerLogRef.current.filter((obj) => value.id != obj.id);
    DinnerLogRef.current = temp;
    update();
  }
  function editSnackLogData(value) {
    let newEntry = {
      name: value.food_name,
      id: Math.random(),
      protein: parseFloat(value.protein),
      fat: parseFloat(value.fat),
      carbohydrate: parseFloat(value.carbohydrates),
      sugar: parseFloat(value.sugar),
      sodium: parseFloat(value.sodium),
      servingDescription: value.serving_description,
      brand_name: value.brand_name,
      quantity: '1',
      logGroup: 'SN',
    };
    let size = 0;
    SnackLogRef.current.map((obj) => {
      size += 1;
    });
    SnackLogRef.current[size] = newEntry;
    update();
  }
  function removeSnackLogData(value) {
    let temp = SnackLogRef.current.filter((obj) => value.id != obj.id);
    SnackLogRef.current = temp;
    update();
  }
  function setWaterGoal(val) {
    let oldCurrent = waterGoals.waterCurrent;
    setWaterGoals({waterGoal: val, waterCurrent: oldCurrent});
  }
  function increaseWaterLevel() {
    let oldGoal = waterGoals.waterGoal;
    let oldCurrent = waterGoals.waterCurrent;
    if (oldCurrent < oldGoal) {
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

  function setGoalsR(val, val2, val3, val4, val5) {
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
      sodiumCurrent: missGoals.sodiumCurrent,
      sodiumGoal: val5,
    });
  }

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
      quality: 0.4,
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setUserInfo({
          ...User,
          profile_image: 'data:image/jpg;base64,' + response.assets[0].base64,
        });
        upload_image({
          image: 'data:image/jpg;base64,' + response.assets[0].base64,
          userID: User.user_id,
        });
        local_upload_image(user_account_key, {...User, profile_image: 'data:image/jpg;base64,' + response.assets[0].base64})
      }
    });
  };

  return (
    <>
      <app_context.Provider
        value={{
          selectImage,
          User,
          APItoken: APIT,
          setUserInfo,
          userGoals,
          setUserGoals,
          waterGoals,
          setWaterGoals,
          missGoals,
          setMissGoals,
          toggleInitialStack,
        }}>
        <user_context.Provider
          value={{
            macroData: macroData.data,
            graphData,
            userGoals,
            missGoals,
            setGoalsR,
            date,
            DisplayDate,
            incrementDate,
            decrementDate,
            editDate,
            markedDate,
            setMarkedDate,
            User,
          }}>
          <water_context.Provider
            value={{
              waterGoals,
              increaseWaterLevel,
              decreaseWaterLevel,
              setWaterGoal,
              updateWaterTracker,
              waterText,
              User,
            }}>
            <foodLog_context.Provider
              value={{
                editBFLogData,
                editLunchLogData,
                editDinnerLogData,
                editSnackLogData,
                removeBFLogData,
                removeLunchLogData,
                removeDinnerLogData,
                removeSnackLogData,
                setLogQuantity,
                BFLogRef,
                LunchLogRef,
                DinnerLogRef,
                SnackLogRef,
              }}>
              <View style={{flex: 1}}>
                <ActivityScreen visibility={actScreen}/>
                <NavigationContainer>
                  {props.init === true ? <UserStack /> : <AuthStack />}
                </NavigationContainer>
              </View>
            </foodLog_context.Provider>
          </water_context.Provider>
        </user_context.Provider>
      </app_context.Provider>
    </>
  );
};
export default Root;
