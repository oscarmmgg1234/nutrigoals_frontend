import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, TextInput, Switch, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "../../../Screens/Profile/Styles";
import { account_update } from "../../../Services/authServices/account_update";
import { app_context } from "../../../core";
import { validate_input } from "../../../Utilities/input_validation";
import { local_account_update } from "../../../Services/authServices/account_update";
import { user_account_key } from "../../../Constants";

const ProfileSettings = (props) => {

    

    const {User, setUserInfo} = React.useContext(app_context);

    const requestUpdate = (ind, value, config, jsonOBJ) => {
      let isValid = validate_input(value, config);
      if(isValid.status || config.payload === "none"){
      account_update({index: ind, payload: value, userID: User.user_id})
      local_account_update(user_account_key,jsonOBJ);
      }
     
      
      else{
        alert("input is invalid")
      }
    }
    const [currentName, setName] = useState(User.name)
    const [currentGender, setGender] = useState(User.gender);
    const [currentEmail, setEmail] = useState(User.email)
    const [currentAge, setAge] = useState(User.age.toString());
    const [currentWeight, setWeight] = useState(User.weight.toString())
    const [currentPhysicalLv, setPhysicalLv] = useState(User.fitnessLevel.toString())
    const [currentHeight, setHeight] = useState({
      bigNum: Math.floor(User.height / 12).toString(),
      smallNum: (User.height % 12).toString()
    })
    const [editableField, enableEdit] = useState({
      nameField: false,
      emailField: false,
      ageField: false,
      weightField: false,
      physicalLvField: false,
      bigHeightField: false,
      smallHeightField: false,
      genderField: true
    })

    

    return (
        <Modal
        animationType={'slide'}
        visible={props.modal}
        onRequestClose={() => props.toggleModal()}>
           <View style={Styles.modalHeader}>
              <View style={Styles.ModalHeaderView}>
                <Text style={Styles.homeText}>{"Account"}</Text>
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
              <KeyboardAvoidingView behavior="padding">
          <ScrollView style={Styles.ModalContainer}>
           
          <Text style={[Styles.AccountSettingsContainerHeaderText, {marginTop: 30}]}>{'Username: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput style={[Styles.SettingsInnerText]} value={User.username} />
              </View>
              <Text style={[Styles.AccountSettingsContainerHeaderText, {marginTop: 30}]}>{'Account-ID: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput style={[Styles.SettingsInnerText, {fontSize: 9}]} value={User.user_id} />
              </View>
              {/* Name Option */}
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Name: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput style={[Styles.SettingsInnerText]} editable={editableField.nameField == true} value={currentName} onChangeText={text=>setName(text)}/>
                <TouchableOpacity onPress={()=> {editableField.nameField ? enableEdit({...enableEdit,nameField: false}) : enableEdit({...enableEdit,nameField:true});if(editableField.nameField){
                    if(User.name !== currentName){ requestUpdate(1, currentName, {type: 'text', valueRequired: true, minLength: 1, maxLength: 35}, {...User, name: currentName});setUserInfo({...User, name: currentName})} else{null}}}}>
                  <Icon
                        name={editableField.nameField == true ? 'floppy-o' : 'edit'}
                        color={'white'}
                        size={25}
                        style={Styles.SettingsEditIcon}
                  />
                </TouchableOpacity>
              </View>
              {/* Email Option */}
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Email: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput autoCapitalize={false} style={Styles.SettingsInnerText} editable={editableField.emailField === true} value={currentEmail} onChangeText={text=>setEmail(text)}/>
                  <TouchableOpacity onPress={()=>{editableField.emailField ? enableEdit({...enableEdit,emailField:false}) : enableEdit({...enableEdit,emailField:true}); if(editableField.emailField){
                    if(User.email !== currentEmail){ requestUpdate(2, currentEmail, {type:"email"},{...User, email: currentEmail});setUserInfo({...User, email: currentEmail})} else{null}}}}>
                    <Icon
                          name={editableField.emailField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
              </View>
              {/* Age Option */}
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Age: '}</Text>
              <View style={Styles.LongContainer}>
                <TextInput style={[Styles.SettingsInnerText]} editable={editableField.ageField == true} value={currentAge} onChangeText={text=>setAge(text)}/>
                <TouchableOpacity onPress={()=>{editableField.ageField ? enableEdit({...enableEdit,ageField:false}) : enableEdit({...enableEdit,ageField:true}); if(editableField.ageField){
                  let cage = parseInt(currentAge)
                  if(User.age !== cage){requestUpdate(6, cage, {type: "number", minNum: 0, maxNum: 100},{...User, age: cage}); setUserInfo({...User, age: cage});}
                }}}>
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
              {/* Weight Option */}
              <View style={Styles.PairContainer}>
                <View style={Styles.HalfContainer}>
                  <TextInput style={[Styles.SettingsHalfInnerText]} editable={editableField.weightField == true} onChangeText={text=>setWeight(text)} value={currentWeight}/>
                  <Text style={Styles.UnitText}> {'  lb'} </Text>
                  <TouchableOpacity onPress={()=>{editableField.weightField ? enableEdit({...enableEdit,weightField:false}) : enableEdit({...enableEdit,weightField:true}); if(editableField.weightField){
                  let cweight = parseInt(currentWeight)
                  if(User.weight !== cweight){requestUpdate(4, cweight,{type: "number", minNum: 0, maxNum: 1000},{...User, weight: cweight}); setUserInfo({...User, weight: cweight});}}}}>
                    <Icon
                          name={editableField.weightField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                </View>
                {/* Fitness LVL Option */}
                <View style={Styles.HalfContainer}>
                  <TextInput style={Styles.SettingsHalfInnerText} editable={editableField.physicalLvField} onChangeText={text=>setPhysicalLv(text)} value={currentPhysicalLv}/>
                  <TouchableOpacity onPress={()=> {editableField.physicalLvField ? enableEdit({...enableEdit,physicalLvField: false}) : enableEdit({...enableEdit,physicalLvField:true}); if(editableField.physicalLvField){
                  let cfit = parseInt(currentPhysicalLv)
                  if(User.fitnessLevel !== cfit){requestUpdate(5, cfit, {type: "number", minNum: 0, maxNum: 5},{...User, fitnessLevel: cfit}); setUserInfo({...User, fitnessLevel: cfit});}}}}>
                    <Icon
                          name={editableField.physicalLvField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                </TouchableOpacity>
                </View>
                </View>
              {/* Gender Option */}
              
              <Text style={Styles.AccountSettingsContainerHeaderText}>{'Gender: '}</Text>
              
              <View style={Styles.LongContainer}>
                    <Text
                      style={[
                        Styles.SwitchInnerText,
                        {color: currentGender === "Female" ? 'white' : '#0096FF'},
                      ]}>
                      Male
                    </Text>
                    <Switch
                      disabled={editableField.genderField}
                      value={currentGender === "Female" ? true : false}
                      onChange={() => setGender(currentGender === 'Male' ? 'Female' : 'Male' ) }
                      thumbColor={currentGender === "Female" ? '#F00995' : '#0096FF'}
                      trackColor={{true: '#C6C7C2', false: '#C6C7C2'}}
                      ios_backgroundColor={'#C6C7C2'}
                    />
                    <Text
                      style={[
                        Styles.SwitchInnerText,
                        {color: currentGender === "Female" ? '#F00995' : 'white'},
                      ]}>
                      Female
                    </Text>
                    <TouchableOpacity onPress={()=> {editableField.genderField ? enableEdit({...enableEdit,genderField: false}) : enableEdit({...enableEdit,genderField:true});if(!editableField.genderField){
                  if(User.gender !== currentGender){requestUpdate(3, currentGender,{payload: "none"},{...User, gender: currentGender}); setUserInfo({...User, gender: currentGender});}}}}>
                    <Icon
                          name={editableField.genderField === true ?  'edit' : 'floppy-o'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                    </View>
                    {/* Height Option */}
              <View > 
                <Text style={Styles.AccountSettingsContainerHeaderText}>{'Height: '}</Text>
              </View>
              <View style={Styles.PairContainer}>
                <View style={Styles.HeightContainers}>
                  <TextInput style={Styles.SettingsHalfInnerText} value={currentHeight.bigNum} editable={editableField.bigHeightField} onChangeText={text=>setHeight({...currentHeight, bigNum: text})}/>
                  <Text style={Styles.UnitText}>{'   ft'}</Text>
                  <TouchableOpacity onPress={()=> {editableField.bigHeightField ? enableEdit({...enableEdit,bigHeightField: false}) : enableEdit({...enableEdit,bigHeightField:true});if(editableField.bigHeightField){
                  let theight = (parseInt(currentHeight.bigNum) * 12) + parseInt(currentHeight.smallNum);
                  if(User.height !== theight){requestUpdate(7, theight,{type: "number", minNum: 0, maxNum: 10},{...User, height: theight}); setUserInfo({...User, height: theight});}}}}>
                    <Icon
                          name={editableField.bigHeightField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                </View>
                {/* Height Option */}
                <View style={Styles.HeightContainers}>
                  <TextInput style={Styles.SettingsHalfInnerText} value={currentHeight.smallNum} editable={editableField.smallHeightField} onChangeText={text=>setHeight({...currentHeight, smallNum: text})}/>
                  <Text style={Styles.UnitText}>{'   in'}</Text>
                  <TouchableOpacity onPress={()=> {editableField.smallHeightField ? enableEdit({...enableEdit,smallHeightField: false}) : enableEdit({...enableEdit,smallHeightField:true});if(editableField.smallHeightField){
                  let theight = (parseInt(currentHeight.bigNum) * 12) + parseInt(currentHeight.smallNum);
                  if(User.height !== theight){requestUpdate(7, theight, {type: "number", minNum: 0, maxNum: 12},{...User, height: theight}); setUserInfo({...User, height: theight});}}}}>
                    <Icon
                          name={editableField.smallHeightField == true ? 'floppy-o' : 'edit'}
                          color={'white'}
                          size={25}
                          style={Styles.SettingsEditIcon}
                    />
                  </TouchableOpacity>
                </View>

              </View>
              <View style={{marginBottom: 200}}/>
            </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default ProfileSettings;