import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Styles from './Styles';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import BottomWrapper from '../../Components/BottomNavigator';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleOn: true,
      imageProfile: ''
    };
  }
  selectImage = () => {
    const options = {
      quality: 0.1,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled photo picker');
        //dispatch(TASKS.hideLoader());
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
        //dispatch(TASKS.hideLoader());
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        // let source = { uri: response.uri };
        // You can also display the image using data:
        const { fileName, type, uri, fileSize } = response;

        // `${utilities.BASE_URL}register`
        this.setState({ imageProfile: uri })
        // dispatch(TASKS.hideLoader());

      }
    });
  }
  render() {
    const { toogleOn, imageProfile } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContainer}>
              <Text style={Styles.homeText}>{'Oscarmmgg'}</Text>
              <View >
                <Text style={Styles.darkModeText}>{'Dark Mode:'}</Text>
                <ToggleSwitch
                  style={{ marginTop: 10 }}
                  isOn={toogleOn}
                  onColor="#62FF68"
                  offColor={Colors.White}
                  size='large'
                  onToggle={isOn => { this.setState({ toogleOn: isOn }) }}
                />
              </View>
            </View>
          </View>
          <ScrollView>
            <TouchableOpacity onPress={this.selectImage}>
              <ImageBackground source={imageProfile ? { uri: imageProfile } : Images.Profile}
                imageStyle={{ borderRadius: 110 }}
                style={Styles.profileStyle}>
                <View style={Styles.editIconContainer}>
                  <Image source={Images.edit} style={Styles.editIcon} />
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <View style={Styles.profileMain}>

              {/* Profile */}
              <View style={Styles.listWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.profileUser} style={Styles.userImage} />
                  <Text style={Styles.listText}>{'Profile '}</Text>
                </View>
                <Image source={Images.chevron} style={Styles.userImage} />
              </View>
              <View style={Styles.seperator} />

              {/* Setting */}
              <View style={Styles.listWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.settings} style={Styles.userImage} />
                  <Text style={Styles.listText}>{'Settings '}</Text>
                </View>
                <Image source={Images.chevron} style={Styles.userImage} />
              </View>
              <View style={Styles.seperator} />

              {/* Goals */}
              <View style={Styles.listWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.data} style={Styles.userImage} />
                  <Text style={Styles.listText}>{'Goals '}</Text>
                </View>
                <Image source={Images.chevron} style={Styles.userImage} />
              </View>
              <View style={Styles.seperator} />

              {/* Food */}
              <View style={Styles.listWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.food} style={Styles.userImage} />
                  <Text style={Styles.listText}>{'My  Foods, Recipes, Meals '}</Text>
                </View>
                <Image source={Images.chevron} style={Styles.userImage1} />
              </View>
              <View style={Styles.seperator} />


              {/* Remainder */}
              <View style={Styles.listWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.alarm} style={Styles.userImage} />
                  <Text style={Styles.listText}>{'Reminders '}</Text>
                </View>
                <Image source={Images.chevron} style={Styles.userImage} />
              </View>
              <View style={Styles.seperator} />


              <TouchableOpacity style={Styles.buttonContainer}
                onPress={() => { this.props.navigation.navigate('Login') }}
              >
                <Text style={Styles.buttonText}>{Constants.SIGNOUT}</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
          <BottomWrapper
            navigation={this.props.navigation}
            page={4}
          />
        </SafeAreaView>
      </>
    );
  }
}
export default Profile;