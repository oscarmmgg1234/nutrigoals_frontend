import { createStackNavigator } from 'react-navigation-stack';
import Instagram from '../Screens/Instagram';

const InstagramStack = createStackNavigator(
  {
    Instagram: { screen: Instagram },
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
export default InstagramStack;
