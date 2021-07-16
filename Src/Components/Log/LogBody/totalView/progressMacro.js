import React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import {Styles} from './totalViewStyles';
import Colors from '../../../../Styles/Colors';

const ProgressMacro = (props) => {
  return (
    <>
      <View style={Styles.progressContainer}>
        <Text style={{width: 110, color: Colors.White, alignSelf: 'center'}}>
          {props.name}
        </Text>
        <Progress.Bar
          progress={props.current / props.goal}
          style={{height: 9, alignSelf: 'center', marginRight: 10}}
          width={180}
          height={9}
          color={props.color}
        />
      </View>
      <View style={Styles.divider} />
    </>
  );
};
export default ProgressMacro;
