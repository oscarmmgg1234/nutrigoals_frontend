import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import Styles from '../../../../Screens/NutrionLog/Styles';
import Colors from '../../../../Styles/Colors';
import Images from '../../../../Styles/Images';
import ModalComponent from './foodLogModal';

const FoodLog = (props) => {
  const [quantity, setQuantity] = useState('');
  const [calory, setCalorie] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState([]);
  function removeFood(arg) {
    props.removeLog(arg);
  }
  function updateLogQuantity(obj, value) {
    if(parseFloat(value) > 0){
    props.updateQuantity(obj, value);
    }
    else props.updateQuantity(obj, '1');
    
  }

  const showFood = (value, index) => {
    return (
      <>
        {value.name != 'add' ? (
          <View style={Styles.showbackGroundContent1}>
            <TouchableOpacity>
              <View style={Styles.boxHeader}>
                <Text
                  style={{
                    color: Colors.White,
                    fontSize: 15,
                    fontWeight: '500',
                  }}>
                  {value.name}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={Styles.divider} />
            <View style={Styles.quantityWrapper}>
              <Text
                style={{
                  color: Colors.White,
                  fontSize: 15,
                  fontWeight: '500',
                  marginRight: 10,
                }}>
                {'Qty: '}
              </Text>
              <TextInput
                style={Styles.InputStyles}
                placeholder={'1'}
                placeholderTextColor={Colors.White}
                value={input[index]}
                onBlur={()=>{props.updateQuantity(value, input[index-1]); console.log(`On blur event has tiggered will pass ${parseFloat(input[index-1])}`)}}
              
                onChangeText={(text) => {
                  let temp = input;
                  temp[index - 1] = text;
                  setInput(temp);
                 console.log(`OnChangeHas been executed with updatedValue: ${input[index-1]}`)
                }}
                keyboardType={'decimal-pad'}
              />
            </View>
            <View style={Styles.quantityWrapper}>
              <Text
                style={{
                  color: Colors.White,
                  fontSize: 15,
                  fontWeight: '500',

                  marginRight: 3,
                }}>
                {'Of'}
              </Text>
              <Text
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 15,
                  marginLeft: 10,
                }}>
                {'1 cup(60ml)'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => removeFood(value)}>
              <Image
                source={Images.delete}
                style={{width: 20, height: 20, marginTop: 23}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={Styles.showbackGroundContent}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: Colors.White}}>
                {'Add Food Element'}
              </Text>
              <Image
                source={Images.plus}
                style={{width: 35, height: 30, marginTop: 15}}
              />

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: Colors.White,
                  marginTop: 25,
                }}>
                {'Or scan it'}
              </Text>
              <ModalComponent
                state={modalVisible}
                setVisible={setModalVisible}
                value={value}
                context={props.data}
                addFood={props.addLog}
                removeFood={props.removeLog}
              />
              <Image
                source={Images.doc}
                style={{width: 35, height: 30, marginTop: 10}}
              />
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <>
      <View style={Styles.headerContentWrapper}>
        <View style={Styles.headerContent}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={props.data}
            renderItem={({item, index}) => showFood(item, index)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
};
export default FoodLog;
