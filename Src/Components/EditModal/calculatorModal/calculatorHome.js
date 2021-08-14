import React from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';
import Styles from '../../../Screens/Home/Styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../../Styles/Colors';
import CalcHomeScroll from './calculatorHomeScroll';
import BMRcalc from './calculatorComponents/BMRcalc';

const CalcHomeComponent = (props) => {
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
          <CalcHomeScroll/>
        </View>
        <BMRcalc title={"BMR"}/>
        </Modal>
        
    )
}

export default CalcHomeComponent;