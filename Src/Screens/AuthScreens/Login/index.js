import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
import {AuthSeverCall} from '../../../http_config/axios_config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailFocus: false,
      password: '',
      passwordFocus: false,
    };
  }

  next() {
    AsyncStorage.setItem('LoggedInStatus', true);
    this.props.navigation.navigate('Home');
  }

  loginValidator = () => {
    AuthSeverCall.post('/login', {
      username: this.state.email,
      password: this.state.password,
    }).then((res) => {

    });
  };

  focusEmail = () => {
    this.setState({emailFocus: !this.state.emailFocus});
  };
  focusPassword = () => {
    this.setState({passwordFocus: !this.state.passwordFocus});
  };
  render() {
    const {email, emailFocus, password, passwordFocus} = this.state;
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <ScrollView>
            <View style={Styles.mainContainer}>
              <Text style={Styles.headerText}>{Constants.LOGIN}</Text>

              <View style={Styles.emailMainContainer}>
                {/* Email */}
                <Text style={Styles.inputTextStyle}>{Constants.USERNAME}</Text>
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
                    placeholder={'Enter your Username'}
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
                      borderColor:
                        password.length > 0
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
                  {password.length > 0 && (
                    <Image source={Images.check} style={Styles.checkImage} />
                  )}
                </View>
              </View>

              <TouchableOpacity
                style={Styles.buttonContainer}
                onPress={
                  this.loginValidator
                  //this.loginValidator(this.state.email, this.state.password)
                }>
                <Text style={Styles.buttonText}>{Constants.LOGIN}</Text>
              </TouchableOpacity>

              <View style={Styles.bottomWrapper}>
                <Text style={Styles.alreadyAccountText}>
                  {Constants.DONT_HAVE_ACCOUNT}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Register');
                  }}>
                  <Text style={Styles.loginTextBottom}>{Constants.SIGNUP}</Text>
                </TouchableOpacity>
              </View>

              <View style={Styles.seperatorContainer} />

              <Text style={Styles.socialTextStyling}>
                {Constants.LOGIN_DESCRIPTION}
              </Text>

              {/* Google */}
              <TouchableOpacity style={Styles.googleWrapper}>
                <Text style={Styles.googleTextBottom}>{Constants.GOOGLE}</Text>
              </TouchableOpacity>

              {/* Facebook */}
              <TouchableOpacity style={Styles.googleWrapper}>
                <Text style={Styles.googleTextBottom}>{Constants.APPLEID}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default Login;
