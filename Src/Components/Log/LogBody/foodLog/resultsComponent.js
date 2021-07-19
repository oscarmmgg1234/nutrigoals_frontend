import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Styles from '../../../../Screens/NutrionLog/Styles';
import Colors from '../../../../Styles/Colors';

const ResultsView = (props) => {
  function addFood() {
    let temp = props.data.map((obj) =>
      obj.toggle === true ? {name: obj.name} : null,
    );
    props.setSelected(temp);
  }
  function toggleFocus(value) {
    if (value.toggle === false) {
      let temp = props.data.map((obj) =>
        value.name === obj.name ? {...obj, toggle: true} : obj,
      );
      props.setData(temp);
      addFood();
    } else {
      let temp = props.data.map((obj) =>
        value.name === obj.name ? {...obj, toggle: false} : obj,
      );
      props.setData(temp);
      addFood();
    }
  }
  const showFood = (value, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => toggleFocus(value)}>
          <View
            style={[
              Styles.showbackGroundContent2,
              {
                borderWidth: 2,
                borderColor: value.toggle ? 'orange' : Colors.backgroundColor,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 12}}>{value.name}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <View style={Styles.headerContentWrapper}>
        <View style={Styles.headerContent}>
          <FlatList
            initialNumToRender={5}
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
export default ResultsView;
