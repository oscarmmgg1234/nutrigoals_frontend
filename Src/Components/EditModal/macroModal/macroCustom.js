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
          <Text style={Styles.InputText}>{'Protein: '}</Text>
          <TextInput
            value={PI}
            onChangeText={setPI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
          <Text style={Styles.InputText}>{'Protein: '}</Text>
          <TextInput
            value={FI}
            onChangeText={setFI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
          <Text style={Styles.InputText}>{'Protein: '}</Text>
          <TextInput
            value={CI}
            onChangeText={setCI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
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
          <Text style={Styles.InputText}>{'Protein: '}</Text>
          <TextInput
            value={SOI}
            onChangeText={setSOI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text>Change Goals</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomForm;
