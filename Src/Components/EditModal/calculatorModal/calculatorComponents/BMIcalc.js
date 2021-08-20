import React from 'react';

import {Modal, ScrollView, Text, TouchableOpacity, View, Switch, TextInput, Dimensions} from 'react-native';
import Styles from '../../../../Screens/Home/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Styles/Colors';
import ActivityComponent from '../../../activityIndicator';



const BMIcalc = (props) =>{
    const [activityI, setActivity] = React.useState(false);
    const [userInfo, setUserChoice] = React.useState(false); 
    const [genderSwitch, setGSwitch] = React.useState(false)
    const [unitSystem, setUnitSystem] = React.useState(false)
    const [heightFeet, setHeightFeet] = React.useState('');
    const [heightInches, setHeightInches] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [heightCM, setHeightCM] = React.useState('');
    const [serverResponse, setServerResponse] = React.useState(null)
  

    
    function scrollToE(){
      _scroll.scrollToEnd({animated: true});
    }

    submit = () =>{
      setActivity(true);
      setTimeout(()=>{setActivity(false)}, 1000);
      initSubmit();
      scrollToE();
      
      
    }

    BMImetric = () => {
        
            return (weight / Math.pow(heightCM / 100, 2))
            
        
    }

    BMIimperial = () => {
        const heightInch = (parseFloat(heightFeet) * 12) + parseFloat(heightInches)
        return 703 * (weight / Math.pow(heightInch, 2));
    }

    initSubmit =  async () =>{
     if(unitSystem){
         let result = BMImetric();
        if(result < 18.5){
            setServerResponse({value: result, bmi: 'Under-Weight'})
        }
        else if(result >= 18.5 && result <= 25){
            setServerResponse({value: result, bmi: 'Normal'})
        }
        else if(result >25 && result <= 30){
            setServerResponse({value: result, bmi: 'Over-Weight'})
        }
        else if(result > 30){
            setServerResponse({value: result, bmi: 'Obese'})
        }
     
     }
     else{
        let result = BMIimperial();
        if(result < 18.5){
            setServerResponse({value: result, bmi: 'Under-Weight'})
        }
        else if(result >= 18.5 && result <= 25){
            setServerResponse({value: result, bmi: 'Normal'})
        }
        else if(result >25 && result <= 30){
            setServerResponse({value: result, bmi: 'Over-Weight'})
        }
        else if(result > 30){
            setServerResponse({value: result, bmi: 'Obese'})
        }
     
        
     }
    }

   
    return(
        <Modal visible={props.visibility} transparent={true} animationType={'fade'}>
          
             <View style={Styles.ModalContainer}>
             <ActivityComponent visibility={activityI}/>
    <View style={Styles.modalHeader}>
    <View style={Styles.ModalHeaderView}>
      <View style={{display: 'flex', flexDirection: 'row'}}>

        <Text style={Styles.homeText}>{'BMI'}</Text>
      </View>

      <TouchableOpacity onPress={() => props.toggleModal(4)}>
        <Icon
          name={'close'}
          color={'white'}
          size={35}
          style={{marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  </View >

  <ScrollView contentContainerStyle={{height: Dimensions.get('window').height * 1.2}} scrollEnabled={true} ref={(ref)=>{this._scroll = ref}}>
  <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 20}}>{'Fill out form to calculate BMI'}</Text>
  <View style={{height: 2, width: '50%', backgroundColor: 'black', alignSelf: 'center', marginVertical: 20}}/>
  <View style={{height: '62%', width: '90%', backgroundColor: 'rgba(0,0,0,0.5)', alignSelf: 'center', marginTop: 20, borderRadius: 20}}>
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
        
    
       
        </View>   
        <TouchableOpacity onPress={()=>submit()} style={{height: 55, width: '50%', backgroundColor: Colors.buttonColor, borderRadius: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 65, alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center'}}>Submit</Text>
        </TouchableOpacity>
  </View>

  {serverResponse != null &&
  <View style={{alignSelf: 'center', width: '100%', height: 200, backgroundColor: 'rgba(20,20,20,0.8)', marginTop: 60}}>
  <Text style={{color: 'white', fontSize: 12,alignSelf: 'center', marginTop: 6}}>{'ServerResponse: BMI-Calculation'}</Text>
  <Text style={{color: 'white', fontSize: 40,alignSelf: 'center', marginTop: 40}}>{Math.round(serverResponse.value)} {' kg / m^2'}</Text>
  <Text style={{color: Colors.buttonColor, fontSize: 40,alignSelf: 'center', marginTop: 10}}>{serverResponse.bmi}</Text>
  </View>
  }
</ScrollView>
 
  </View>
        
        </Modal>
    )
}
export default BMIcalc;