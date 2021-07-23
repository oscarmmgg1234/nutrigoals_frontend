
import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import Styles from '../../Screens/Home/Styles';
import * as Constants from '../../Constants/index';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'


const EditMainModal = (props) => {

    const [modalVisibility, setModalV] = useState({macroM: false, waterM: false, weightM: false, notiM: false, calc: false})


    return (<Modal
        animationType={'slide'}
        transparent={true}
        visible={props.modal}
        onRequestClose={() => props.toggleModal()}>
        <View style={Styles.ModalContainer}>
          <View style={Styles.modalHeader}>
            <View style={Styles.ModalHeaderView}>
              <View style={{display: 'flex', flexDirection:'row'}}>
                <Icon name={'cog'} color={'white'} size={37} style={{marginTop: 7, marginRight: 8}}/>
              <Text style={Styles.homeText}>
                {Constants.SETTINGS}
              </Text>
              
              </View>
              
              <TouchableOpacity

                onPress={() => props.toggleModal()}>
                <Icon name={'close'} color={'white'} size={35} style={{marginTop: 4}} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{marginTop: 16}}
            onPress={() => setModalV({macroM: true})}>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
                <Icon name={'bullseye'} color={'coral'} size={27} style={{marginTop: 3}}/>
                <Text style={Styles.listText}>
                  {'Edit Macronutrient Goals '}
                </Text>
              </View>
              <Image
                source={Images.chevron}
                style={Styles.userImage}
              />
            </View>
            <View style={Styles.seperator} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalV({waterM: true})}>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
              <Icon name={'glass'} color={'aquamarine'} size={25} style={{marginTop: 3}}/>
                <Text style={Styles.listText}>
                  {'Edit Water Goals'}
                </Text>
              </View>
              <Image
                source={Images.chevron}
                style={Styles.userImage}
              />
            </View>
            <View style={Styles.seperator} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalV({weightM: true})}>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
              <Icon name={'line-chart'} color={'white'} size={24} style={{marginTop: 3}}/>
                <Text style={Styles.listText}>
                  {'Edit Weight Goals'}
                </Text>
              </View>
              <Image
                source={Images.chevron}
                style={Styles.userImage}
              />
            </View>
            <View style={Styles.seperator} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalV({notiM: true})}> 
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
              <Icon name={'window-maximize'} color={'purple'} size={25} style={{marginTop: 3}}/>
                <Text style={Styles.listText}>
                  {'Manage notifications'}
                </Text>
              </View>
              <Image
                source={Images.chevron}
                style={Styles.userImage}
              />
            </View>
            <View style={Styles.seperator} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalV({calc: true})}>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
              <Icon name={'gears'} color={'violet'} size={25} style={{marginTop: 3}}/>
                <Text style={Styles.listText}>
                  {'Fitness calculators'}
                </Text>
              </View>
              <Image
                source={Images.chevron}
                style={Styles.userImage}
              />
            </View>
            <View style={Styles.seperator} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonContainer}
            onPress={() => {
              this.signOuty();
            }}>
            <Text style={Styles.buttonText}>{Constants.SIGNOUT}</Text>
          </TouchableOpacity>
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={modalVisibility.macroM}>
            <View style={Styles.MacroModalContainer}>
              <View style={Styles.modalHeader}>
                <View style={Styles.ModalHeaderView}>
                  <Text style={Styles.homeText}>
                    {Constants.MACRONUTRIENT}
                  </Text>
                 
                  <TouchableOpacity onPress={()=>setModalV({macroM: false})}>
                    <Icon name={'close'} color={'white'} size={35} style={{marginTop: 4}} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.macroBodySwitchHeaderSwitch}>
                <Text style={Styles.macroTextSwitch}>
                  Select Method
                </Text>
              </View>
              <View style={Styles.switchContainer}>
                <Text
                  style={
                    modalVisibility.macroM === false
                      ? {color: Colors.buttonColor}
                      : {color: 'white'}
                  }>
                  {'<= Custom'}
                </Text>
                <Switch
                  style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
                  trackColor={'coral'}
                  thumbColor={Colors.backgroundColor}
                  onValueChange={props.toggleMacro}
                  value={true}
                />
                <Text
                  style={
                    modalVisibility.macroM === true
                      ? {color: Colors.buttonColor}
                      : {color: 'white'}
                  }>
                  {'Ratio =>'}
                </Text>
              </View>

              <TouchableOpacity onPress={() => {}}>
                <Text style={Styles.homeText}>Edit Macro</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </Modal>)
}

export default EditMainModal;