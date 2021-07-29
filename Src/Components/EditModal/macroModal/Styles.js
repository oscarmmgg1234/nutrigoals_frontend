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
  },
  InputStyles: {
    width: '40%',
    backgroundColor: 'rgba(10,10,10,0.4)',
    borderRadius: 20,
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    paddingRight: 10,
  },
  InputSubview: {
    paddingLeft: 8,
    borderRadius: 20,
    width: '50%',
    backgroundColor: Colors.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default Styles;
