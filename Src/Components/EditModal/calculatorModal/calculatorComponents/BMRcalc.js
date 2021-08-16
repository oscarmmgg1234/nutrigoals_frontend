import React from 'react';

import {Modal, ScrollView, Text, TouchableOpacity, View, Switch, TextInput, Dimensions} from 'react-native';
import Styles from '../../../../Screens/Home/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Styles/Colors';
import ScrollPicker from 'react-native-wheely-simple-picker';


const BMRcalc = (props) =>{
    const [userInfo, setUserChoice] = React.useState(false); 
    const [genderSwitch, setGSwitch] = React.useState(false)
    const [unitSystem, setUnitSystem] = React.useState(false)
    const [Age,setAge] = React.useState('');
    const [heightFeet, setHeightFeet] = React.useState('');
    const [heightInches, setHeightInches] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [heightM, setHeightM] = React.useState('');
    const [selectedA, setSelectedA] = React.useState(1.2);
    let data = React.useRef(['Sedentary Active','Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'])


    const pickerOnchange = (value) => {
        switch(value){
            case 0: {
                setSelectedA(1.2);
                break;
            }
            case 1:{
                setSelectedA(1.375)
                break;
            }
            case 2:{
                setSelectedA(1.55);
                break;
            }
            case 3:{
                setSelectedA(1.725);
                break;
            }
            case 4: {
                setSelectedA(1.9);
                break;
            }
            default: {
                setSelectedA(1.2);
                break;
            }
        }
    }

    return(
        <Modal visible={props.visibility} transparent={true} animationType={'fade'}>
             <View style={Styles.ModalContainer}>
    <View style={Styles.modalHeader}>
    <View style={Styles.ModalHeaderView}>
      <View style={{display: 'flex', flexDirection: 'row'}}>

        <Text style={Styles.homeText}>{props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => props.toggleModal(0)}>
        <Icon
          name={'close'}
          color={'white'}
          size={35}
          style={{marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  </View >

  <ScrollView contentContainerStyle={{height: Dimensions.get('window').height * 1.5}} scrollEnabled={true}>
  <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 20}}>{'Fill out form to calculate BMR'}</Text>
  <View style={{height: 2, width: '50%', backgroundColor: 'black', alignSelf: 'center', marginVertical: 20}}/>
  <View style={{height: '67%', width: '90%', backgroundColor: 'rgba(0,0,0,0.5)', alignSelf: 'center', marginTop: 20, borderRadius: 20}}>
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
            value={heightM}
            onChangeText={setHeightM}
            placeholder={'Meters'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          
          </View>
          {heightM.length > 0 ? (
              <TouchableOpacity onPress={() => setHeightM('')}>
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
            <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center', marginBottom: 8}}>{'Activity Level: '}</Text>
        <ScrollPicker
            dataSource={data.current}
            selectedIndex={0}
            onValueChange={(data, selectedIndex) => {
             pickerOnchange(selectedIndex);
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
        <TouchableOpacity style={{height: 55, width: '50%', backgroundColor: Colors.buttonColor, borderRadius: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 65, alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold',fontSize: 15,alignSelf: 'center'}}>Submit</Text>
        </TouchableOpacity>
  </View>
</ScrollView>
 
  </View>
        
        </Modal>
    )
}
export default BMRcalc;