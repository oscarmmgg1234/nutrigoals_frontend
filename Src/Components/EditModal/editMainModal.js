import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import Styles from '../../Screens/Home/Styles';
import * as Constants from '../../Constants/index';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MacroModal from './macroModal/macroModal';
import WaterModal from './waterModal/waterModal';
import CalcHomeComponent from './calculatorModal/calculatorHome';
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditMainModal = (props) => {

  async function signOuty(){
    await AsyncStorage.setItem('@authStatus', '0');
  }
  const [macroM, setMacroM] = React.useState(false);
  const [waterM, setWaterM] = React.useState(false);
  const [weightM, setWeightM] = React.useState(false);
  const [notiM, setNotiM] = React.useState(false);
  const [calc, setCalc] = React.useState(false);

  function setModalVisibility(modalIndex){
    switch (modalIndex){
      case 0: {
        setMacroM(false);
        break;
      }
      case 1:{
        setWaterM(false);
        break;
      }case 2:{
        setWeightM(false);
        break;
      }case 3:{
        setNotiM(false);
        break;
      }case 4:{
        setCalc(false);
        break;
      }

    }
  }

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.modal}
      onRequestClose={() => props.toggleModal()}>
      <View style={Styles.ModalContainer}>
        <View style={Styles.modalHeader}>
          <View style={Styles.ModalHeaderView}>
            <View style={{display: 'flex', flexDirection: 'row'}}>

              <Text style={Styles.homeText}>{Constants.SETTINGS}</Text>
            </View>

            <TouchableOpacity onPress={() => props.toggleModal()}>
              <Icon
                name={'close'}
                color={'white'}
                size={35}
                style={{marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{marginTop: 16}}
          onPress={() => setMacroM(true)}>
          <View style={Styles.listWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'bullseye'}
                color={'coral'}
                size={27}
                style={{marginTop: 3}}
              />
              <Text style={Styles.listText}>{'Edit Macronutrient Goals '}</Text>
            </View>
            <Image source={Images.chevron} style={Styles.userImage} />
          </View>
          <View style={Styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWaterM(true)}>
          <View style={Styles.listWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'glass'}
                color={'aquamarine'}
                size={25}
                style={{marginTop: 3}}
              />
              <Text style={Styles.listText}>{'Edit Water Goals'}</Text>
            </View>
            <Image source={Images.chevron} style={Styles.userImage} />
          </View>
          <View style={Styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWeightM(true)}>
          <View style={Styles.listWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'line-chart'}
                color={'white'}
                size={24}
                style={{marginTop: 3}}
              />
              <Text style={Styles.listText}>{'Edit Weight Goals'}</Text>
            </View>
            <Image source={Images.chevron} style={Styles.userImage} />
          </View>
          <View style={Styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNotiM(true)}>
          <View style={Styles.listWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'newspaper-o'}
                color={'purple'}
                size={23}
                style={{marginTop: 3}}
              />
              <Text style={Styles.listText}>{'Manage notifications'}</Text>
            </View>
            <Image source={Images.chevron} style={Styles.userImage} />
          </View>
          <View style={Styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCalc(true)}>
          <View style={Styles.listWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'calculator'}
                color={'violet'}
                size={25}
                style={{marginTop: 3}}
              />
              <Text style={Styles.listText}>{'Fitness calculators'}</Text>
            </View>
            <Image source={Images.chevron} style={Styles.userImage} />
          </View>
          <View style={Styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => {
            signOuty();
            props.signOut();
            
          }}>
          <Text style={Styles.buttonText}>{Constants.SIGNOUT}</Text>
        </TouchableOpacity>
        <MacroModal visibility={macroM} setModalV={setModalVisibility}/>
        <WaterModal visibility={waterM} setModalV={setModalVisibility}/>
        <CalcHomeComponent visibility={calc} setModalV={setModalVisibility} toggleModal={setModalVisibility}/>
      </View>
    </Modal>
  );
};

export default EditMainModal;
