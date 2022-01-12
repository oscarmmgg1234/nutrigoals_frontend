import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  mainContainer: {
    marginTop: 20,
    width: widthScreen / 1.1,
    alignSelf: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.White,
    textAlign: 'center',
    marginTop: '10%',
  },
  emailMainContainer: {
    marginTop: '2%',
    width: widthScreen / 1.1,
    alignSelf: 'center',
  },
  inputTextStyle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: '20%',
    color: Colors.White,
    width: widthScreen / 1.25,
    alignSelf: 'center',
  },
  inputTextStyle1: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 20,
    color: Colors.White,
    width: widthScreen / 1.25,
    alignSelf: 'center',
  },
  emailWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.texInputBackground,
    borderRadius: 25,
    backgroundColor: Colors.texInputBackground,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 18,
    margin: 8,
    color: Colors.White,
  },
  checkImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 6,
  },
  buttonContainerView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer2: {
    width: widthScreen / 2.6,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonColor,
    marginTop: '10%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonContainer: {
    width: widthScreen / 1.5,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonColor,
    marginTop: '10%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600',
  },
  genderInputView: {
    marginTop: 15,
    flexDirection: 'row',
    width: '100%',
    height: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },
  genderInputText: {
    marginHorizontal: 25,
    color: 'white',
    fontSize: 19,
  },
  checkText: {
    color: '#CACBC6',
    fontSize: 15,
    alignSelf: 'center',
    paddingRight: 10,
  },
  scrollWrapper: {
     backgroundColor: "rgba(0,0,0,0.3)", 
     borderRadius: 20, 
     alignSelf: 'center', 
     marginTop: 20
  }
});

export default styles;
