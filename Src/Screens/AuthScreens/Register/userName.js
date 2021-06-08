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
import {
  registerUser,
  registerUserCredentials,
  checkUsernameStatus,
} from '../../../http_config/server_call_func';

class RegisterUserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userFocus: false,
      name: '',
      password: '',
      email: '',
      userNameError: false,
    };
  }
  componentDidMount() {
    this.setState({
      name: this.props.navigation.getParam('name'),
      email: this.props.navigation.getParam('email'),
      password: this.props.navigation.getParam('password'),
    });
  }

  focusEmail = () => {
    this.setState({userFocus: !this.state.userFocus});
  };

  UsernameStatus = () => {

      registerUser(this.state.userName, this.state.name, this.state.email);
      registerUserCredentials(this.state.userName, this.state.password);
      //this.props.navigation.navigate('Login');

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
              onPress={() => this.UsernameStatus()}>
              <Text style={Styles.buttonText}>{Constants.FINISH_SIGNUP}</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default RegisterUserName;
