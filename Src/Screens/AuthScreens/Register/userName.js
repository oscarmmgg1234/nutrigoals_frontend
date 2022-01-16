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
import {register_user} from '../../../Services/register_user';
import {validate_input} from '../../../Utilities/input_validation';

class RegisterUserName extends Component {
  constructor(props) {
    super(props);
    this.usernameIsValid = null;
    this.nameIsValid = null;
    this.emailIsValid = null;
    this.passwordIsvalid = null;
    this.ageIsValid = null;
    this.weightIsValid = null;
    this.heightIsValid = null;

    this.state = {
      userName: '',
      userFocus: false,
      userNameError: false,
    };
  }

  focusEmail = () => {
    this.setState({userFocus: !this.state.userFocus});
  };

  register = () => {
    this.usernameIsValid = validate_input(this.state.username, {
      type: 'text',
      valueRequired: true,
      minLength: 5,
      maxLength: 30,
      customRegex: '^[a-zA-Z0-9 ]*$',
    });
    this.nameIsValid = validate_input(this.props.route.params.name, {
      type: 'text',
      valueRequired: true,
      minLength: 1,
      maxLength: 30,
    });
    this.emailIsValid = validate_input(this.props.route.params.email, {
      type: 'email',
    });
    this.passwordIsvalid = validate_input(this.props.route.params.password, {
      type: 'password',
    });
    this.ageIsValid = validate_input(parseInt(this.props.route.params.age), {
      type: 'number',
      minNum: 0,
      maxNum: 100,
    });
    this.weightIsValid = validate_input(
      parseFloat(this.props.route.params.weight),
      {type: 'number', minNum: 0, maxNum: 1000},
    );
    this.heightIsValid = validate_input(this.props.route.params.height, {
      type: 'number',
      minNum: 0,
      maxNum: 150,
    });
    if (
      (this.usernameIsValid.status &&
        this.nameIsValid.status &&
        this.emailIsValid.status &&
        this.passwordIsvalid.status &&
        this.ageIsValid.status,
      this.weightIsValid.status && this.heightIsValid.status)
    ) {
      register_user(
        {
          username: this.state.userName,
          name: this.props.route.params.name,
          email: this.props.route.params.email,
          password: this.props.route.params.password,
          age: parseInt(this.props.route.params.age),
          gender: this.props.route.params.gender,
          weight: parseFloat(this.props.route.params.weight),
          height: this.props.route.params.height,
          fitnessLevel: parseInt(this.props.route.params.physicalLevel),
          weeklyLossGoal: parseInt(this.props.route.params.weeklyLoseGoal),
        },
        (res) => {
          if (res) {
            this.props.navigation.navigate('Login');
          } else {
            alert('email or username already in use');
          }
        },
      );
    } else {
      null;
    }
  };

  //useEffect to check for availabilty

  emailWrapperColor = () => {
    let result;
    if (this.state.userName.length > 0) {
      if (this.state.userNameError === true) {
        return '#FF4343';
      } else {
        result = '#62FF68';
      }
    } else {
      if (this.state.userFocus === true) {
        result = Colors.buttonColor;
      } else {
        result = Colors.backgroundColor;
      }
    }
    return result;
  };

  render() {
    const {userName, userFocus, indicatorDelay} = this.state;
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
                    borderColor: this.emailWrapperColor(),
                    /*userName.length > 0
                        ? '#62FF68'
                        : userFocus
                        ? Colors.buttonColor
                        : Colors.backgroundColor,*/
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
              onPress={() => this.register()}>
              <Text style={Styles.buttonText}>{Constants.FINISH_SIGNUP}</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default RegisterUserName;
