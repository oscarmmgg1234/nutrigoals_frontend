import React from 'react';

import {Modal, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../../../../Screens/Home/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const BMRcalc = (props) =>{
    const ref = props.index;
    return(
        <Modal visible={props.visibility} transparent={true} animationType={'fade'}>
             <View style={Styles.ModalContainer}>
    <View style={Styles.modalHeader}>
    <View style={Styles.ModalHeaderView}>
      <View style={{display: 'flex', flexDirection: 'row'}}>

        <Text style={Styles.homeText}>{props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => props.toggleModal(0)}>
        <Icon
          name={'close'}
          color={'white'}
          size={35}
          style={{marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  </View>
 <Text>oscar</Text>
  </View>
        
        </Modal>
    )
}
export default BMRcalc;