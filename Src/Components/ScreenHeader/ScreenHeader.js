import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Styles/Colors';
import Styles from '../../Screens/Home/Styles';

const ScreenHeaderComponent = (props) =>{
    return (
        <View style={Styles.ModalContainer}>
    <View style={Styles.modalHeader}>
    <View style={Styles.ModalHeaderView}>
      <View style={{display: 'flex', flexDirection: 'row'}}>

        <Text style={Styles.homeText}>{props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => props.toggleModal}>
        <Icon
          name={'close'}
          color={'white'}
          size={35}
          style={{marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  </View>
  {props.children}
  </View>
    )
} 
export default ScreenHeaderComponent;