import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import NutrionLog from '../Screens/NutrionLog';
import Instagram from '../Screens/Instagram';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Styles/Colors';

export const Tab = createBottomTabNavigator();
function UserStack(props) {

  return (
    
      <Tab.Navigator
        initialRouteName={'Home'}
        sceneContainerStyle={{backgroundColor: '#292942'}}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'rgba(255,200,160,1.0)',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.8)',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: '#292942',
          },
          headerShown: false
        }}
  
        >
        <Tab.Screen
          name="Home"
          component={Home}
          
          options={{
          
            tabBarIcon: ({color}) => (
              <Icon name={'home'} size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Log"
          component={NutrionLog}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={'book'} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Social"
          component={Instagram}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={'share-alt'} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={'user'} size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
}

export default UserStack;