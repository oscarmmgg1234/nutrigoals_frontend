import React, {Component} from 'react';
import {Modal, View, TouchableOpacity, Text, Image, Switch} from 'react-native';
import Styles from '../../../Screens/Home/Styles';
import Images from '../../../Styles/Images';
import * as Constants from '../../../Constants';
import Colors from '../../../Styles/Colors';
import {app_context} from '../../../setup';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      macroSwitch: false,
      modalVisible: false,
      eMacroModalVisible: false,
      eWaterModalVisible: false,
      eWeightModalVisble: false,
    };
  }

  toggleMacroSwitch = () => {
    let prev = this.state.macroSwitch;
    this.setState({macroSwitch: !prev});
  };

  render() {
    return (
      <app_context.Consumer>
        {({imagePath, selectImage}) => (
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContainer}>
              <TouchableOpacity onPress={selectImage}>
                <Image
                  source={imagePath ? {uri: imagePath} : Images.Profile}
                  style={Styles.profileStyle}
                />
              </TouchableOpacity>
              <Text style={Styles.homeText}>{'Home'}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image source={Images.search} style={Styles.sideImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: true})}>
                  <Image source={Images.menu} style={Styles.sideImage1} />
                </TouchableOpacity>
                <Modal
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
                      onPress={() => this.setState({eMacroModalVisible: true})}>
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
                      visible={this.state.eMacroModalVisible}
                      onRequestClose={() =>
                        this.setState({eMacroModalVisible: false})
                      }>
                      <View style={Styles.MacroModalContainer}>
                        <View style={Styles.modalHeader}>
                          <View style={Styles.ModalHeaderView}>
                            <Text style={Styles.homeText}>
                              {Constants.MACRONUTRIENT}
                            </Text>
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({eMacroModalVisible: false})
                              }>
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
                              this.state.macroSwitch === false
                                ? {color: Colors.buttonColor}
                                : {color: 'white'}
                            }>
                            {'<= Custom'}
                          </Text>
                          <Switch
                            style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
                            trackColor={'coral'}
                            thumbColor={Colors.backgroundColor}
                            onValueChange={this.toggleMacroSwitch}
                            value={this.state.macroSwitch}
                          />
                          <Text
                            style={
                              this.state.macroSwitch === true
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
                </Modal>
              </View>
            </View>

            <View style={Styles.headerContainer}>
              <TouchableOpacity>
                <Image source={Images.arrow_left} style={Styles.sideImage} />
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: -10}}>
                <TouchableOpacity>
                  <Image source={Images.calendar} style={Styles.sideImage} />
                </TouchableOpacity>
                <Text style={Styles.calenderText}>{' May 23, 2021'}</Text>
              </View>
              <TouchableOpacity>
                <Image source={Images.arrow_right} style={Styles.sideImage1} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </app_context.Consumer>
    );
  }
}

export default HomeHeader;
