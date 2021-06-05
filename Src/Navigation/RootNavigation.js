import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProfileStack from './ProfileStack';
import InstagramStack from './InstagramStack';
import NutrionStack from './NutrionStack';
import AsyncStorage from '@react-native-community/async-storage';
const AppNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    UserStack: UserStack,
    ProfileStack: ProfileStack,
    InstagramStack: InstagramStack,
    NutrionStack: NutrionStack,
  },
  {
    initialRouteName: AsyncStorage.getItem('LoggedInStatus')
      ? 'UserStack'
      : 'AuthStack',
  },
);
export default createAppContainer(AppNavigator);
