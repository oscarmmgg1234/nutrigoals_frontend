import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../../../Styles/Colors';
import Styles from '../../../../Screens/NutrionLog/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ResultsView from './resultsComponent';
import { APIBackend } from '../../../../http_config/axios_config';
import { app_context } from '../../../../setup';



const ModalComponent = (props) => {
  
  const selected = React.useRef('');

  function setSelected(arg){
    selected.current = arg;
  }

  getFood = async () =>{
    let responseObjects = await APIBackend.get('/foodSearch', {headers: {
      'token': APItoken,
      'food': foodSearch,
    }});
    
    
    if(responseObjects.data.foods.food.length > 0){
      const results = responseObjects.data.foods.food.map(obj=>{
        return {name: obj.food_name, toggle: false,id: (Math.random() % 100), foodType: obj.food_type,food_description: obj.food_description, food_id: obj.food_id, 
        }
      })
      setData(results);
    }
    else{
      alert('no results');
    }
    
  }
  const {APItoken} = React.useContext(app_context);
  const [foodSearch, setFoodSearch] = useState('');
  const [foodSearchFocus, setSFocus] = useState(false);
  function inputFocus() {
    setSFocus(!foodSearchFocus);
  }
  const [resultsData, setData] = useState([
  ]);

  next = (res) => {
    console.log(res.data)
    props.addFood(res.data);
    props.setVisible(false);
    
    
  }
  addFoodToLog = async (obj) => {
    
    await APIBackend.get('/getFood', {headers: {
      'token': APItoken,
      'foodId': obj[0].food_id,
    }
    })
    .then((res)=>{next(res)})
    .catch((err)=>{console.log(err)})
    
    

    
  }
  function addFood() {
    let temp = resultsData.filter((obj) => obj.toggle === true);
    addFoodToLog(temp);
    
  }
  return (
    
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.state}
      onRequestClose={() => props.setVisible(false)}>
        <TouchableOpacity onPress={()=>props.setVisible(false)} >
      <View style={{backgroundColor: 'rgba(20,19,25,0.3)', height: '100%', width: '100%'}}>
        <TouchableWithoutFeedback>
        <View
          style={{
            width: '85%',
            marginTop: '35%',
            backgroundColor: 'rgba(20,19,25,1.0)',
            borderRadius: 20,
            alignSelf: 'center',
            borderColor: 'rgba(255,255,255,0.7)',
            borderWidth: 1
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
              onFocus={()=>{setFoodSearch('');inputFocus();}}
              style={{
                color: 'white',
                width: '78%',
                paddingLeft: 10,
                marginRight: 18,
              }}
              textAlign={'left'}
              
              onBlur={inputFocus}
            />
            {foodSearch.length > 0 && (
              <TouchableOpacity onPress={()=>getFood()}>
                <Icon
                  name={'search'}
                  color={'white'}
                  size={23}
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
            )}
          </View>
{resultsData.length > 0 && foodSearch.length > 0 &&  <> 
<View style={Styles.ResultModal}>
            <Text style={{color: 'white', alignSelf: 'center', marginTop: 6}}>Results</Text>
            <View
              style={{
                marginTop: 10,
                height: 1,
                width: '85%',
                backgroundColor: 'rgba(255,255,255,0.6)',
                alignSelf: 'center',
              }}
            />
            <ResultsView data={resultsData} setData={setData} set={setSelected}/>
          </View>
          <Text style={{alignSelf: 'center', color: 'white', fontSize: 17,marginTop: 10, fontWeight: 'bold'}}>{selected.current}</Text>
          <View
            style={{
              alignSelf: 'center',
              marginTop: 30,
              backgroundColor: Colors.buttonColor,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <TouchableOpacity style={{width: 110}} onPress={addFood}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>Add</Text>
            </TouchableOpacity>
          </View> 
          </>}
         
          <TouchableOpacity onPress={() => props.setVisible(false)}>
            <Icon
              name={'angle-double-down'}
              size={30}
              color={'white'}
              style={{alignSelf: 'center', marginTop: 26}}
            />
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
      </View>
      </TouchableOpacity>
    </Modal>
    
  );
};

export default ModalComponent;
