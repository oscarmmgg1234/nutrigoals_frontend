import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    UserStack: AppStack,
  },
  {
    initialRouteName: 'UserStack',

  },
);

export default createAppContainer(AppNavigator);
