
import Login from '../Screens/AuthScreens/Login';
import LoginSplash from "../Screens/AuthScreens/Login/LoginSplash";
import Register from '../Screens/AuthScreens/Register';
import RegisterUserName from '../Screens/AuthScreens/Register/userName';
import React from'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return(
    <stack.Navigator screenOptions={{headerShown: false, }} >
     
     <stack.Screen name={'LoginSplash'} component={LoginSplash} />
      <stack.Screen name={'Login'} component={Login} />
      <stack.Screen name={'Register'} component={Register}/>
      <stack.Screen name={'RegisterUserName'} component={RegisterUserName}/>
      
    </stack.Navigator>
  )
}
export default AuthStack;
