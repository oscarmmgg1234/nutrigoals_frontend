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
    fontWeight: '600',
    color: Colors.White,
    marginTop: 10,
  },
  darkModeText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.White,
  },
  profileStyle: {
    width: 110,
    height: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center'
  },
  editIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    width: 30,
    height: 30
  },
  profileMain: {
    width: widthScreen / 1.1,
    alignSelf: 'center',
    marginTop: 40
  },
  listWrapper: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: "space-between"
  },
  userImage: {
    width: 30,
    height: 30
  },
  userImage1: {
    width: 25,
    height: 30
  },
  listText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 3,
    marginLeft: 15,
  },
  seperator: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    width: widthScreen / 1.15,
    alignSelf: 'center'
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
    borderRadius: 20
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
});
export default styles;