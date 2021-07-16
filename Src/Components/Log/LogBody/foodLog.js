import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Styles from '../../../Screens/NutrionLog/Styles';
import Colors from '../../../Styles/Colors';
import Images from '../../../Styles/Images';

const FoodLog = () => {
  const [quantity, setQuantity] = useState('');
  const [calory, setCalorie] = useState('');
  const [logdata, setLogData] = useState([
    {
      name: 'Toast',
    },
    {
      name: 'Egg',
    },
    {
      name: 'add',
    },
  ]);

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
                    fontSize: 18,
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
                  fontSize: 18,
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

            <View style={Styles.quantityWrapper}>
              <Text
                style={{
                  color: Colors.White,
                  fontSize: 18,
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
          <TouchableOpacity>
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
      <Text style={Styles.inputTextStyle1}>{'Breakfast:'}</Text>
      <View style={Styles.headerContentWrapper}>
        <View style={Styles.headerContent}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={logdata}
            renderItem={({item}) => showFood(item)}
          />
        </View>
      </View>
    </>
  );
};
export default FoodLog;
