import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../../../../Styles/Colors';
import Styles from '../../../../Screens/NutrionLog/Styles';
import Images from '../../../../Styles/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodLog from './foodLog';


const ModalComponent = (props) => {
  const [foodSearch, setFoodSearch] = useState('');
  const [foodSearchFocus, setSFocus] = useState(false);
  function inputFocus() {
    setSFocus(!foodSearchFocus);
  }

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.state}
      onRequestClose={() => props.setVisible(false)}>
      <View
        style={{
          height: 420,
          width: '85%',
          marginTop: '17%',
          backgroundColor: 'rgba(20,19,25,0.6)',
          borderRadius: 20,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            marginTop: 10,
            color: Colors.White,
            marginBottom: 13,
            fontWeight: 'bold',
          }}>
          Add Food
        </Text>
        <View
          style={{
            height: 1,
            width: '95%',
            backgroundColor: Colors.backgroundColor,
            alignSelf: 'center',
          }}
        />
        <View
          style={[
            Styles.ModalInput,
            {
              borderWidth: 2,
              borderColor:
                foodSearch.length > 0
                  ? '#62FF68'
                  : foodSearchFocus
                  ? Colors.buttonColor
                  : Colors.backgroundColor,
            },
          ]}>
          <TextInput
            onChangeText={setFoodSearch}
            value={foodSearch}
            placeholder={'Search Food'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            style={{
              color: 'white',
              width: '78%',
              paddingLeft: 10,
              marginRight: 18,
            }}
            textAlign={'left'}
            onFocus={inputFocus}
            onBlur={inputFocus}
          />
          {foodSearch.length > 0 && (
            <TouchableOpacity>
              <Icon
                name={'search'}
                color={'white'}
                size={23}
                style={{marginTop: 10}}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={Styles.ResultModal}>
          <Text style={{color: 'white', alignSelf: 'center', marginTop: 2}}>
            Results{' '}
          </Text>
          <View
            style={{
              marginTop: 3,
              height: 1,
              width: '95%',
              backgroundColor: 'rgba(255,255,255,0.6)',
              alignSelf: 'center',
            }}
          />
          <FoodLog />
        </View>
        <View style={{alignSelf: 'center', marginTop: 30, backgroundColor: Colors.buttonColor, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20}} >
          <TouchableOpacity style={{width: 110}}>
            <Text style={{color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>Add</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => props.setVisible(false)}>
          <Icon
            name={'angle-double-down'}
            size={30}
            color={'white'}
            style={{alignSelf: 'center', marginTop: 26}}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalComponent;
