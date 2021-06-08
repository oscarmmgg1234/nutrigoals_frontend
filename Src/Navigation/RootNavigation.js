import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProfileStack from './ProfileStack';
import InstagramStack from './InstagramStack';
import NutrionStack from './NutrionStack';
import AsyncStorage from '@react-native-community/async-storage';

let status = AsyncStorage.getItem('LoggedInStatus');
const AppNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    UserStack: UserStack,
    ProfileStack: ProfileStack,
    InstagramStack: InstagramStack,
    NutrionStack: NutrionStack,
  },
  {
    initialRouteName: status ? 'AuthStack' : 'UserStack',
  },
);
export default createAppContainer(AppNavigator);
