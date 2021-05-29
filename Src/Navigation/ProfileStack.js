import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../Screens/Profile';

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);
export default ProfileStack;
