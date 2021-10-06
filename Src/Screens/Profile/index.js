import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Styles from './Styles';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import {app_context} from '../../setup';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalcHomeComponent from '../../Components/EditModal/calculatorModal/calculatorHome';
import EditMainModal from '../../Components/EditModal/editMainModal';
import ProfileSettings from '../../Components/EditModal/profileSettingsModal/profileSettings';

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      toogleOn: true,
      imageProfile: '',
      modal_calc_v: false,
      modal_edit_v: false,
      modal_profile_v: false,
    };
  }

  mountModal = (index) => {
    switch(index){
      case 0:{
        this.setState({modal_calc_v: true});
        break;
      }
      case 1: {
        this.setState({modal_edit_v: true});
        break;
      }
      case 2: {
        this.setState({modal_profile_v: true});
        break;
      }


    }
    }

   
    unmountModal = (index) =>{
      switch(index){
        case 0:{
          this.setState({modal_calc_v: false});
          break;
        }
        case 1: {
          this.setState({modal_edit_v: false})
          break;
        }
        case 2: {
          this.setState({modal_profile_v: false})
          console.log('pressed button')
          break;
        }
      }
    }

  signOuty = async () => {
    await AsyncStorage.setItem('@authStatus', '0').then(() => {
      this.props.navigation.navigate('Login');
    });
  };

  selectImage = () => {
    const options = {
      quality: 0.1,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
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
        const {fileName, type, uri, fileSize} = response;

        // `${utilities.BASE_URL}register`
        this.setState({imageProfile: uri});
        // dispatch(TASKS.hideLoader());
      }
    });
  };
  render() {
    const {toogleOn, imageProfile} = this.state;
    return (
      <>
        <StatusBar barStyle={'light-content'} hidden={false} />
        <CalcHomeComponent visibility={this.state.modal_calc_v} toggleModal={()=>this.unmountModal(0)}/>
        <EditMainModal modal={this.state.modal_edit_v} toggleModal={()=>this.unmountModal(1)}/>
        <ProfileSettings modal={this.state.modal_profile_v} toggleModal={()=>this.unmountModal(2)}/>
        <SafeAreaView style={Styles.safeViewStyle1} />
        <app_context.Consumer>
          {({User, imagePath, selectImage}) => (
            <SafeAreaView style={Styles.safeViewStyle}>
              <View style={Styles.headerWrapper}>
                <View style={Styles.headerContainer}>
                  <Text style={Styles.homeText}>{User.username}</Text>
                </View>
              </View>
              <ScrollView>
                <TouchableOpacity onPress={selectImage}>
                  <ImageBackground
                    source={imagePath ? {uri: imagePath} : Images.Profile}
                    imageStyle={{borderRadius: 110}}
                    style={Styles.profileStyle}>
                    <View style={Styles.editIconContainer}>
                      <Image source={Images.edit} style={Styles.editIcon} />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={Styles.profileMain}>
                  {/* Profile */}
                <TouchableOpacity onPress={()=>this.mountModal(2)}>
                  <View style={Styles.listWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name={'user-o'} color={'white'} size={30} />
                      <Text style={Styles.listText}>{'Profile '}</Text>
                    </View>
                    <Image source={Images.chevron} style={Styles.userImage} />
                  </View>
                <View style={Styles.seperator} />
                </TouchableOpacity>
                  {/* Setting */}
                  <TouchableOpacity onPress={()=>this.mountModal(1)}>
                  <View style={Styles.listWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name={'cog'} color={'white'} size={30} />
                      <Text style={Styles.listText}>{'Settings '}</Text>
                    </View>
                    <Image source={Images.chevron} style={Styles.userImage} />
                  </View>
                  <View style={Styles.seperator} />
                  </TouchableOpacity>
                  {/* Goals */}
                  <View style={Styles.listWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name={'line-chart'} color={'white'} size={30} />
                      <Text style={Styles.listText}>{'Goals '}</Text>
                    </View>
                    <Image source={Images.chevron} style={Styles.userImage} />
                  </View>
                  <View style={Styles.seperator} />

                  {/* Food */}
                  <TouchableOpacity>
                    <View style={Styles.listWrapper}>
                      <View style={{flexDirection: 'row'}}>
                        <Icon name={'cutlery'} color={'white'} size={30} />
                        <Text style={Styles.listText}>
                          {'My  Foods, Recipes, Meals '}
                        </Text>
                      </View>
                      <Image
                        source={Images.chevron}
                        style={Styles.userImage1}
                      />
                    </View>
                    <View style={Styles.seperator} />
                  </TouchableOpacity >
                  <TouchableOpacity onPress={()=>this.mountModal(0)}>
                  <View style={Styles.listWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name={'calculator'} color={'white'} size={30} />
                      <Text style={Styles.listText}>{'Calculators '}</Text>
                    </View>
                    <Image source={Images.chevron} style={Styles.userImage} />
                  </View>
                  
                  <View style={Styles.seperator} />
                  </TouchableOpacity>
                
                  {/* Remainder */}
                  <View style={Styles.listWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name={'bell-o'} color={'white'} size={30} />
                      <Text style={Styles.listText}>{'Reminders '}</Text>
                    </View>
                    <Image source={Images.chevron} style={Styles.userImage} />
                  </View>
                  <View style={Styles.seperator} />

                  <View style={Styles.listWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name={'magic'} color={'white'} size={30} />
                      <Text style={Styles.listText}>{'Apperance '}</Text>
                    </View>
                    <Image source={Images.chevron} style={Styles.userImage} />
                  </View>
                  <View style={Styles.seperator} />

                  <TouchableOpacity
                    style={Styles.buttonContainer}
                    onPress={() => {
                      this.signOuty();
                      this.props.navigation.navigate('Login');
                    }}>
                    <Text style={Styles.buttonText}>{Constants.SIGNOUT}</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </SafeAreaView>
          )}
        </app_context.Consumer>
      </>
    );
  }
}
export default Profile;
