import React from 'react';
import { TouchableOpacity, View, FlatList, Text } from 'react-native';
import Styles from '../../../../Screens/NutrionLog/Styles'

const PortionView = (props) => {

  React.useEffect(()=>{
    flatListRef.scrollToOffset({x: 0, animated: true})
  }, [props.data])


  function toggleFocus(value, index) {
  
    if (value.toggle === false) {
      let temp = props.data.map((obj, ind) =>
        index === ind
          ? {...obj, toggle: true}
          : {...obj, toggle: false},
      );
      
      
      props.setData(temp);
      
    } else {
      let temp = props.data.map((obj) =>
        value.name === obj.name ? {...obj, toggle: false} : obj,
      );
    
      props.setData(temp);
    }
  }
    
    const showPortions = (value, index) =>{
return (
    <TouchableOpacity onPress={()=>toggleFocus(value, index)} >
        <View style={{backgroundColor: 'rgba(40,40,45,0.6)', width: 90, height: 40, marginLeft: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderColor: value.toggle === true ? "orange" : null, borderWidth: value.toggle === true ? 1 : 0}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>
                {value.serving_description}
            </Text>
        </View>
    </TouchableOpacity>
        )
    }


    return(
        <>
        <View style={{width: '80%', height: 90, alignSelf: "center", borderRadius: 20, marginTop: 10, backgroundColor: '#3E3E58', borderColor: 'rgba(100, 100, 100, 0.8)', borderWidth: 1}}>
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 12}}> Select Portion Size: </Text>
        <View style={{height: 1, width: '85%', alignSelf: 'center', backgroundColor: 'rgba(255,255,255,0.7)', marginVertical: 7}}/>
        <View style={{marginTop: 8}}>
          <View style={Styles.headerContent}>
            <FlatList
              ref={(ref)=>{this.flatListRef = ref}}
              initialNumToRender={5}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={props.data}
              renderItem={({item,index}) => showPortions(item, index)}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        </View>
      </>
    )
}

export default PortionView;