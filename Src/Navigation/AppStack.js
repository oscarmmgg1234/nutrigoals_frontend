import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import NutrionLog from '../Screens/NutrionLog';
import Instagram from '../Screens/Instagram';
import Profile from '../Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Styles/Colors';

export const Tab = createBottomTabNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: Colors.buttonColor,
          inactiveTintColor: 'white',
          keyboardHidesTabBar: true,
          style: {
            backgroundColor: '#292942',
          },
        }}>
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
    </NavigationContainer>
  );
}

export default AppStack;
