import React, {useState} from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

const CustomForm = (props) => {
  const [MacroInput, setMacroI] = useState('');

  return (
    <ScrollView scrollEnabled={true}>
      <View style={Styles.customContainer}>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 17, fontWeight: 'bold', marginTop: 20}}>{'Enter Macronutrients Goals Manually: '}</Text>
        <View style={Styles.InputView}>
          <Text>{'Protein: '}</Text>
          <TextInput
            value={MacroInput}
            onChangeText={setMacroI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
          <Text>{'Protein: '}</Text>
          <TextInput
            value={MacroInput}
            onChangeText={setMacroI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
          <Text>{'Protein: '}</Text>
          <TextInput
            value={MacroInput}
            onChangeText={setMacroI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
          <Text>{'Protein: '}</Text>
          <TextInput
            value={MacroInput}
            onChangeText={setMacroI}
            placeholder={'Enter Protein Goal'}
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            style={Styles.InputStyles}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={Styles.InputView1}>
          <Text>{'Protein: '}</Text>
          <TextInput
            value={MacroInput}
            onChangeText={setMacroI}
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
