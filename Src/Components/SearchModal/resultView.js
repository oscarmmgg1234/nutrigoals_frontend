import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Styles/Colors';
import Styles from '../../Screens/NutrionLog/Styles';


const ResultsViewSearch = (props) => {

  // React.useEffect(()=>{
  //   flatListRef.scrollToOffset({x: 0, animated: true})
  // }, [props.data])
    
    function toggleFocus(value, index) {
      if (value.toggle === false) {
        let temp = props.data.map((obj, ind) =>
          index === ind
            ? {...obj, toggle: true}
            : {...obj, toggle: false},
        );
        props.visBool(true)
        props.setData(temp);
      
      // use temp to filter obj to get servings for food
      let temp1 = temp.filter((obj) => obj.toggle === true);
      props.getServ(temp1);
      
      temp.map((obj)=>{if(obj.toggle === true){props.set(obj.name)}})

      } else {
        let temp = props.data.map((obj, ind) =>
          index === ind ? {...obj, toggle: false} : obj,
        );
        props.setData(temp);
        props.setPortionData([])
        props.visBool(false)
      }
    }
    const showFood = (value, index) => {
      return (
        <>
          <TouchableOpacity onPress={() => toggleFocus(value, index)}>
            <View
              style={[
                Styles.showbackGroundContent2,
                {
                  borderWidth: 2,
                  borderColor: value.toggle ? 'violet' : Colors.backgroundColor,
                  
                  
                },
              ]}>
              <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 9, marginBottom: 3, alignSelf: 'center'}}>{'Result: '}{index + 1}</Text>
              <View style={{height: 1, width: '70%', backgroundColor: Colors.black, alignSelf: 'center'}}/>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15, alignSelf: 'center', marginTop: 6,paddingLeft: 4}}>{value.name}</Text>
              {value.brand_name != null && <Text style={{color: 'rgba(195,150,200,1)', fontSize: 11, alignSelf: 'center', marginTop: 3,paddingLeft: 4}}>{'(' + value.brand_name + ')'}</Text>}
              <View style={{height: 1, width: '100%', backgroundColor: Colors.black, alignSelf: 'center', marginTop: 10}}/>
              <Text style={{color: 'rgba(255,255,255,0.8)', fontSize: 11, alignSelf: 'center', marginTop: 6,paddingLeft: 4}}>{value.food_description}</Text>
              {value.brandName != null && 
              <Text style={{color: 'rgba(255,255,255,0.8)', fontSize: 11, alignSelf: 'center', marginTop: 2,paddingLeft: 1}}>brand name: {value.brandName}</Text>
            }
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
              ref={(ref)=>{this.flatListRef = ref}}
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