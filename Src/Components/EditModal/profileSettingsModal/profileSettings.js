import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileSettings = (props) => {
    return (
        <Modal
        animationType={'slide'}
        visible={props.modal}
        onRequestClose={() => props.toggleModal()}>
          <View>
            <TouchableOpacity onPress={() => props.toggleModal()}>
              <Icon
                name={'close'}
                color={'black'}
                size={35}
                style={{marginTop: 20, marginLeft: 20}}
              />
            </TouchableOpacity>
            <Text> This is the profile settings page </Text>
          </View>
        </Modal>
    );
};
export default ProfileSettings;