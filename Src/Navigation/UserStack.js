import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screens/Home';

const UserStack = createStackNavigator(
  {
    Home: {screen: Home},
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
export default UserStack;
