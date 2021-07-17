import React, {useState} from 'react';
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
                value={quantity}
                onChangeText={(value) => {
                  setQuantity(value);
                }}
              />
            </View>
            <ModalComponent
              state={modalVisible}
              setVisible={setModalVisible}
              value={value}
            />
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
              <TextInput
                style={Styles.InputStyles1}
                placeholder={'1 cup(60ml)'}
                placeholderTextColor={Colors.White}
                value={calory}
                onChangeText={(value) => {
                  setCalorie(calory);
                }}
              />
            </View>
            <TouchableOpacity>
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
            renderItem={({item}) => showFood(item)}
          />
        </View>
      </View>
    </>
  );
};
export default FoodLog;
