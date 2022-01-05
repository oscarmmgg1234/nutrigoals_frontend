import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityComponent from '../../../Components/activityIndicator';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import Styles from './Styles';
import * as Constants from '../../../Constants';
import Colors from '../../../Styles/Colors';
import Images from '../../../Styles/Images';
import { app_context } from '../../../setup'
import { login_user } from '../../../http_config/server_call_func'


const Login = (props) => {
  const [state, setState] = useState({
    indicatorDelay: false,
    email: '',
    emailFocus: false,
    password: '',
    passwordFocus: false,
    loggedInStatus: '',
  })
  const { User, setUserInfo } = useContext(app_context)

  next = () => {
    props.navigation.navigate('UserStack');
  }

  loginValidator = () => {

    if (User.user_id != "") {
      setState({ ...state, indicatorDelay: true })
      setTimeout(() => { setState({ ...state, indicatorDelay: false }); this.next(); }, 1000);
      //cache call if user has been authenticated before
      login_user({ username: state.email, password: state.password, user_id: User.user_id }, (res) => {
        if (!res) { alert("Wrong username or password") }
        else {
          setUserInfo({
            name: "",
            age: 0,
            weight: 0,
            gender: "",
            username: res.username,
            user_id: res.user_id,
            profile_image: res.image
          });
          this.next();
        }
      });
      
    }
    else {
      login_user({ username: state.email, password: state.password, user_id: "" }, (res) => {
        setState({ ...state, indicatorDelay: true })
        setTimeout(() => { setState({ ...state, indicatorDelay: false }); }, 1000);
        if (!res) { alert("Wrong username or password") }
        else {
          setUserInfo({
            name: res,
            age: 0,
            weight: 0,
            gender: "",
            username: res.username,
            user_id: res.user_id,
            profile_image: res.image
          });
          this.next();
        }
      })
      
    }
  };


  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={Styles.safeViewStyle}>
        <KeyboardAvoidingView behavior={'padding'}>
          <ActivityComponent visibility={state.indicatorDelay} />
          <ScrollView keyboardDismissMode={'on-drag'}>

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
                        state.email.length > 0
                          ? '#62FF68'
                          : state.emailemailFocus
                            ? Colors.buttonColor
                            : Colors.backgroundColor,
                    },
                  ]}>
                  <TextInput
                    style={Styles.emailInput}
                    value={state.email}
                    placeholder={'Enter your Username'}
                    placeholderTextColor={Colors.primary}
                    onFocus={this.focusEmail}
                    onBlur={this.focusEmail}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      setState({ ...state, email: value });
                    }}
                  />
                  {state.email.length > 0 && (
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
                        state.password.length > 0
                          ? '#62FF68'
                          : state.passwordFocus
                            ? Colors.buttonColor
                            : Colors.backgroundColor,
                    },
                  ]}>
                  <TextInput
                    style={Styles.emailInput}
                    value={state.password}
                    placeholder={'Enter your password'}
                    placeholderTextColor={Colors.primary}
                    secureTextEntry={true}
                    onFocus={this.focusPassword}
                    onBlur={this.focusPassword}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      setState({ ...state, password: value });
                    }}
                  />
                  {state.password.length > 0 && (
                    <Image source={Images.check} style={Styles.checkImage} />
                  )}
                </View>
              </View>

              <TouchableOpacity
                style={Styles.buttonContainer}
                onPress={
                  () => this.loginValidator()

                }




              >
                <Text style={Styles.buttonText}>{Constants.LOGIN}</Text>
              </TouchableOpacity>

              <View style={Styles.bottomWrapper}>
                <Text style={Styles.alreadyAccountText}>
                  {Constants.DONT_HAVE_ACCOUNT}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Register');
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
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

export default Login;
