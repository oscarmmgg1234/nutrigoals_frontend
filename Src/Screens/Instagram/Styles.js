import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
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
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  homeText: {
    fontSize: 23,
    fontWeight: '700',
    color: Colors.White,
    marginTop: 10,
  },
  sideImage: {
    width: 25,
    height: 20,
    marginRight: 15,
    marginTop: 15
  },
  sideImage1: {
    width: 30,
    height: 30,
    marginTop: 12
  },
  headerContentWrapper: {
    marginTop: 15,
    marginBottom: 70
  },
  headerContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 20
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
  headerContentInner: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  storyText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    color: Colors.White,
    fontWeight: '400'
  },
  storyText1: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: '400',
    marginLeft: 15,
    marginTop: 15
  },
  storyWrapper: {
    width: 70
  },
  mainDataWrapper: {
    width: widthScreen,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: '10%',
    // marginBottom: 25/
  },
  listMainWrapper: {
    marginTop: 15,
    // marginBottom: 15
  },
  listMainContent: {
    flexDirection: 'row',
    width: widthScreen / 1.1,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },

  totalText: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: '-80%',
    marginLeft: 25
  },
  totalText1: {
    fontSize: 12,
    color: Colors.black,
    // marginTop: '-2%',
    marginLeft: 24
  },
  totalText2: {
    fontSize: 12,
    color: Colors.grey,
    // marginTop: '-60%',
    marginLeft: 26
  },
  totalText3: {
    fontSize: 12,
    color: Colors.black,
    marginTop: 7
  },
  seperator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: 10,
    marginBottom: 20,
    width: widthScreen / 1.1,
    alignSelf: 'center'
  }


});
export default styles;