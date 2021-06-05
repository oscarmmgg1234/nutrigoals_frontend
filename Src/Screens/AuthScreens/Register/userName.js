import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Styles from './Styles';
import * as Constants from '../../../Constants';
import Colors from '../../../Styles/Colors';
import Images from '../../../Styles/Images';

class RegisterUserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userFocus: false,
    };
  }
  focusEmail = () => {
    this.setState({userFocus: !this.state.userFocus});
  };

  render() {
    const {userName, userFocus} = this.state;
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <ScrollView>
            <View style={Styles.mainContainer}>
              <Text style={Styles.headerText}>{Constants.SELECT_USERNAME}</Text>
            </View>

            <View style={Styles.emailMainContainer}>
              {/* User Name */}
              <Text style={Styles.inputTextStyle}>{Constants.USERNAME}</Text>
              <View
                style={[
                  Styles.emailWrapper,
                  {
                    borderColor:
                      userName.length > 0
                        ? '#62FF68'
                        : userFocus
                        ? Colors.buttonColor
                        : Colors.backgroundColor,
                  },
                ]}>
                <TextInput
                  style={Styles.emailInput}
                  value={userName}
                  placeholder={'Enter your Username'}
                  placeholderTextColor={Colors.primary}
                  onFocus={this.focusEmail}
                  onBlur={this.focusEmail}
                  autoCapitalize="none"
                  onChangeText={(value) => {
                    this.setState({userName: value});
                  }}
                />
                {userName.length > 0 && (
                  <Image source={Images.check} style={Styles.checkImage} />
                )}
              </View>
            </View>

            <TouchableOpacity
              style={Styles.buttonContainer}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={Styles.buttonText}>{Constants.FINISH_SIGNUP}</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default RegisterUserName;
