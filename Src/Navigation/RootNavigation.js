import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProfileStack from './ProfileStack';
import InstagramStack from './InstagramStack';
import NutrionStack from './NutrionStack';
import AsyncStorage from '@react-native-community/async-storage';

let status;
async function initScreen() {
  status = await AsyncStorage.getItem('LoggedInStatus');
}
function getScreen() {
  initScreen();
  if (status === '1') {
    return 'UserStack';
  } else {
    return 'AuthStack';
  }
}

const AppNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    UserStack: UserStack,
    ProfileStack: ProfileStack,
    InstagramStack: InstagramStack,
    NutrionStack: NutrionStack,
  },
  {
    initialRouteName: getScreen(),
  },
);
export default createAppContainer(AppNavigator);
