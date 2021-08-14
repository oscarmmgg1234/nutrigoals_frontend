import React from 'react';
import ScreenHeaderComponent from '../../../ScreenHeader/ScreenHeader';
import {Modal, Text} from 'react-native';
import { DayFromYear } from 'es-abstract/es5';

const BMRcalc = (props) =>{
    return(
        <Modal visible={props.visibilty} transparent={true} animationType={'fade'}>
        <ScreenHeaderComponent title={props.title}>
            <Text>Oscar</Text>
        </ScreenHeaderComponent>
        </Modal>
    )
}
export default BMRcalc;