import React from 'react';

import {Modal, ScrollView, Text, TouchableOpacity, View, Switch, TextInput, Dimensions, ActivityIndicator} from 'react-native';
import Styles from '../../../../Screens/Home/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Styles/Colors';
import ScrollPicker from 'react-native-wheely-simple-picker';
import { CalcBackend } from '../../../../http_config/axios_config';
import ActivityComponent from '../../../activityIndicator';




const BodyFatcalc = (props) =>{
    const [activityI, setActivity] = React.useState(false);
    const [userInfo, setUserChoice] = React.useState(false); 
    const [genderSwitch, setGSwitch] = React.useState(false)
    const [unitSystem, setUnitSystem] = React.useState(false)
    const [Age,setAge] = React.useState('');
    const [heightFeet, setHeightFeet] = React.useState('');
    const [heightInches, setHeightInches] = React.useState('');
    const [waistFeet, setWaistFeet] = React.useState('');
    const [waistInches, setWaistInches] = React.useState('');
    const [waistM, setWaistM] = React.useState('');
    const [neckM, setNeckM] = React.useState('');
    const [neckFeet, setNeckFeet] = React.useState('');
    const [neckInches, setNeckInches] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [heightCM, setHeightCM] = React.useState('');

    const [serverResponse, setServerResponse] = React.useState(null)

    const [formula, setFormula] = React.useState('US-Navy Method');
    let formulaData = React.useRef(['US-Navy Method', 'BMI Method'])

    
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
     if(unitSystem){
      await CalcBackend.get('/BodyFatCalculator',{headers: {'gender': genderSwitch ? 'female' : 'male', 'format': 'metric', 'age': Age, 'height': heightCM,'weight': weight,
      'formula': formula, 'waist': waistM, 'neck': neckM}})
      .then((res)=>setServerResponse(res.data))
      .catch(err=>setTimeout(()=>{setActivity(false)}, 2000))
     }
     else{
      const heightInch = (parseFloat(heightFeet) * 12) + parseFloat(heightInches);
      const waistInch = (parseFloat(waistFeet) * 12) + parseFloat(waistInches);
      const neckInch = (parseFloat(neckFeet) * 12) + parseFloat(neckInches);
      await CalcBackend.get('/BodyFatCalculator',{headers: {'gender': genderSwitch ? 'female' : 'male', 'format': 'imperial', 'age': Age, 'height': heightInch,'weight': weight,
      'formula': formula, 'waist': waistInch, 'neck': neckInch }})
      .then((res)=>{setServerResponse(res.data);console.log(res.data.value)})
      .catch(err=>setTimeout(()=>{setActivity(false)}, 2000))
     }
    }


    return(
        <Modal visible={props.visibility} transparent={true} animationType={'fade'}>
          
             <View style={Styles.ModalContainer}>
             <ActivityComponent visibility={activityI}/>
    <View style={Styles.modalHeader}>
    <View style={Styles.ModalHeaderView}>
      <View style={{display: 'flex', flexDirection: 'row'}}>

        <Text style={Styles.homeText}>{'Body Fat'}</Text>
      </View>

      <TouchableOpacity onPress={() => props.toggleModal(3)}>
        <Icon
          name={'close'}
          color={'white'}
          size={35}
          style={{marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  </View >

  <ScrollView contentContainerStyle={{height: Dimensions.get('window').height * 1.6}} scrollEnabled={true} ref={(ref)=>{this._scroll = ref}}>
  <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 20}}>{'Fill out form to calculate Body Fat %'}</Text>
  <View style={{height: 2, width: '50%', backgroundColor: 'black', alignSelf: 'center', marginVertical: 20}}/>
  <View style={{height: '74%', width: '90%', backgroundColor: 'rgba(0,0,0,0.5)', alignSelf: 'center', marginTop: 20, borderRadius: 20}}>
      <Text style={{color: 'white', fontSize: 12,alignSelf: 'center', marginTop: 6}}>{'Use your account Info?'}</Text>
      <Switch value={userInfo} onChange={()=>setUserChoice(!userInfo)} style={{alignSelf: 'center', marginTop: 10, marginBottom: 10}}/>
    <View style={{height: 1, width: '65%', backgroundColor: 'rgba(255,255,255,0.4)', alignSelf: 'center', marginVertical: 20}}/>
        <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center', marginTop: 10}}>{'Select Unit System:'}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',marginTop: 10}}>

        <Text style={{color: unitSystem ? 'white' : Colors.buttonColor , width: 55}}>Imperial</Text>
        <Switch value={unitSystem} onChange={()=>setUnitSystem(!unitSystem)}/>
        <Text style={{color: unitSystem ? Colors.buttonColor: 'white', width: 55}}>Metric</Text>
        </View>

        <View style={{height: 1, width: '65%', backgroundColor: 'rgba(255,255,255,0.4)', alignSelf: 'center', marginVertical: 35}}/>

      <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center', marginTop: 10}}>Gender: </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10,}}>
        <Text style={{color: genderSwitch ? 'white' : 'orange', width: 50}}>Male</Text>
        <Switch value={genderSwitch} onChange={()=>setGSwitch(!genderSwitch)}/>
        <Text style={{color: genderSwitch ? 'orange' : 'white', width: 50}}>Female</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Age'}</Text>
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
            value={Age}
            onChangeText={setAge}
            placeholder={'Age'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          {Age.length > 0 ? (
              <TouchableOpacity onPress={() => setAge('')}>
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
        { unitSystem === false ? (<>
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Height'}</Text>
          <View
              style={{
                alignSelf: 'center',
                height: 17,
                width: 2,
                backgroundColor: Colors.grey,
                marginRight: 1,
                marginLeft: 1,
              }}
            />
            <View style={Styles.InputStyles2}> 
          <TextInput
            value={heightFeet}
            onChangeText={setHeightFeet}
            placeholder={'Feet'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          
          <View style={{height: 2, width: 12, backgroundColor: Colors.grey}}/>
          <View style={Styles.InputStyles2}>
          <TextInput
            value={heightInches}
            onChangeText={setHeightInches}
            placeholder={'Inch'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
            />
            </View>
          {heightInches.length > 0 || heightFeet.length > 0 ? (
              <TouchableOpacity onPress={() =>{setHeightInches('');setHeightFeet('');}}>
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
        </>) : <><View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Height'}</Text>
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
            value={heightCM}
            onChangeText={setHeightCM}
            placeholder={'Centimeters'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          {heightCM.length > 0 ? (
              <TouchableOpacity onPress={() => setHeightCM('')}>
                <Icon
                  name={'remove'}
                  size={17}
                  color={'white'}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            ) : null}
        </View>
        </View></>}
        { unitSystem === false ? (<>
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Waist'}</Text>
          <View
              style={{
                alignSelf: 'center',
                height: 17,
                width: 2,
                backgroundColor: Colors.grey,
                marginRight: 1,
                marginLeft: 1,
              }}
            />
            <View style={Styles.InputStyles2}> 
          <TextInput
            value={waistFeet}
            onChangeText={setWaistFeet}
            placeholder={'Feet'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          
          <View style={{height: 2, width: 12, backgroundColor: Colors.grey}}/>
          <View style={Styles.InputStyles2}>
          <TextInput
            value={waistInches}
            onChangeText={setWaistInches}
            placeholder={'Inch'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
            />
            </View>
          {waistInches.length > 0 || waistFeet.length > 0 ? (
              <TouchableOpacity onPress={() =>{setWaistInches('');setWaistFeet('');}}>
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
        </>) : <><View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Waist'}</Text>
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
            value={waistM}
            onChangeText={setWaistM}
            placeholder={'Centimeters'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          {waistM.length > 0 ? (
              <TouchableOpacity onPress={() => setWaistM('')}>
                <Icon
                  name={'remove'}
                  size={17}
                  color={'white'}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            ) : null}
        </View>
        </View></>}
        { unitSystem === false ? (<>
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Neck'}</Text>
          <View
              style={{
                alignSelf: 'center',
                height: 17,
                width: 2,
                backgroundColor: Colors.grey,
                marginRight: 1,
                marginLeft: 1,
              }}
            />
            <View style={Styles.InputStyles2}> 
          <TextInput
            value={neckFeet}
            onChangeText={setNeckFeet}
            placeholder={'Feet'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          
          <View style={{height: 2, width: 12, backgroundColor: Colors.grey}}/>
          <View style={Styles.InputStyles2}>
          <TextInput
            value={neckInches}
            onChangeText={setNeckInches}
            placeholder={'Inch'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
            />
            </View>
          { neckInches.length > 0 || neckFeet.length > 0 ? (
              <TouchableOpacity onPress={() =>{setNeckInches('');setNeckFeet('');}}>
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
        </>) : <><View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Neck'}</Text>
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
            value={neckM}
            onChangeText={setNeckM}
            placeholder={'Centimeters'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          {neckM.length > 0 ? (
              <TouchableOpacity onPress={() => setNeckM('')}>
                <Icon
                  name={'remove'}
                  size={17}
                  color={'white'}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            ) : null}
        </View>
        </View></>}
        
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText2}>{'Weight'}</Text>
          <View
              style={{
                alignSelf: 'center',
                height: 17,
                width: 2,
                backgroundColor: Colors.grey,
                marginRight: 2,
                marginLeft: 2,
              }}
            />
            <View style={Styles.InputStyles1}> 
          <TextInput
            value={weight}
            onChangeText={setWeight}
            placeholder={'Weight'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 17, alignSelf: 'center'}}>{unitSystem ? 'kg' : 'lb'}</Text>
          {weight.length > 0 ? (
              <TouchableOpacity onPress={() => setWeight('')}>
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
        
    
        <View style={{height: 120, marginTop: 25}}>
            <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center', marginBottom: 8}}>{'Formula: '}</Text>
        <ScrollPicker
            dataSource={formulaData.current}
            selectedIndex={0}
            onValueChange={(data, selectedIndex) => {
              setFormula(data);
            }}
            wrapperHeight={90}
            wrapperWidth={'100%'}
            wrapperBackground="#FFFFFF"
            itemHeight={35}
            highlightColor="#d8d8d8"
            highlightBorderWidth={2}
            activeItemColor="#222121"
            itemColor="#222121"
          />
          

        </View> 
        </View>   
        <TouchableOpacity onPress={()=>submit()} style={{height: 55, width: '50%', backgroundColor: Colors.buttonColor, borderRadius: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 65, alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center'}}>Submit</Text>
        </TouchableOpacity>
  </View>

  {serverResponse != null &&
  <View style={{alignSelf: 'center', width: '100%', height: 200, backgroundColor: 'rgba(20,20,20,0.8)', marginTop: 60}}>
  <Text style={{color: 'white', fontSize: 12,alignSelf: 'center', marginTop: 6}}>{'ServerResponse: BodyFat-Calculation'}</Text>
  <Text style={{color: 'white', fontSize: 40,alignSelf: 'center', marginTop: 40}}>{Math.round(serverResponse.data)} {'%'}</Text>
  </View>
  }
</ScrollView>
 
  </View>
        
        </Modal>
    )
}
export default BodyFatcalc;