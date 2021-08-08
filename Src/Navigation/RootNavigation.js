
import React from 'react';
import UserStack from './AppStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens';
enableScreens(true)
const AppStack = createNativeStackNavigator();

const RootNavigation = (props) =>{
  const [user, setUser] = React.useState(false)
  
  return(
    <NavigationContainer>
    <AppStack.Navigator 
    screenOptions={{headerShown: false}} detachInactiveScreens={true}
  >
      <AppStack.Screen name={'AuthStack'} component={AuthStack}/>
    
      <AppStack.Screen name={'UserStack'} component={UserStack} options={{gestureEnabled: false}} detachPreviousScreen={true}/>
  
    </AppStack.Navigator>
    </NavigationContainer>
  )
}




export default RootNavigation;
