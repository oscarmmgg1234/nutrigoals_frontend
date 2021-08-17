import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';

const ActivityComponent = (props) => {
    
    return (
        <Modal visible={props.visibility} transparent={true} animationType={'none'}>
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <ActivityIndicator size={'large'} color={'white'}/>
            </View>

        </Modal>
    )
}

export default ActivityComponent;