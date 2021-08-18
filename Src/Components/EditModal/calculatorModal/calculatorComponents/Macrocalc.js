import React from 'react';

import {Modal, ScrollView, Text, TouchableOpacity, View, Switch, TextInput, Dimensions, ActivityIndicator} from 'react-native';
import Styles from '../../../../Screens/Home/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Styles/Colors';
import ScrollPicker from 'react-native-wheely-simple-picker';
import { CalcBackend } from '../../../../http_config/axios_config';
import ActivityComponent from '../../../activityIndicator';



const Macrocalc = (props) =>{

    
    function scrollToE(){
        _scroll.scrollToEnd({animated: true});
      }
  
      submit = () =>{
        setActivity(true);
        setTimeout(()=>{setActivity(false)}, 1000);
        initSubmit();
        scrollToE();
        
        
      }
  
      initSubmit =  async () =>{
      if(isValid){
        await CalcBackend.get('/Macro',{headers: {'calories': calInput, 'proteinP': PS.current, 'fatP': FS.current, 'carbP': CS.current}})
        .then((res)=>{setServerResponse(res.data);})
        .catch(err=>setTimeout(()=>{setActivity(false)}, 2000))
      }
      else {
          return;
      }
      }


    const PS = React.useRef(40);
    const FS = React.useRef(20);
    const CS = React.useRef(40);
    const [isValid, setIsValid] = React.useState(true);

    
    function setPS(val){
      PS.current = val;
    }
    function setFS(val){
      FS.current = val;
    }
    function setCS(val){
      CS.current = val;
    }
    
    const data = React.useRef([0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100])
  
    const selectedPS = React.useRef(8);
    const selectedFS = React.useRef(4);
    const selectedCS = React.useRef(8);


    const [userInfo ,setUserInfo] = React.useState(false);
    const [calInput, setCalInput] = React.useState('');
    const [Activity, setActivity] = React.useState(false);
    const [serverResponse, setServerResponse] = React.useState(null);
    return(
        <Modal visible={props.visibility} transparent={true} animationType={'fade'}>
          
             <View style={Styles.ModalContainer}>
             <ActivityComponent visibility={Activity}/>
    <View style={Styles.modalHeader}>
    <View style={Styles.ModalHeaderView}>
      <View style={{display: 'flex', flexDirection: 'row'}}>

        <Text style={Styles.homeText}>{props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => props.toggleModal(2)}>
        <Icon
          name={'close'}
          color={'white'}
          size={35}
          style={{marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  </View >

  <ScrollView contentContainerStyle={{height: Dimensions.get('window').height * 1.3}} scrollEnabled={true} ref={(ref)=>{this._scroll = ref}}>
  <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 20}}>{'Fill out form to calculate Macronutrient'}</Text>
  <View style={{height: 2, width: '50%', backgroundColor: 'black', alignSelf: 'center', marginVertical: 20}}/>
  <View style={{height: '64%', width: '90%', backgroundColor: 'rgba(0,0,0,0.5)', alignSelf: 'center', marginTop: 20, borderRadius: 20}}>
      <Text style={{color: 'white', fontSize: 12,alignSelf: 'center', marginTop: 6}}>{'Use your account Info?'}</Text>
      <Switch value={userInfo} onChange={()=>setUserInfo(!userInfo)} style={{alignSelf: 'center', marginTop: 10, marginBottom: 10}}/>
   

        <View style={{height: 1, width: '65%', backgroundColor: 'rgba(255,255,255,0.4)', alignSelf: 'center', marginVertical: 35}}/>

      
        <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={[Styles.InputText, {width: 82}]}>{'Calories'}</Text>
          <View
              style={{
                alignSelf: 'center',
                height: 17,
                width: 2,
                backgroundColor: Colors.grey,
                marginRight: 10,
                marginLeft: 10,
              }}
            />
            <View style={Styles.InputStyles1}> 
          <TextInput
            value={calInput}
            onChangeText={setCalInput}
            placeholder={'Calories'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          {calInput.length > 0 ? (
              <TouchableOpacity onPress={() => setCalInput('')}>
                <Icon
                  name={'remove'}
                  size={17}
                  color={'white'}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            ) : null}
        </View>
        </View>
        <View style={{height: 2, width: '80%', backgroundColor: 'grey', alignSelf: 'center', marginTop: 50}}/>
            <View style={Styles.pickerTextContainer}> 
                <Text style={Styles.pickerText}>{'Protein %'}</Text>
                <Text style={Styles.pickerText}>{'Fat %'}</Text>
                <Text style={Styles.pickerText}>{'Carbs %'}</Text>
            </View>

 <View style={[Styles.pickerContainer, {borderTopWidth: 3, borderBottomWidth: 3, borderColor: isValid ? '#62FF68' : 'red'}]}>
            <ScrollPicker 
             dataSource={data.current}
           selectedIndex={selectedPS.current}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               setPS(data);
               if((PS.current + FS.current + CS.current) != 100){
                setIsValid(false);
              }
              else {
                setIsValid(true);
              }
            }
               
           }
           wrapperHeight={180}
           wrapperWidth={'33%'}
           wrapperBackground="#FFFFFF"
        
           itemHeight={60}
           highlightColor="#d8d8d8"
           highlightBorderWidth={2}
           activeItemColor='#222121'
           itemColor="#222121" />
            <ScrollPicker 
             dataSource={data.current}
           selectedIndex={selectedFS.current}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               setFS(data)
               if((PS.current + FS.current + CS.current) != 100){
                setIsValid(false);
              }
              else {
                setIsValid(true);
              }
            }
              
           }
           wrapperHeight={180}
           wrapperWidth={'33%'}
           wrapperBackground="#FFFFFF"
           itemHeight={60}
           highlightColor="#d8d8d8"
           highlightBorderWidth={2}
           activeItemColor="#222121"
           itemColor="#222121" />
            <ScrollPicker 
             dataSource={data.current}
           selectedIndex={selectedCS.current}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               setCS(data)
               if((PS.current + FS.current + CS.current) != 100){
                setIsValid(false);
              }
              else {
                setIsValid(true);
              }
            
           }}
           wrapperHeight={180}
           wrapperWidth={'33%'}
           wrapperBackground="#FFFFFF"
           itemHeight={60}
           highlightColor="#d8d8d8"
           highlightBorderWidth={2}
           activeItemColor="#222121"
           itemColor="#222121" />
        </View>

        <TouchableOpacity onPress={()=>submit()} style={{height: 55, width: '50%', backgroundColor: Colors.buttonColor, borderRadius: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 65, alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center'}}>Submit</Text>
        </TouchableOpacity>
  </View>

  {serverResponse != null &&
  <View style={{alignSelf: 'center', width: '100%', height: 200, backgroundColor: 'rgba(20,20,20,0.8)', marginTop: 80}}>
  <Text style={{color: 'white', fontSize: 12,alignSelf: 'center', marginTop: 6}}>{'ServerResponse: Macronutrient-Calculation'}</Text>
  <View style={{flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-evenly', height: '85%'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'white', fontSize: 30}}>Protein: </Text>
      <Text style={{color: 'white', fontSize: 30}}>{Math.round(serverResponse.data[0])}{'g'}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'white', fontSize: 30}}>Fat: </Text>
      <Text style={{color: 'white', fontSize: 30}}>{Math.round(serverResponse.data[1])}{'g'}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'white', fontSize: 30}}>Carbs: </Text>
      <Text style={{color: 'white', fontSize: 30}}>{Math.round(serverResponse.data[2])}{'g'}</Text>
      </View>
      </View>
  </View>
  }
  </View>
</ScrollView>
 
  </View>
        
        </Modal>
    )
}
export default Macrocalc;