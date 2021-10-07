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
  SettingsInnerText: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.White,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  UnitText: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.White,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: -10,
    marginRight: 10
  },
  SettingsHalfInnerText: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.White,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 15
  },
  SelectableText: {
    fontSize: 23,
    fontWeight: '600',
    color: Colors.White,
    textAlign: 'center',
    justifyContent: 'center',
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
  LongContainer: {
    width: widthScreen / 1.15,
    backgroundColor: Colors.backgroundColor,
    alignSelf: 'center',
    height: 80,
    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  HalfTextContainers: {
    width: 150,
    height: 70,
    borderRadius: 20,
    elevation: 3,
    margin: 0,
    justifyContent: 'center',
  },
  AccountSettingsContainerHeaderText: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.White,
    marginTop: 15,
    marginLeft: 30,
    marginBottom: 10,
    marginRight: 94
  },
  PairTextContainer: {
    height: 45,
    width: widthScreen / 1.15,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  PairContainer: {
    height: 90,
    width: widthScreen / 1.15,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  HalfContainer: {
    width: 150,
    backgroundColor: Colors.backgroundColor,
    height: 70,
    marginRight: 40,
    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeightContainers: {
    width: 120,
    backgroundColor: Colors.backgroundColor,
    height: 60,
    marginRight: 10,
    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SettingsEditIcon: {
    marginRight: 20,
  }
});
export default styles;