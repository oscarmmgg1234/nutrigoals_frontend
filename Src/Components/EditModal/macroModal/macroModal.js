import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../../Screens/Home/Styles';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import CustomForm from './macroCustom';
import MacroRatio from './macroRatio';
import { user_context } from '../../../setup';

const MacroModal = (props) => {

  const {setGoalsR, User} = React.useContext(user_context);

  const [switchBool, setSwitch] = useState(false);
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.visibility}>
      <View style={Styles.MacroModalContainer}>
        <View style={Styles.modalHeader}>
          <View style={Styles.ModalHeaderView}>
            <Text style={Styles.homeText}>{Constants.MACRONUTRIENT}</Text>

            <TouchableOpacity onPress={() => props.setModalV(0)}>
              <Icon
                name={'close'}
                color={'white'}
                size={35}
                style={{marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: '20%',
            backgroundColor: 'rgba(40,40,50,0.9)',
            borderBottomWidth: 1,
            borderColor: Colors.backgroundColor,
          }}>
          <View style={Styles.macroBodySwitchHeaderSwitch}>
            <Text
              style={[
                Styles.macroTextSwitch,
                {fontSize: 20, fontWeight: 'bold'},
              ]}>
              {'Method:'}
            </Text>
          </View>
          <View style={[Styles.switchContainer, {marginTop: 20}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: 80,
              }}>
              {switchBool != true ? (
                <Icon
                  name={'pencil'}
                  color={switchBool != true ? Colors.buttonColor : 'white'}
                  size={25}
                  style={{marginRight: 10}}
                />
              ) : null}
              <Text
                style={
                  switchBool != true
                    ? {color: Colors.buttonColor, fontSize: 18}
                    : {color: 'white', fontSize: 18}
                }>
                {'Custom'}
              </Text>
            </View>
            <Switch
              style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              trackColor={'coral'}
              thumbColor={Colors.grey}
              onValueChange={() => setSwitch(!switchBool)}
              value={switchBool}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: 90,
              }}>
              <Text
                style={
                  switchBool === true
                    ? {color: Colors.buttonColor, fontSize: 18}
                    : {color: 'white', fontSize: 18}
                }>
                {'Ratio'}
              </Text>
              {switchBool === true ? (
                <Icon
                  name={'exchange'}
                  color={switchBool === true ? Colors.buttonColor : 'white'}
                  size={25}
                  style={{marginLeft: 10}}
                />
              ) : null}
            </View>
          </View>
        </View>
        {switchBool === true ? (
          <MacroRatio setG={setGoalsR} vis={props.setModalV} userID={User.user_id}/>
        ) : (
          <CustomForm setG={setGoalsR} vis={props.setModalV} userID={User.user_id}/>
        )}
      </View>
    </Modal>
  );
};

export default MacroModal;
