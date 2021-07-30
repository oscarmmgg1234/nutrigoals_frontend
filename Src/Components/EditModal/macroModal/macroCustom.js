import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

const CustomForm = (props) => {
  const [PI, setPI] = useState('');
  const [FI, setFI] = useState('');
  const [CI, setCI] = useState('');
  const [SI, setSI] = useState('');
  const [SOI, setSOI] = useState('');

  function submit(){
    props.setG(parseFloat(PI), parseFloat(FI), parseFloat(CI), parseFloat(SI), parseFloat(SOI));
    props.vis(0);
}
  return (
    <ScrollView scrollEnabled={true}>
      <View style={Styles.customContainer}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 19,
            marginTop: 20,
          }}>
          {'Enter Macronutrients Goals Manually:'}
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
        <View style={Styles.InputView}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Protein'}</Text>
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
            value={PI}
            onChangeText={setPI}
            placeholder={'Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          {PI.length > 0 ? (
            <TouchableOpacity onPress={() => setPI('')}>
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
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Fat'}</Text>
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
            value={FI}
            onChangeText={setFI}
            placeholder={'Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          {FI.length > 0 ? (
              <TouchableOpacity onPress={() => setFI('')}>
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
        <View style={Styles.InputView1}>
          <View style={Styles.InputSubview}>
          <Text style={Styles.InputText}>{'Carbohydrates'}</Text>
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
            value={CI}
            onChangeText={setCI}
            placeholder={'Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
          {CI.length > 0 ? (
              <TouchableOpacity onPress={() => setCI('')}>
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
        <View style={Styles.InputView1}>
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
              textAlign={'center'}
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
        </View>
        <View style={Styles.InputView1}>
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
            placeholder={'Goal '}
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
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>{submit()}}>
          <View style={{height: 52, width: 160, backgroundColor: Colors.buttonColor, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 25}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Change Goals</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomForm;
