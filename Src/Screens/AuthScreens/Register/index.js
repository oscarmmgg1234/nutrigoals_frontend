import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Switch,
} from 'react-native';
import Styles from './Styles';
import * as Constants from '../../../Constants';
import Colors from '../../../Styles/Colors';
import Images from '../../../Styles/Images';
import ScrollPicker from 'react-native-wheely-simple-picker';

class Register extends Component {
  constructor(props) {
    super(props);
    this.physicalLevel = createRef();
    this.weeklyLossGoal = createRef();
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
      age: 0,
      ageFocus: false,
      weight: 0,
      weightFocus: false,
      heightBig: 0.0,
      heightSmall: 0,
      heightBigFocus: false,
      heightSmallFocus: false,
      gender: false,
    };
  }

  componentDidMount() {
    this.physicalLevel.current = 3;
    this.weeklyLossGoal.current = 4;
  }
  scrollSourceDataSource = (scrollPicker) => {
    if (scrollPicker) {
      //return physical activity source
      return [
        'Sedentary (office job)',
        'Light Exercise (1-2 days/week)',
        'Moderate Exercise (3-5 days/week)',
        'Heavy Exercise (6-7 days/week)',
        'Athlete (2x per day) ',
      ];
    } else {
      //return weight loss weekly goal
      return [
        'lose weight 2lb/week',
        'lose weight 1lb/week',
        'maintain weight',
        'gain 1lb/week',
        'gain 2lb/week',
      ];
    }
  };
  focusWeight = () => {
    this.setState({weightFocus: !this.state.weightFocus});
  };
  focusAge = () => {
    this.setState({ageFocus: !this.state.ageFocus});
  };
  setGenderValue = () => {
    this.setState({gender: !this.state.gender});
  };
  focusHeightBig = () => {
    this.setState({heightBigFocus: !this.state.heightBigFocus});
  };
  focusHeightSmall = () => {
    this.setState({heightSmallFocus: !this.state.heightSmallFocus});
  };
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
        gender: this.state.gender ? 'Female' : 'Male',
        age: this.state.age,
        height:
          parseInt(this.state.heightBig) * 12 +
          parseFloat(this.state.heightSmall),
        weight: this.state.weight,
        physicalLevel: this.physicalLevel.current,
        weeklyLoseGoal: this.weeklyLossGoal.current,
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
      age,
      ageFocus,
      weight,
      weightFocus,
      heightBig,
      heightBigFocus,
      heightSmall,
      gender,
    } = this.state;
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <KeyboardAvoidingView behavior={'padding'}>
            <ScrollView keyboardDismissMode={'on-drag'}>
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
                  {/* Gender */}
                  <Text style={Styles.inputTextStyle1}>{'Gender:'}</Text>
                  <View style={Styles.genderInputView}>
                    <Text
                      style={[
                        Styles.genderInputText,
                        {color: gender ? 'white' : '#0096FF'},
                      ]}>
                      Male
                    </Text>
                    <Switch
                      value={gender}
                      onChange={() => this.setGenderValue()}
                      thumbColor={gender ? '#F00995' : '#0096FF'}
                      trackColor={{true: '#C6C7C2', false: '#C6C7C2'}}
                      ios_backgroundColor={'#C6C7C2'}
                    />
                    <Text
                      style={[
                        Styles.genderInputText,
                        {color: gender ? '#F00995' : 'white'},
                      ]}>
                      Female
                    </Text>
                  </View>
                  {/* Physical Level Option */}
                  <View>
                    <Text style={Styles.inputTextStyle1}>
                      {'Fitness Level: '}
                    </Text>
                    <View style={[Styles.scrollWrapper, {width: '80%'}]}>
                      <ScrollPicker
                        dataSource={this.scrollSourceDataSource(true)}
                        selectedIndex={2}
                        wrapperWidth={'75%'}
                        wrapperBackground={'rgba(0,0,0,0.0)'}
                        highlightColor={'rgba(255,255,255,0.5)'}
                        activeItemTextStyle={{
                          color: 'orange',
                          fontSize: 15,
                          textAlign: 'center',
                        }}
                        itemTextStyle={{
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.7)',
                          textAlign: 'center',
                        }}
                        onValueChange={(data, selectedIndex) => {
                          this.physicalLevel.current = selectedIndex + 1;
                        }}
                      />
                    </View>
                  </View>
                  {/* Weekly Goal Loss Option */}
                  <View>
                    <Text style={Styles.inputTextStyle1}>
                      {'Weekly Goal: '}
                    </Text>
                    <View style={[Styles.scrollWrapper, {width: '80%'}]}>
                      <ScrollPicker
                        dataSource={this.scrollSourceDataSource(false)}
                        selectedIndex={3}
                        wrapperWidth={'75%'}
                        wrapperBackground={'rgba(0,0,0,0.0)'}
                        highlightColor={'rgba(255,255,255,0.5)'}
                        activeItemTextStyle={{
                          color: 'orange',
                          fontSize: 15,
                          textAlign: 'center',
                        }}
                        itemTextStyle={{
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.7)',
                          textAlign: 'center',
                        }}
                        onValueChange={(data, selectedIndex) => {
                          this.weeklyLossGoal.current = selectedIndex + 1;
                        }}
                      />
                    </View>
                  </View>

                  {/* age */}
                  <Text style={Styles.inputTextStyle1}>{'Age:'}</Text>
                  <View
                    style={[
                      Styles.emailWrapper,
                      {
                        borderColor:
                          age.length > 0
                            ? '#62FF68'
                            : ageFocus
                            ? Colors.buttonColor
                            : Colors.backgroundColor,
                      },
                    ]}>
                    <TextInput
                      style={Styles.emailInput}
                      value={age}
                      placeholder={'Age'}
                      placeholderTextColor={Colors.primary}
                      onFocus={this.ageFocus}
                      onBlur={this.ageFocus}
                      autoCapitalize="none"
                      onChangeText={(value) => {
                        this.setState({age: value});
                      }}
                      keyboardType="numeric"
                    />
                    {age.length > 0 && (
                      <Text style={Styles.checkText}>Years</Text>
                    )}
                  </View>

                  {/* height */}
                  <Text style={Styles.inputTextStyle1}>{'Height:'}</Text>
                  <View
                    style={[
                      Styles.emailWrapper,
                      {
                        borderColor:
                          heightBig.length > 0
                            ? '#62FF68'
                            : heightBigFocus
                            ? Colors.buttonColor
                            : Colors.backgroundColor,
                      },
                    ]}>
                    <TextInput
                      style={Styles.emailInput}
                      value={heightBig}
                      placeholder={'Feet'}
                      placeholderTextColor={Colors.primary}
                      onFocus={this.focusHeightBig}
                      onBlur={this.focusHeightBig}
                      autoCapitalize="none"
                      onChangeText={(value) => {
                        this.setState({heightBig: value});
                      }}
                      keyboardType="numeric"
                    />
                    {heightBig.length > 0 && (
                      <Text style={Styles.checkText}>Feet</Text>
                    )}
                  </View>

                  <View
                    style={[
                      Styles.emailWrapper,
                      {
                        borderColor:
                          heightSmall.length > 0
                            ? heightSmall <= 12
                              ? '#62FF68'
                              : Colors.red
                            : Colors.backgroundColor,
                      },
                    ]}>
                    <TextInput
                      style={Styles.emailInput}
                      value={heightSmall}
                      placeholder={'Inches'}
                      placeholderTextColor={Colors.primary}
                      onFocus={this.focusHeightSmall}
                      onBlur={this.focusHeightSmall}
                      autoCapitalize="none"
                      onChangeText={(value) => {
                        this.setState({heightSmall: value});
                      }}
                      keyboardType="numeric"
                    />
                    {heightSmall.length > 0 && (
                      <Text style={Styles.checkText}>Inches</Text>
                    )}
                  </View>

                  {/* weight*/}
                  <Text style={Styles.inputTextStyle1}>{'Weight:'}</Text>
                  <View
                    style={[
                      Styles.emailWrapper,
                      {
                        borderColor:
                          weight.length > 0
                            ? '#62FF68'
                            : weightFocus
                            ? Colors.buttonColor
                            : Colors.backgroundColor,
                      },
                    ]}>
                    <TextInput
                      style={Styles.emailInput}
                      value={weight}
                      placeholder={'Pounds'}
                      placeholderTextColor={Colors.primary}
                      onFocus={this.focusWeight}
                      onBlur={this.focusWeight}
                      autoCapitalize="none"
                      onChangeText={(value) => {
                        this.setState({weight: value});
                      }}
                      keyboardType="numeric"
                    />
                    {weight.length > 0 && (
                      <Text style={Styles.checkText}>lb</Text>
                    )}
                  </View>

                  {/* Password */}
                  <Text style={Styles.inputTextStyle1}>
                    {Constants.PASSWORD}
                  </Text>
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
                        <Image
                          source={Images.check}
                          style={Styles.checkImage}
                        />
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
                        <Image
                          source={Images.check}
                          style={Styles.checkImage}
                        />
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
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  }
}
export default Register;
