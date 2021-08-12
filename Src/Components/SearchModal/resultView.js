import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Styles/Colors';
import Styles from '../../Screens/NutrionLog/Styles';


const ResultsViewSearch = (props) => {

    
    function toggleFocus(value) {
      if (value.toggle === false) {
        let temp = props.data.map((obj) =>
          value.name === obj.name
            ? {...obj, toggle: true}
            : {...obj, toggle: false},
        );
        props.visBool(true)
        props.setData(temp);
      } else {
        let temp = props.data.map((obj) =>
          value.name === obj.name ? {...obj, toggle: false} : obj,
        );
        props.setData(temp);
        props.visBool(false)
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
              <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 9, marginBottom: 3, alignSelf: 'center'}}>{'Result: '}{index + 1}</Text>
              <View style={{height: 1, width: '70%', backgroundColor: Colors.black, alignSelf: 'center'}}/>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15, alignSelf: 'center', marginTop: 6,paddingLeft: 4}}>{value.name}</Text>
              <View style={{height: 1, width: '100%', backgroundColor: Colors.black, alignSelf: 'center', marginTop: 10}}/>
              <Text style={{color: 'rgba(255,255,255,0.8)', fontSize: 11, alignSelf: 'center', marginTop: 6,paddingLeft: 4}}>{value.food_description}</Text>
              
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
              renderItem={({item,index}) => showFood(item, index)}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </>
    );
  };
  export default ResultsViewSearch;