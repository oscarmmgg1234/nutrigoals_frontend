import {createStackNavigator} from 'react-navigation-stack';
import NutrionLog from '../Screens/NutrionLog';

const NutrionStack = createStackNavigator(
  {
    NutrionLog: {screen: NutrionLog},
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
export default NutrionStack;
