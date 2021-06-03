import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { color } from 'react-native-reanimated';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle1: {
    backgroundColor: Colors.ok,
  },
  safeViewStyle: {
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
  headerWrapper: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.ok
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  profileStyle: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  homeText: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 8
  },
  calenderText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 12
  },
  sideImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginTop: 8
  },
  sideImage1: {
    width: 30,
    height: 30,
    marginTop: 8
  },
  inputTextStyle1: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 15,
    marginBottom: 15,
    color: Colors.White,
    width: widthScreen / 1.15,
    alignSelf: 'center'
  },
  showProgressSingle: {
    width: widthScreen / 1.15,
    backgroundColor: Colors.ok,
    alignSelf: 'center',
    height: 150,
    shadowColor: "#000",
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
  totalText: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: '-70%',
    marginLeft: 35
  },
  totalText1: {
    fontSize: 12,
    color: Colors.White,
    // marginTop: '-2%',
    marginLeft: 34
  },
  totalText2: {
    fontSize: 12,
    color: Colors.grey,
    // marginTop: '-60%',
    marginLeft: 36
  },
  firstText: {
    fontSize: 12,
    color: Colors.grey,
  },
  firstText1: {
    fontSize: 15,
    color: Colors.White,
    fontWeight: '500'
  },
  headerContentWrapper: {
    marginTop: 15,
    marginBottom: 20
  },
  headerContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 20
  },
  showbackGroundContent: {
    width: 260,
    height: 290,
    marginRight: 5,
    marginLeft: 20,
    backgroundColor: '#3E3E58',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  showbackGroundContent1: {
    width: 260,
    height: 290,
    marginRight: 5,
    marginLeft: 20,
    backgroundColor: '#3E3E58',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  buttonIncrement: {
    width: 35,
    height: 35,
    backgroundColor: '#3E3E58',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  boxHeader: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center'
  },
  quantityWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center'
  },
  InputStyles: {
    width: 60,
    height: 30,
    borderRadius: 25,
    color: Colors.White,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: Colors.backgroundColor,
    marginLeft: 5
  },
  InputStyles1:{
    width: 110,
    height: 30,
    borderRadius: 25,
    color: Colors.White,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: Colors.backgroundColor,
    marginLeft: 5
  }
});
export default styles;