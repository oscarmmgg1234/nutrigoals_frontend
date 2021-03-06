import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Styles/Colors';
import {color} from 'react-native-reanimated';
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
    fontSize: 30,
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
  totalText: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: '-70%',
    marginLeft: 35,
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
    width: 150,
    height: 200,
    marginRight: 5,
    marginLeft: 20,
    backgroundColor: '#3E3E58',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  showbackGroundContent1: {
    width: 150,
    height: 200,
    marginRight: 5,
    marginLeft: 20,
    backgroundColor: '#3E3E58',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  showbackGroundContent2: {
    
    width: 130,
    height: 170,
    marginRight: 5,
    marginLeft: 20,
    backgroundColor: '#3E3E58',
    // justifyContent: 'center',
    
    borderRadius: 15,
    
  },
  buttonIncrement: {
    width: 45,
    height: 35,
    backgroundColor: '#3E3E58',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  boxHeader: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  quantityWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputStyles: {
    width: 60,
    height: 35,
    borderRadius: 25,
    color: Colors.White,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: Colors.backgroundColor,
    marginLeft: 5,
  },
  InputStyles1: {
    width: 110,
    height: 35,
    borderRadius: 25,
    color: Colors.White,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: Colors.backgroundColor,
    marginLeft: 5,
  },
  divider: {
    marginTop: 10,
    height: 2,
    width: '90%',
    backgroundColor: Colors.ok,
  },
  checkImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 6,
  },
  ModalInput:{
    fontSize: 20,
    fontWeight: '400',
    marginTop: '5%',
    color: Colors.White,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    height: 50,



  },

  ResultModal: {

    width: '80%',
    height: 280,
    backgroundColor: Colors.backgroundColor,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  PageResultContainer: {
    width: '90%',
    flexDirection: 'row',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

});
export default styles;
