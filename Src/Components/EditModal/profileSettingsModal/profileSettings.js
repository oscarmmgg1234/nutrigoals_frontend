import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "../../../Screens/Profile/Styles";
import colors from "../../../Styles/Colors";

const ProfileSettings = (props) => {
    const [isMetric, setUnits] = useState(true);
    const [currentGender, setGender] = useState('Male');
    const [currentName, setName] = useState('Username')
    const [currentEmail, setEmail] = useState('User Email')
    const [currentAge, setAge] = useState('22')
    const [currentWeight, setWeight] = useState('153')
    const [currentPhysicalLv, setPhysicalLv] = useState('5')
    const [currentHeight, setHeight] = useState({
      bigNum: '5',
      smallNum: '8'
    })
    const [editableField, enableEdit] = useState({
      nameField: false,
      emailField: false,
      ageField: false,
      weightField: false,
      physicalLvField: false,
      bigHeightField: false,
      smallHeightField: false,
    })

    function UpdateField() {
      setName()
      enableEdit({nameField:false})
    }

    return (
        <Modal
        animationType={'slide'}
        visible={props.modal}
        onRequestClose={() => props.toggleModal()}>
          <ScrollView style={Styles.ModalContainer}>
            <View style={Styles.modalHeader}>
              <View style={Styles.ModalHeaderView}>
                <Text style={Styles.homeText}>{"Account Settings"}</Text>
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
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Units: '}</Text>
              <View style={[Styles.LongContainer, {justifyContent:'space-evenly'}]}>
                <TouchableOpacity onPress={()=> setUnits(false)}>
                  <View style={[Styles.HalfTextContainers, {backgroundColor: isMetric ? colors.backgroundColor : colors.purple}]}>
                      <Text style={[Styles.SelectableText]}>{'Imperial'}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setUnits(true)}>
                  <View style={[Styles.HalfTextContainers, {backgroundColor: isMetric ? colors.purple : colors.backgroundColor}]}>
                    <Text style={Styles.SelectableText}>{'Metric'}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Name: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput style={[Styles.SettingsInnerText]} editable={editableField.nameField == true} value={currentName} onChangeText={text=>setName(text)}/>
                <TouchableOpacity onPress={()=> editableField.nameField ? enableEdit({nameField: false}) : enableEdit({nameField:true})}>
                  <Icon
                        name={editableField.nameField == true ? 'floppy-o' : 'edit'}
                        color={'white'}
                        size={25}
                        style={Styles.SettingsEditIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Email: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput autoCapitalize={false} style={Styles.SettingsInnerText} editable={editableField.emailField == true} value={currentEmail} onChangeText={text=>setEmail(text)}/>
                  <TouchableOpacity onPress={()=>editableField.emailField ? enableEdit({emailField:false}) : enableEdit({emailField:true})}>
                    <Icon
                          name={editableField.emailField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
              </View>
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Age: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput style={[Styles.SettingsInnerText, {marginLeft:150}]} editable={editableField.ageField == true} value={currentAge} onChangeText={text=>setAge(text)}/>
                <TouchableOpacity onPress={()=>editableField.ageField ? enableEdit({ageField:false}) : enableEdit({ageField:true})}>
                    <Icon
                          name={editableField.ageField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                </TouchableOpacity>
              </View>
              <View style={Styles.PairTextContainer}> 
                <Text style={Styles.AccountSettingsContainerHeaderText}>{'Weight: '}</Text>
                <Text style={Styles.AccountSettingsContainerHeaderText}>{'Physical Level: '}</Text>
              </View>
              <View style={Styles.PairContainer}>
                <View style={Styles.HalfContainer}>
                  <TextInput style={[Styles.SettingsHalfInnerText]} editable={editableField.weightField == true} onChangeText={text=>setWeight(text)} value={currentWeight}/>
                  <Text style={Styles.UnitText}> {isMetric ? 'kg' : 'lb'} </Text>
                  <TouchableOpacity onPress={()=>editableField.weightField ? enableEdit({weightField:false}) : enableEdit({weightField:true})}>
                    <Icon
                          name={editableField.weightField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={Styles.HalfContainer}>
                  <TextInput style={Styles.SettingsHalfInnerText} editable={editableField.physicalLvField} onChangeText={text=>setPhysicalLv(text)} value={currentPhysicalLv}/>
                  <TouchableOpacity onPress={()=> editableField.physicalLvField ? enableEdit({physicalLvField: false}) : enableEdit({physicalLvField:true})}>
                    <Icon
                          name={editableField.physicalLvField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                </TouchableOpacity>
                </View>
              </View>
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Gender: '}</Text>
              <View style={[Styles.LongContainer, {justifyContent:'space-evenly'}]}>
                <TouchableOpacity onPress={()=> setGender('Male')}>
                  <View style={[Styles.HalfTextContainers, {backgroundColor: currentGender=='Male' ? colors.red : colors.backgroundColor}]}>
                      <Text style={[Styles.SelectableText]}>{'Male'}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setGender('Female')}>
                  <View style={[Styles.HalfTextContainers, {backgroundColor: currentGender=='Female'? colors.red : colors.backgroundColor}]}>
                    <Text style={Styles.SelectableText}>{'Female'}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Styles.PairTextContainer}> 
                <Text style={Styles.AccountSettingsContainerHeaderText}>{'Height: '}</Text>
              </View>
              <View style={Styles.PairContainer}>
                <View style={Styles.HeightContainers}>
                  <TextInput style={Styles.SettingsHalfInnerText} value={currentHeight.bigNum} editable={editableField.bigHeightField} onChangeText={text=>setHeight(currentHeight.bigNum=text)}/>
                  <Text style={Styles.UnitText}>{isMetric ? ' m' : ' ft'}</Text>
                  <TouchableOpacity onPress={()=> editableField.bigHeightField ? enableEdit({bigHeightField: false}) : enableEdit({bigHeightField:true})}>
                    <Icon
                          name={editableField.bigHeightField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={Styles.HeightContainers}>
                  <TextInput style={Styles.SettingsHalfInnerText} value={currentHeight.smallNum} editable={editableField.smallHeightField} onChangeText={text=>setHeight(currentHeight.smallNum=text)}/>
                  <Text style={Styles.UnitText}>{isMetric ? ' cm' : ' in'}</Text>
                  <TouchableOpacity onPress={()=> editableField.smallHeightField ? enableEdit({smallHeightField: false}) : enableEdit({smallHeightField:true})}>
                    <Icon
                          name={editableField.smallHeightField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
        </Modal>
    );
};
export default ProfileSettings;