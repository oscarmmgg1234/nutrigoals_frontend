import {StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: '#292942',
    width: widthScreen,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    
  },
  bottomContainerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignSelf: 'center',
    // height: 50,
    // marginTop: 10,
    // marginBottom: 10,
    backgroundColor: '#292942',
  },
  imagesStyle: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  bottomText: {
    fontSize: 11,
    marginTop: 5,
    color: '#52575C',
    textAlign: 'center',
  },
  bottomText1: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 10,
    color: '#52575C',
    textAlign: 'center',
  },
});
export default styles;
