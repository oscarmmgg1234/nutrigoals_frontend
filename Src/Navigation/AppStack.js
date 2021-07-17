import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import NutrionLog from '../Screens/NutrionLog';
import Instagram from '../Screens/Instagram';
import Profile from '../Screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

export const Tab = createBottomTabNavigator()
function AppStack() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NutritionLog" component={NutrionLog} />
      <Tab.Screen name="Instagram" component={Instagram} />
      <Tab.Screen name="'Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;