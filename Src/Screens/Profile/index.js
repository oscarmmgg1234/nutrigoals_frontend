import React, {Component} from 'react';

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
import Styles from './Styles';
import * as Constants from '../../Constants';
import Images from '../../Styles/Images';
import {app_context} from '../../setup';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalcHomeComponent from '../../Components/EditModal/calculatorModal/calculatorHome';
import EditMainModal from '../../Components/EditModal/editMainModal';
import ProfileSettings from '../../Components/EditModal/profileSettingsModal/profileSettings';
import { remove_with_multikeys, save_bool_data } from '../../Utilities/local_storage';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_calc_v: false,
      modal_edit_v: false,
      modal_profile_v: false,
    };
  }

  static contextType = app_context;
  mountModal = (index) => {
    switch (index) {
      case 0: {
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
  };

  unmountModal = (index) => {
    switch (index) {
      case 0: {
        this.setState({modal_calc_v: false});
        break;
      }
      case 1: {
        this.setState({modal_edit_v: false});
        break;
      }
      case 2: {
        this.setState({modal_profile_v: false});
        break;
      }
    }
  };

  asyncTask = async () => {
    await save_bool_data(Constants.navigation_key, false);
    await remove_with_multikeys([Constants.user_water_goals_key, Constants.user_account_key, Constants.user_macro_goals_key, Constants.user_soi_goals_key])
  }

  signOuty = () => {
    this.asyncTask();
  };

  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} hidden={false} />
        <CalcHomeComponent
          visibility={this.state.modal_calc_v}
          toggleModal={() => this.unmountModal(0)}
        />
        <EditMainModal
          modal={this.state.modal_edit_v}
          toggleModal={() => this.unmountModal(1)}
        />
        <ProfileSettings
          modal={this.state.modal_profile_v}
          toggleModal={() => this.unmountModal(2)}
        />
        <SafeAreaView style={Styles.safeViewStyle1} />
        <app_context.Consumer>
          {({User, selectImage, toggleInitialStack}) => (
            <SafeAreaView style={Styles.safeViewStyle}>
              <View style={Styles.headerWrapper}>
                <View style={Styles.headerContainer}>
                  <Text style={Styles.homeText}>Account</Text>
                  <Text style={Styles.usernameText}>
                    {'acc-user: ' + User.username}
                  </Text>
                </View>
              </View>
              <ScrollView>
                <TouchableOpacity onPress={selectImage}>
                  <ImageBackground
                    source={
                      User.profile_image !== null
                        ? {uri: User.profile_image}
                        : Images.Profile
                    }
                    imageStyle={{borderRadius: 110}}
                    style={Styles.profileStyle}>
                    <View style={Styles.editIconContainer}>
                      <Image source={Images.edit} style={Styles.editIcon} />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={Styles.profileMain}>
                  {/* Profile */}
                  <TouchableOpacity onPress={() => this.mountModal(2)}>
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
                  <TouchableOpacity onPress={() => this.mountModal(1)}>
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
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.mountModal(0)}>
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
                      toggleInitialStack(false);
                      this.signOuty();
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
