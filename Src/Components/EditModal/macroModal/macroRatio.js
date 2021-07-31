import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollPicker from 'react-native-wheely-simple-picker'
import Styles from './Styles';
import Colors from '../../../Styles/Colors';
import { CARBS } from '../../../Constants';
import { useEffect } from 'react/cjs/react.production.min';
const MacroRatio = (props)=> {

    const [TI, setTI] = React.useState('')
    const [SI, setSI] = React.useState('');
    const [SOI, setSOI] = React.useState('')
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

    
    function submit(){
        if(TI != '' && SI != '' && SOI != ''){
          if((PS.current + FS.current + CS.current) === 100){
          const Protein = Math.round(((PS.current / 100) * TI) / 4);
          const Fat = Math.round(((FS.current / 100) * TI) / 9);
          const Carbs = Math.round(((CS.current / 100) * TI) / 4);
          props.setG(Protein, Fat, Carbs, parseFloat(SI), parseFloat(SOI))
          props.vis(0);
          }
          else {alert('Total percentage must = 100%')}
         }
        else {alert('Inputs cannot be empty')}
    }

return(
    <ScrollView>
        <View>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 19,
            marginTop: 20,
          }}>
          {'Enter Macronutrients Goals Ratio:'}
        </Text>
        <View
          style={{
            height: 1,
            width: '67%',
            backgroundColor: Colors.backgroundColor,
            alignSelf: 'center',
            marginTop: 8,
          }}
        />
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Total Calories'}</Text>
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
          <TextInput
            value={TI}
            onChangeText={setTI}
            placeholder={'Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          {TI.length > 0 ? (
              <TouchableOpacity onPress={() => setTI('')}>
                <Icon
                  name={'remove'}
                  size={17}
                  color={'white'}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            ) : null}
        </View>
        </View><View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Sugar'}</Text>
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
          <TextInput
            value={SI}
            onChangeText={setSI}
            placeholder={'Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          {SI.length > 0 ? (
              <TouchableOpacity onPress={() => setSI('')}>
                <Icon
                  name={'remove'}
                  size={17}
                  color={'white'}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            ) : null}
        </View>
        </View><View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Sodium'}</Text>
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
          <TextInput
            value={SOI}
            onChangeText={setSOI}
            placeholder={'Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          {SOI.length > 0 ? (
              <TouchableOpacity onPress={() => setSOI('')}>
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
        <TouchableOpacity style={{alignSelf: 'center', marginBottom: 40, marginTop: 20}} onPress={()=>submit()}>
          <View style={{height: 52, width: 160, backgroundColor: Colors.buttonColor, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 25}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Change Goals</Text>
          </View>
        </TouchableOpacity>
        </View>
    </ScrollView>
)
}

export default MacroRatio;