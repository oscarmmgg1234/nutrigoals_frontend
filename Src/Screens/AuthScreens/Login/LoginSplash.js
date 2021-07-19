import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View, StatusBar, ImageBackground} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Styles from './Styles';



export default class LoginSplash extends React.Component {
  constructor(props) {
    super(props);
    


  }
  componentDidMount() {
    SplashScreen.hide();
    }
  
  render() { 
  
    return (<>
      <StatusBar 
      hidden={true}
      />

     
       
      <View style={Styles.loginSContainer}>
        <ImageBackground
        style={{width: '100%', height: '100%', tintColor: '#000000'}}
        resizeMode={'cover'}
      
          source={require('../../../assests/logo/workOut.jpg')}
        >
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
        </ImageBackground>
      </View>
      
      </>
    );
  }
}
