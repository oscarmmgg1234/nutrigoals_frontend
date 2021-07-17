import React from 'react';
import {Modal, View, Text, TextInput, Image} from 'react-native';
import Colors from '../../../../Styles/Colors';
import Styles from '../../../../Screens/NutrionLog/Styles';
import Images from '../../../../Styles/Images';

const ModalComponent = (props) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.state}
      onRequestClose={() => props.setVisible(false)}>
      <View
        style={{
          height: 300,
          width: '85%',
          marginTop: '60%',
          backgroundColor: 'white',
          borderRadius: 20,
          alignSelf: 'center',
        }}>
        <Text style={{alignSelf: 'center'}}>Add Food</Text>
        <View
          style={{
            height: 1,
            width: '95%',
            backgroundColor: Colors.backgroundColor,
            alignSelf: 'center',
          }}
        />
        <View style={Styles.ModalInput}>
          <TextInput />
          {props.value.name.length > 0 && (
            <Image source={Images.check} style={Styles.checkImage} />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
