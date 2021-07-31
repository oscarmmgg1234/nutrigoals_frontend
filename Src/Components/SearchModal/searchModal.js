import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Styles/Colors';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toComputedKey } from '@babel/types';

const SearchModal = (props) => {
return (
    <Modal animationType={'slide'} transparent={true} visible={props.modal}>
        <View style={{height: '100%', width: '100%', backgroundColor: Colors.backgroundColor}}>
            <View style={{height: 100, width: '100%', backgroundColor: 'rgba(36,27,53,1)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 60,marginLeft: 15}}>Search</Text>
            <TouchableOpacity style={{marginRight: 15, marginTop: 60}} onPress={props.toggleModal}>
            <Icon name={'remove'} size={30} color={'white'} />
            </TouchableOpacity>
            </View>
            </View>
    </Modal>
)
}
export default SearchModal;