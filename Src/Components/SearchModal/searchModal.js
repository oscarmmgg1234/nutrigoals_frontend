import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Colors from '../../Styles/Colors';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchModal = (props) => {
  const [searchItem, setSearchI] = useState('');
  return (
    <>
      <Modal animationType={'slide'} transparent={true} visible={props.modal}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: Colors.backgroundColor,
          }}>
          <View
            style={{
              height: 100,
              width: '100%',
              backgroundColor: 'rgba(36,27,53,1)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 60,
                marginLeft: 15,
              }}>
              Search
            </Text>
            <TouchableOpacity
              style={{marginRight: 15, marginTop: 60}}
              onPress={props.toggleModal}>
              <Icon name={'remove'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View
              style={{
                height: 50,
                width: '85%',
                backgroundColor: 'rgba(255,255,255,0.6)',
                borderRadius: 20,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40,
              }}>
              <View
                style={{
                  height: '97%',
                  width: '99%',
                  backgroundColor: Colors.texInputBackground,
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={setSearchI}
                  value={searchItem}
                  textAlign={'left'}
                  placeholder={'Search Food'}
                  placeholderTextColor={'rgba(255,255,255,0.6)'}
                  style={{
                    paddingLeft: 15,
                    width: '86%',
                    color: 'white',
                    fontSize: 17,
                  }}
                />
                {searchItem.length > 0 ? (
                  <TouchableOpacity style={{marginRight: 10}}>
                    <Icon name={'search'} color={'white'} size={29} />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};
export default SearchModal;
