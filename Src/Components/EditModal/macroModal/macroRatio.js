import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollPicker from 'react-native-wheely-simple-picker'
import Styles from './Styles';
import Colors from '../../../Styles/Colors';
const MacroRatio = (props)=> {

    const [TI, setTI] = React.useState('')
    const [SI, setSI] = React.useState('');
    const [SOI, setSOI] = React.useState('')
    const [PS, setPS] = React.useState(null);
    const [FS, setFS] = React.useState(null);
    const [CS, setCS] = React.useState(null);

    function submit(){
        props.setG()
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
            <View style={Styles.pickerTextContainer}> 
                <Text style={Styles.pickerText}>{'Protein %'}</Text>
                <Text style={Styles.pickerText}>{'Fat %'}</Text>
                <Text style={Styles.pickerText}>{'Carbs %'}</Text>
            </View>
            <View style={Styles.pickerContainer}>
            <ScrollPicker 
             dataSource={[
                0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100
           ]}
           selectedIndex={8}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               ()=>setPS(data);
           }}
           wrapperHeight={180}
           wrapperWidth={'33%'}
           wrapperBackground="#FFFFFF"
        
           itemHeight={60}
           highlightColor="#d8d8d8"
           highlightBorderWidth={2}
           activeItemColor='#222121'
           itemColor="#222121" />
            <ScrollPicker 
             dataSource={[
                0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100
           ]}
           selectedIndex={6}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               ()=>setFS(data)
           }}
           wrapperHeight={180}
           wrapperWidth={'33%'}
           wrapperBackground="#FFFFFF"
           itemHeight={60}
           highlightColor="#d8d8d8"
           highlightBorderWidth={2}
           activeItemColor="#222121"
           itemColor="#222121" />
            <ScrollPicker 
             dataSource={[
                0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100
           ]}
           selectedIndex={4}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               ()=>setCS(data)
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
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <View style={{height: 52, width: 160, backgroundColor: Colors.buttonColor, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 25}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Change Goals</Text>
          </View>
        </TouchableOpacity>
        </View>
    </ScrollView>
)
}

export default MacroRatio;