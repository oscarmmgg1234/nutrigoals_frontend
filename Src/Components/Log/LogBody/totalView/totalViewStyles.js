import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  viewContainer: {
    width: widthScreen / 1.15,
    backgroundColor: Colors.ok,
    alignSelf: 'center',
    height: 250,
    shadowColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    width: widthScreen / 1.25,
    height: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  progressContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    borderRadius: 10,
    paddingLeft: 5,
    justifyContent: 'space-between',
    height: 30,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#3E3E58',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10
  },

});
