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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailFocus: false,
      password: '',
      passwordFocus: false,
      name: '',
      nameFocus: false,
      confirmFocus: false,
      confirm_password: '',
      passworMatcher: false,
    };
  }
  focusEmail = () => {
    this.setState({emailFocus: !this.state.emailFocus});
  };
  focusPassword = () => {
    this.setState({passwordFocus: !this.state.passwordFocus});
  };
  focusName = () => {
    this.setState({nameFocus: !this.state.nameFocus});
  };
  focusConfirmPassword = () => {
    this.setState({confirmFocus: !this.state.confirmFocus});
  };
  nextPage = () => {
    const {password, confirm_password} = this.state;
    if (password != confirm_password) {
      this.setState({passworMatcher: !this.state.passworMatcher});
    } else {
      this.setState({passworMatcher: false});
      this.props.navigation.navigate('RegisterUserName', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      });
    }
  };
  render() {
    const {
      name,
      email,
      emailFocus,
      password,
      passwordFocus,
      nameFocus,
      confirm_password,
      confirmFocus,
      passworMatcher,
    } = this.state;
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <ScrollView>
            <View style={Styles.mainContainer}>
              <Text style={Styles.headerText}>{Constants.SIGNUP}</Text>

              <View style={Styles.emailMainContainer}>
                {/* Name */}
                <Text style={Styles.inputTextStyle}>{Constants.NAME}</Text>
                <View
                  style={[
                    Styles.emailWrapper,
                    {
                      borderColor:
                        name.length > 0
                          ? '#62FF68'
                          : nameFocus
                          ? Colors.buttonColor
                          : Colors.backgroundColor,
                    },
                  ]}>
                  <TextInput
                    style={Styles.emailInput}
                    value={name}
                    placeholder={'Enter your Name'}
                    placeholderTextColor={Colors.primary}
                    onFocus={this.focusName}
                    onBlur={this.focusName}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      this.setState({name: value});
                    }}
                  />
                  {name.length > 0 && (
                    <Image source={Images.check} style={Styles.checkImage} />
                  )}
                </View>

                {/* Email */}
                <Text style={Styles.inputTextStyle1}>{Constants.EMAIL}</Text>
                <View
                  style={[
                    Styles.emailWrapper,
                    {
                      borderColor:
                        email.length > 0
                          ? '#62FF68'
                          : emailFocus
                          ? Colors.buttonColor
                          : Colors.backgroundColor,
                    },
                  ]}>
                  <TextInput
                    style={Styles.emailInput}
                    value={email}
                    placeholder={'Enter your email'}
                    placeholderTextColor={Colors.primary}
                    onFocus={this.focusEmail}
                    onBlur={this.focusEmail}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      this.setState({email: value});
                    }}
                  />
                  {email.length > 0 && (
                    <Image source={Images.check} style={Styles.checkImage} />
                  )}
                </View>

                {/* Password */}
                <Text style={Styles.inputTextStyle1}>{Constants.PASSWORD}</Text>
                <View
                  style={[
                    Styles.emailWrapper,
                    {
                      borderColor: passworMatcher
                        ? '#FF4343'
                        : password.length > 0
                        ? '#62FF68'
                        : passwordFocus
                        ? Colors.buttonColor
                        : Colors.backgroundColor,
                    },
                  ]}>
                  <TextInput
                    style={Styles.emailInput}
                    value={password}
                    placeholder={'Enter your password'}
                    placeholderTextColor={Colors.primary}
                    secureTextEntry={true}
                    onFocus={this.focusPassword}
                    onBlur={this.focusPassword}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      this.setState({password: value});
                    }}
                  />
                  {passworMatcher ? (
                    <Image source={Images.cross} style={Styles.checkImage} />
                  ) : (
                    password.length > 0 && (
                      <Image source={Images.check} style={Styles.checkImage} />
                    )
                  )}
                </View>

                {/* Confirm Password */}
                <Text style={Styles.inputTextStyle1}>
                  {Constants.CONFIRM_PASSWORD}
                </Text>
                <View
                  style={[
                    Styles.emailWrapper,
                    {
                      borderColor: passworMatcher
                        ? '#FF4343'
                        : confirm_password.length > 0
                        ? '#62FF68'
                        : confirmFocus
                        ? Colors.buttonColor
                        : Colors.backgroundColor,
                    },
                  ]}>
                  <TextInput
                    style={Styles.emailInput}
                    value={confirm_password}
                    placeholder={'Re-type Password'}
                    placeholderTextColor={Colors.primary}
                    secureTextEntry={true}
                    onFocus={this.focusConfirmPassword}
                    onBlur={this.focusConfirmPassword}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      this.setState({confirm_password: value});
                    }}
                  />
                  {passworMatcher ? (
                    <Image source={Images.cross} style={Styles.checkImage} />
                  ) : (
                    confirm_password.length > 0 && (
                      <Image source={Images.check} style={Styles.checkImage} />
                    )
                  )}
                </View>
              </View>
              <View style={Styles.buttonContainerView}>
                <TouchableOpacity
                  style={Styles.buttonContainer2}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={Styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.buttonContainer2}
                  onPress={this.nextPage}>
                  <Text style={Styles.buttonText}>{Constants.NEXT}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default Register;
