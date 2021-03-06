import {StyleSheet, Dimensions, Platform} from 'react-native';
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
    width: 60,
    height: 60,
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
  weightContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 180,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 17,
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '83%',
    height: 200,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 20,
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
  ModalContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.texInputBackground,
  },
  modalHeader: {
    paddingTop: Platform.OS === 'ios' ? 37 : 0,
    width: '100%',
    height: 100,

    backgroundColor: Colors.backgroundColor,
  },
  ModalHeaderView: {
    marginTop: 10,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listWrapper: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 30,
    height: 30,
  },
  seperator: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    width: widthScreen / 1.15,
    alignSelf: 'center',
  },
  listText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 3,
    marginLeft: 15,
  },

  MacroModalContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.texInputBackground,
  },
  macroBodySwitchHeaderSwitch: {
    width: '100%',
    alignItems: 'center',
  },
  macroTextSwitch: {
    color: 'white',
    marginTop: 20,
    marginBottom: 17,
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    width: widthScreen / 1.25,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4343',
    marginTop: '5%',
    marginBottom: 15,
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600',
  }, 
  InputView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  
  },
  InputView1: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    
  },
  InputText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: 50
  }, InputText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: 70
  },
  InputStyles1: {
    width: '35%',
    backgroundColor: 'rgba(10,10,10,0.4)',
    borderRadius: 20,
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    paddingRight: 10,
    height: 40,
    flexDirection: 'row'
  }, InputStyles2: {
    width: '28%',
    backgroundColor: 'rgba(10,10,10,0.4)',
    borderRadius: 20,
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    paddingRight: 10,
    height: 40,
    flexDirection: 'row'
  },
  InputStyles: {
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    paddingRight: 10,
    height: 40,
    flexDirection: 'row'
  },
  InputSubview: {
    paddingLeft: 8,
    borderRadius: 20,
    width: '90%',
    backgroundColor: Colors.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    
  },
  pickerTextContainer:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 20,
  },
  pickerText:{
    marginVertical: 20,
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: 'bold'
  }

});
export default styles;
