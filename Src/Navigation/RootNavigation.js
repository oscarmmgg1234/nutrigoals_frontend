
import React from 'react';
import UserStack from './AppStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator();

const RootNavigation = (props) =>{
  const [user, setUser] = React.useState(false)
  
  return(
    <NavigationContainer>
    <AppStack.Navigator 
    screenOptions={{headerShown: false}}
  >
      <AppStack.Screen name={'AuthStack'} component={AuthStack}/>
    
      <AppStack.Screen name={'UserStack'} component={UserStack} options={{gestureEnabled: false}}/>
  
    </AppStack.Navigator>
    </NavigationContainer>
  )
}




export default RootNavigation;
