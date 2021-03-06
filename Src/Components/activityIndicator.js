import React from 'react';
import {Modal, View,Animated,
    Easing} from 'react-native';



const ActivityComponent = (props) => {
    const rotateAnimatedValue = React.useRef(new Animated.Value(0)).current

    Animated.loop(Animated.timing(rotateAnimatedValue, {
        toValue: 1,
        duration: 1800,
        easing: Easing.linear,
        useNativeDriver: false,
      })).start()

    const spin = rotateAnimatedValue.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg','360deg']
      })

    return (
        <Modal visible={props.visibility} transparent={true} animationType={'none'}>
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>

                <Animated.Image source={require('../assests/logo/nutrigoalsSpinR.png')} style={{width: 150, height: 150, transform: [{rotate: spin}]}}/>

                
            </View>

        </Modal>
    )
}

export default ActivityComponent;