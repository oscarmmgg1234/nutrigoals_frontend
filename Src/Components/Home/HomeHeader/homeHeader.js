import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Styles from '../../../Screens/Home/Styles';
import Images from '../../../Styles/Images';
import {app_context} from '../../../setup';
import EditMainModal from '../../EditModal/editMainModal';
import SearchModal from '../../SearchModal/searchModal';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      searchModalVisible: false,
    };
  }

  removeSearcModal = () => {
    this.setState({searchModalVisible: false});
  };
  removeModalView = () => {
    this.setState({modalVisible: false});
  };

  render() {
    return (
      <app_context.Consumer>
        {({imagePath, selectImage}) => (
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContainer}>
              <TouchableOpacity onPress={selectImage}>
                <Image
                  source={imagePath ? {uri: imagePath} : Images.Profile}
                  style={Styles.profileStyle}
                />
              </TouchableOpacity>
              <Text style={Styles.homeText}>{'Home'}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.setState({searchModalVisible: true})}>
                  <Icon
                    name={'search'}
                    size={28}
                    color={'white'}
                    style={{marginRight: 10, marginTop: 5}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: true})}>
                  <Image source={Images.menu} style={Styles.sideImage1} />
                </TouchableOpacity>
                <EditMainModal
                  toggleModal={this.removeModalView}
                  modal={this.state.modalVisible}
                />
                <SearchModal
                  toggleModal={this.removeSearcModal}
                  modal={this.state.searchModalVisible}
                />
              </View>
            </View>

            <View style={Styles.headerContainer}>
              <TouchableOpacity>
                <Image source={Images.arrow_left} style={Styles.sideImage} />
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: -10}}>
                <TouchableOpacity>
                  <Icon name={'calendar'} size={28} color={'white'} style={{marginRight: 10, marginTop: 8}}/>
                </TouchableOpacity>
                <Text style={Styles.calenderText}>{' May 23, 2021'}</Text>
              </View>
              <TouchableOpacity>
                <Image source={Images.arrow_right} style={Styles.sideImage1} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </app_context.Consumer>
    );
  }
}

export default HomeHeader;
