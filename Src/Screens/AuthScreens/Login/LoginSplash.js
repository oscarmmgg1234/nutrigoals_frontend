import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginSplash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={Styles.loginSContainer}>
        <Image
          source={require('../../../assests/logo/workOut.jpg')}
          style={Styles.BackgroundImage}
        />
        <View style={Styles.LoginScreenDim}>
          <Image
            source={require('../../../assests/logo/icon4.png')}
            style={Styles.logoImage}
          />
          <Text style={Styles.LoginSplashText}>
            The app to help you achieve your fitness goals
          </Text>
          <Text style={Styles.LoginSplashText2}>Lets first Log you in!</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={Styles.LoginSButton}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
