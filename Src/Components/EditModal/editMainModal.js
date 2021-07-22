import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import {Modal, View, Text, SafeAreaView} from 'react-native';

const EditMainModal = (props) => {

    return (<Modal
        animationType={'slide'}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => this.setState({modalVisible: false})}>
        <View style={Styles.ModalContainer}>
          <View style={Styles.modalHeader}>
            <View style={Styles.ModalHeaderView}>
              <Text style={Styles.homeText}>
                {Constants.SETTINGS}
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: false})}>
                <Text style={Styles.homeText}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{marginTop: 16}}
            onPress={() => props.toggle}>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Images.data}
                  style={Styles.userImage}
                />
                <Text style={Styles.listText}>
                  {'Edit Macro Goals '}
                </Text>
              </View>
              <Image
                source={Images.chevron}
                style={Styles.userImage}
              />
            </View>
            <View style={Styles.seperator} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Images.data}
                  style={Styles.userImage}
                />
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
          <TouchableOpacity>
            <View style={Styles.listWrapper}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Images.data}
                  style={Styles.userImage}
                />
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
            visible={props.eMacro}>
            <View style={Styles.MacroModalContainer}>
              <View style={Styles.modalHeader}>
                <View style={Styles.ModalHeaderView}>
                  <Text style={Styles.homeText}>
                    {Constants.MACRONUTRIENT}
                  </Text>
                  <TouchableOpacity
                    >
                    <Text style={Styles.homeText}>Back</Text>
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
                    props.macroSwitch === false
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
                  value={this.state.macroSwitch}
                />
                <Text
                  style={
                    props.macroSwitch === true
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