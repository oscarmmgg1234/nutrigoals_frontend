import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Styles from '../../../Screens/Home/Styles';
import Images from '../../../Styles/Images';
import {app_context} from '../../../setup';
import EditMainModal from '../../EditModal/editMainModal';
import SearchModal from '../../SearchModal/searchModal';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      searchModalVisible: false,
    };
  }

  removeSearcModal = () => {
    this.setState({searchModalVisible: false})
  }
  removeModalView = () => {
    this.setState({modalVisible: false})
      
  }
 
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
                <TouchableOpacity onPress={()=>this.setState({searchModalVisible: true})}>
                  <Image source={Images.search} style={Styles.sideImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: true})}>
                  <Image source={Images.menu} style={Styles.sideImage1} />
                </TouchableOpacity>
                <EditMainModal toggleModal={this.removeModalView} modal={this.state.modalVisible} />
                <SearchModal toggleModal={this.removeSearcModal} modal={this.state.searchModalVisible}/>
              </View>
            </View>

            <View style={Styles.headerContainer}>
              <TouchableOpacity>
                <Image source={Images.arrow_left} style={Styles.sideImage} />
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: -10}}>
                <TouchableOpacity>
                  <Image source={Images.calendar} style={Styles.sideImage} />
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
