import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';
import Styles from '../../../Screens/Home/Styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../../Styles/Colors';
import CalcHomeScroll from './calculatorHomeScroll';
import BMRcalc from './calculatorComponents/BMRcalc';


const CalcHomeComponent = (props) => {
  const [modal_bmr_v, setVisiBMR] = useState(false);
  const [modal_bmi_v, setVisiBMI] = useState(false);

  

  
  const toggleModal = (index) => {
    
    switch(index){
      case 0: {
        
        setVisiBMR(false);
        break;
      }
      case 1: {
        
        setVisiBMI(false);
        break;
      }
    }
  }
  const runModal = (index) => {
    switch(index){
      case 0:{
        setVisiBMR(true);
        break;
      }
      case 1: {
        setVisiBMI(true);
        break;
      }
    }
  }
    return (
        
        <Modal visible={props.visibility} transparent={true} animationType={'fade'} onRequestClose={()=>props.toggleModal}>
            <View style={{width: '100%', height: '100%', backgroundColor: Colors.texInputBackground}}>
            <View style={Styles.modalHeader}>
               <View style={Styles.ModalHeaderView}>
            <View style={{display: 'flex', flexDirection: 'row'}}>

              <Text style={Styles.homeText}>{'Calculators'}</Text>
            </View>

            <TouchableOpacity onPress={() => props.toggleModal(4)}>
              <Icon
                name={'close'}
                color={'white'}
                size={35}
                style={{marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
          </View> 
          <CalcHomeScroll runModal={runModal} />
        </View>
        <BMRcalc title={"BMR"} visibility={modal_bmr_v} toggleModal={toggleModal} />
        </Modal>
        
    )
}

export default CalcHomeComponent;