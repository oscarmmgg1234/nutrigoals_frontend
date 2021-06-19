import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle1: {
    backgroundColor: Colors.ok,
  },
  safeViewStyle: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  headerWrapper: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.ok,
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  profileStyle: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  homeText: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 8,
  },
  calenderText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 12,
  },
  sideImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginTop: 8,
  },
  sideImage1: {
    width: 30,
    height: 30,
    marginTop: 8,
  },
  inputTextStyle1: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 15,
    marginBottom: 15,
    color: Colors.White,
    width: widthScreen / 1.15,
    alignSelf: 'center',
  },
  showProgressSingle: {
    width: widthScreen / 1.15,
    backgroundColor: Colors.ok,
    alignSelf: 'center',
    height: 150,
    shadowColor: '#000',
    borderRadius: 20,
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
  macroProgressTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  macroProgressText: {
    fontSize: 13,
    color: Colors.White,
  },
  macroProgressText1: {
    fontSize: 13,
    color: Colors.grey,
  },
  totalText: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: '-70%',
    marginLeft: 35,
  },
  totalTextMacro: {
    fontSize: 9,
    color: Colors.grey,
    marginTop: '-66%',
    marginLeft: 17,
  },
  totalText1: {
    fontSize: 12,
    color: Colors.White,
    // marginTop: '-2%',
    marginLeft: 34,
  },
  totalText2: {
    fontSize: 12,
    color: Colors.grey,
    // marginTop: '-60%',
    marginLeft: 36,
  },
  firstText: {
    fontSize: 12,
    color: Colors.grey,
  },
  firstText1: {
    fontSize: 15,
    color: Colors.White,
    fontWeight: '500',
  },
  headerContentWrapper: {
    marginTop: 15,
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 20,
  },
  showbackGroundContent: {
    width: 95,
    height: 140,
    marginRight: 5,
    marginLeft: 10,
    backgroundColor: Colors.ok,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
export default styles;
