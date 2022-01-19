import React, {useContext, useEffect, useState} from 'react';
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
  KeyboardAvoidingView,
} from 'react-native';
import Styles from './Styles';
import * as Constants from '../../../Constants';
import Colors from '../../../Styles/Colors';
import Images from '../../../Styles/Images';
import {app_context} from '../../../core';
import {login_user} from '../../../http_config/server_handler/auth_server_handler';
import {validate_input} from '../../../Utilities/input_validation';
import {
  user_account_key,
  navigation_key,
  user_macro_goals_key,
  user_water_goals_key,
  user_soi_goals_key,
} from '../../../Constants';
import {save_bool_data, save_json_data} from '../../../Utilities/local_storage';
import SplashScreen from 'react-native-splash-screen';

const Login = (props) => {
  const [state, setState] = useState({
    indicatorDelay: false,
    email: '',
    emailFocus: false,
    password: '',
    passwordFocus: false,
    loggedInStatus: '',
  });
  const {
    User,
    setUserInfo,
    setUserGoals,
    userGoals,
    waterGoals,
    setWaterGoals,
    toggleInitialStack,
  } = useContext(app_context);

  next = async (userobj, macroobj, waterobj, soiobj) => {
    await save_bool_data(navigation_key, true);
    await save_json_data(user_account_key, userobj);
    await save_json_data(user_macro_goals_key, macroobj);
    await save_json_data(user_water_goals_key, waterobj);
    await save_json_data(user_soi_goals_key, soiobj);
  };

  loginValidator = () => {
    let passwordIsValid = validate_input(state.password, {type: 'password'});
    let usernameIsValid = validate_input(state.email, {
      type: 'text',
      valueRequired: true,
      minLength: 4,
      maxLength: 30,
      customRegex: '^[a-zA-Z0-9 ]*$',
    });
    if (passwordIsValid.status && usernameIsValid.status) {
      if (User.user_id != '') {
        setState({...state, indicatorDelay: true});
        setTimeout(() => {
          setState({...state, indicatorDelay: false});
        }, 3700);
        //cache call if user has been authenticated before
        login_user(
          {
            username: state.email,
            password: state.password,
            user_id: User.user_id,
          },
          (res) => {
            let parseObject = {};
            if (!res) {
              alert('Wrong username or password');
            } else {
              setUserInfo({
                name: res.fullname,
                age: res.age,
                weight: res.weight,
                gender: res.gender,
                height: res.height,
                username: res.username,
                user_id: res.user_id,
                profile_image: res.image,
                email: res.email,
                fitnessLevel: res.fitnessLevel,
                weeklyLossGoal: res.weeklyLossGoal,
              });
              parseObject = JSON.parse(res.userGoals);
              setUserGoals({
                ...userGoals,
                fatGoal: parseObject.fats,
                carbGoal: parseObject.carbohydrates,
                proteinGoal: parseObject.proteins,
                sugarGoal: parseObject.sugars,
                sodiumGoal: parseObject.sodiums,
              });
              setWaterGoals({...waterGoals, waterGoal: res.waterGoal});
              setTimeout(() => {
                toggleInitialStack(true);
              }, 3000);
              this.next(
                {
                  name: res.fullname,
                  age: res.age,
                  weight: res.weight,
                  gender: res.gender,
                  height: res.height,
                  username: res.username,
                  user_id: res.user_id,
                  profile_image: res.image,
                  email: res.email,
                  fitnessLevel: res.fitnessLevel,
                  weeklyLossGoal: res.weeklyLossGoal,
                },
                {
                  fatGoal: parseObject.fats,
                  carbGoal: parseObject.carbohydrates,
                  proteinGoal: parseObject.proteins,
                },
                {waterGoal: res.waterGoal},
                {
                  sugarGoal: parseObject.sugars,
                  sodiumGoal: parseObject.sodiums,
                },
              );
              //console.log(get_bool_data(navigation_key));
            }
          },
        );
      } else {
        login_user(
          {username: state.email, password: state.password, user_id: ''},
          (res) => {
            setState({...state, indicatorDelay: true});
            setTimeout(() => {
              setState({...state, indicatorDelay: false});
            }, 3700);
            if (!res) {
              alert('Wrong username or password');
            } else {
              setUserInfo({
                name: res.fullname,
                age: res.age,
                weight: res.weight,
                gender: res.gender,
                height: res.height,
                username: res.username,
                user_id: res.user_id,
                profile_image: res.image,
                email: res.email,
                fitnessLevel: res.fitnessLevel,
                weeklyLossGoal: res.weeklyLossGoal,
              });
              parseObject = JSON.parse(res.userGoals);
              setUserGoals({
                ...userGoals,
                fatGoal: parseObject.fats,
                carbGoal: parseObject.carbohydrates,
                proteinGoal: parseObject.proteins,
                sugarGoal: parseObject.sugars,
                sodiumGoal: parseObject.sodiums,
              });
              setWaterGoals({...waterGoals, waterGoal: res.waterGoal});
              setTimeout(() => {
                toggleInitialStack(true);
              }, 3000);

              this.next(
                {
                  name: res.fullname,
                  age: res.age,
                  weight: res.weight,
                  gender: res.gender,
                  height: res.height,
                  username: res.username,
                  user_id: res.user_id,
                  profile_image: res.image,
                  email: res.email,
                  fitnessLevel: res.fitnessLevel,
                  weeklyLossGoal: res.weeklyLossGoal,
                },
                {
                  fatGoal: parseObject.fats,
                  carbGoal: parseObject.carbohydrates,
                  proteinGoal: parseObject.proteins,
                },
                {waterGoal: res.waterGoal},
                {
                  sugarGoal: parseObject.sugars,
                  sodiumGoal: parseObject.sodiums,
                },
              );
              //console.log(get_bool_data(navigation_key));
            }
          },
        );
      }
    } else {
      null;
    }
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} hidden={false} />
      <SafeAreaView style={Styles.safeViewStyle}>
        <KeyboardAvoidingView behavior={'padding'}>
          <ActivityComponent visibility={state.indicatorDelay} />

          <ScrollView keyboardDismissMode={'on-drag'}>
            <View style={Styles.mainContainer}>
              <Text style={[Styles.headerText, {marginRight: 9}]}>
                {Constants.LOGIN}
              </Text>

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
                      setState({...state, email: value});
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
                      setState({...state, password: value});
                    }}
                  />
                  {state.password.length > 0 && (
                    <Image source={Images.check} style={Styles.checkImage} />
                  )}
                </View>
              </View>

              <TouchableOpacity
                style={Styles.buttonContainer}
                onPress={() => this.loginValidator()}>
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
  );
};

export default Login;
