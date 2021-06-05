import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Screens/AuthScreens/Login';
import Register from '../Screens/AuthScreens/Register';
import RegisterUserName from '../Screens/AuthScreens/Register/userName';

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: Register},
    RegisterUserName: {screen: RegisterUserName},
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: {gesturesEnabled: false},
    },
    headerMode: 'none',
  },
);
export default AuthStack;
