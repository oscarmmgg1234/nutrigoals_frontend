import React, {Component, useContext} from 'react';
import {View} from 'react-native';
import { createContext } from 'react/cjs/react.development';
import RootNavigation from './Navigation/RootNavigation';

console.disableYellowBox = true;
export const app_context = createContext();

class Root extends Component {
  render() {
    return (
      <>
      <app_context.Provider value={{ThemeStyle: 'dark',LoggedInStatus: false,user: 
      {name: 'Oscar Maldonado', age: 23, weight: 134.6, gender: 'male', proteinGoal: 100, fatGoal: 200, carbGoal: 350} 
       }}>
        <View style={{flex: 1}}>
          <RootNavigation />
        </View>
        </app_context.Provider>
      </>
    );
  }
}
export default Root;
