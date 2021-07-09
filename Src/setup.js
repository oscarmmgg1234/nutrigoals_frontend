
import React, {Component, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import { createContext } from 'react/cjs/react.development';
import RootNavigation from './Navigation/RootNavigation';

console.disableYellowBox = true;
export const app_context = createContext();

class Root extends Component {
  constructor(props){
    super(props);
    this.state = {ThemeStyle: 'dark', macroData: {data: [{
      name: 'Protein',
      macroGoal: 100,
      macroCurrent: 50,
    },
    {
      name: 'Fat',
      macroGoal: 100,
      macroCurrent: 2,
    },
    {
      name: 'Carbohydrates',
      macroGoal: 100,
      macroCurrent: 10,
    },
    {
      name: 'Sugar',
      macroGoal: 100,
      macroCurrent: 32,
    },
    {
      name: 'Sodium',
      macroGoal: 100,
      macroCurrent: 32,
    },]},
     AuthStatus: '0', user: {name: '', age: 34, weight: 134.6, gender: 'male', proteinGoal: 100, fatGoal: 200, carbGoal: 350, waterGoal: 12, username: 'oscar'}}
  }


  componentDidMount(){
    this.setState({ThemeStyle: AsyncStorage.getItem('@themeStyle'), AuthStatus: AsyncStorage.getItem('@authStatus'), user: {name: AsyncStorage.getItem('@userName'), age: AsyncStorage.getItem('@userAge'), 
    gender: AsyncStorage.getItem('@userGender'), proteinGoal: AsyncStorage.getItem('@proteinGoal'), fatGoal: AsyncStorage.getItem('@fatGoal'), carbGoal: AsyncStorage.getItem('@carbGoal'), username: AsyncStorage.getItem('@username'), waterGoal: AsyncStorage.getItem('@waterGoal')}});
    this.setState({macroData: {data: [{
      name: 'Protein',
      macroGoal: this.state.user.proteinGoal,
      macroCurrent: 50,
    },
    {
      name: 'Fat',
      macroGoal: this.state.user.fatGoal,
      macroCurrent: 2,
    },
    {
      name: 'Carbohydrates',
      macroGoal: this.state.user.carbGoal,
      macroCurrent: 15,
    },
    {
      name: 'Sugar',
      macroGoal: 100,
      macroCurrent: 32,
    },
    {
      name: 'Sodium',
      macroGoal: 100,
      macroCurrent: 32,
    },]}})
  }

  async save_data(key,value){
    await AsyncStorage.setItem(key, value);
  }
  async get_data(key){
    let response = await AsyncStorage.getItem(key);
    return stringify(response);
  }

  updateUsername(userName){
    this.setState(...this.state, {username: userName});
    this.save_data('@username', username);
  }
  updateThemeStyle(style){
    this.setState(...this.state, {ThemeStyle: style});
    this.save_data('@themeStyle', style);
  }
  updateAuthStatus(status){
    this.setState(...this.state, {AuthStatus: status});
    this.save_data('@authStatus', status);
    
  }

  render() {
    const {Theme_Style, AuthStatus, user, macroData} = this.state;
    return (
      <>
      <app_context.Provider value={{ThemeStyle: Theme_Style,macroData: macroData.data,LoggedInStatus: AuthStatus,name: "oscar", userInfo: 
      user, updateUsername: this.updateUsername, updateTheme: this.updateThemeStyle, updateAuthStatus: this.updateAuthStatus, save_data: this.save_data, get_data: this.get_data, 
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
