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
import Styles from '../../Screens/NutrionLog/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ResultsViewSearch from './resultView';
import { app_context } from '../../setup';
import { foodLog_context } from '../../setup';
import { APIBackend } from '../../http_config/axios_config';



const SearchModal = (props) => {
  getFood = async () =>{
    let responseObjects = await APIBackend.get('/foodSearch', {headers: {
      'token': APItoken,
      'food': searchItem,
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

  logLevel = (res) => {
    if(buttonFocus[0] === true){
      editBFLogData(res);
    }
    else if(buttonFocus[1] === true){
        editLunchLogData(res);
    }
    else if(buttonFocus[2] === true){
      editDinnerLogData(res);
    }
    else if(buttonFocus[3] === true){
      editSnackLogData(res)
    }
  }
  next = (res) => {
    logLevel(res.data)
    props.toggleModal(false)
    
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
    let temp = data.filter((obj) => obj.toggle === true);
    addFoodToLog(temp);
    
  }

  const {APItoken} = React.useContext(app_context);
  const { editBFLogData,
    editLunchLogData,
    editDinnerLogData,
    editSnackLogData,} = React.useContext(foodLog_context);

  const [buttonFocus, setButtonFocus] = useState([false,false,false,false])
  const [visi, setVisi] = useState(false);
  const [data, setData] = useState([]);
  let selected = React.useRef('');

  function setSelected(value){
    selected.current = value;
  }
  
  function toggleButtonFocus(index){
    if(buttonFocus[index] === false){
      let temp = buttonFocus.map((obj,ind)=>{if(index === ind){return true} else {return false}});
      setButtonFocus(temp);
    }
    else {
      let temp = [false,false,false,false];
      setButtonFocus(temp)
    }
  }
  const [searchItem, setSearchI] = useState('');
  return (
    <>
      <Modal animationType={'slide'} transparent={true} visible={props.modal} onRequestClose={()=>{props.toggleModal(false)}}>
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
                  <TouchableOpacity style={{marginRight: 10}} onPress={()=>getFood()}>
                    <Icon name={'search'} color={'white'} size={29} />
                  </TouchableOpacity>
                ) : null}

              </View>
              </View>
              {data.length > 0 && (<>
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
            <ResultsViewSearch data={data} setData={setData} set={setSelected} visBool={setVisi}/>
          </View>
          { visi === true && (
              <View style={{width: '93%', backgroundColor: Colors.texInputBackground, alignSelf: 'center',
              borderRadius: 20, marginTop: 40, height: 70}}>
                <View style={{display: 'flex', flexDirection: 'row',alignSelf: 'center', justifyContent: 'space-evenly', width: '100%', height: '100%', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>toggleButtonFocus(0)} style={{height: '80%', justifyContent: 'center', backgroundColor: buttonFocus[0] ? '#FF4343' : 'rgba(0,0,0,0)', borderRadius: 25, paddingHorizontal: 5, width: 75, alignItems: 'center'}}><Text style={{color: 'white'}}>BFast</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>toggleButtonFocus(1)} style={{height: '80%', justifyContent: 'center', backgroundColor: buttonFocus[1] ? '#FF4343' : 'rgba(0,0,0,0)', borderRadius: 25, paddingHorizontal: 5, width: 75, alignItems: 'center'}}><Text style={{color: 'white'}}>Lunch</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>toggleButtonFocus(2)} style={{height: '80%', justifyContent: 'center', backgroundColor: buttonFocus[2] ? '#FF4343' : 'rgba(0,0,0,0)', borderRadius: 25, paddingHorizontal: 5, width: 75, alignItems: 'center'}}><Text style={{color: 'white'}}>Dinner</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>toggleButtonFocus(3)} style={{height: '80%', justifyContent: 'center', backgroundColor: buttonFocus[3] ? '#FF4343' : 'rgba(0,0,0,0)', borderRadius: 25, paddingHorizontal: 5, width: 75, alignItems: 'center'}}><Text style={{color: 'white'}}>Snack</Text></TouchableOpacity>
                </View>
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
            

            <TouchableOpacity style={{width: 110}} onPress={()=>addFood()}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>Add</Text>
            </TouchableOpacity>
          </View>
              </View>

              )}</>)}
              
            
             
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};
export default SearchModal;

