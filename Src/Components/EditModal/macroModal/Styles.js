import {StyleSheet} from 'react-native';
import Colors from '../../../Styles/Colors';

const Styles = StyleSheet.create({
  customContainer: {
    width: '100%',
    height: '100%',
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
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  InputText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: 150
  },
  InputStyles: {
    width: '25%',
    backgroundColor: 'rgba(10,10,10,0.4)',
    borderRadius: 20,
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    paddingRight: 10,
    height: 40
  },
  InputSubview: {
    paddingLeft: 8,
    borderRadius: 20,
    width: '75%',
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
export default Styles;
