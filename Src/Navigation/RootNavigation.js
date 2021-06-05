import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProfileStack from './ProfileStack';
import InstagramStack from './InstagramStack';
import NutrionStack from './NutrionStack';

const AppNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    UserStack: UserStack,
    ProfileStack: ProfileStack,
    InstagramStack: InstagramStack,
    NutrionStack: NutrionStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);
export default createAppContainer(AppNavigator);
