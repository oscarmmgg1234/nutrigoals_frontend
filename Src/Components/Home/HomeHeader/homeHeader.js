import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Styles from '../../../Screens/Home/Styles';
import Images from '../../../Styles/Images';
import {app_context} from '../../../setup';
import EditMainModal from '../../EditModal/editMainModal';
import SearchModal from '../../SearchModal/searchModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarComponent from './dateComponent';
import moment from 'moment';
import {user_context} from '../../../setup';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      searchModalVisible: false,
      calendarModalVisible: false,
      displayDate: '',
      date: '',
      dateIndex: 0,
    };
  }
  
  removeCalendarModalView = () => {
    this.setState({calendarModalVisible: false})
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
                  source={
                    imagePath
                      ? {uri: imagePath}
                      : Images.Profile
                  }
                  style={[Styles.profileStyle, {borderColor: 'rgba(20,20,30,0.6)', borderWidth: 4}]}
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
            <user_context.Consumer>
              {user_context=>(<>
        <CalendarComponent visibility={this.state.calendarModalVisible} removeVis={this.removeCalendarModalView}  editDate={user_context.editDate} date={user_context.date}/>
            <View style={Styles.headerContainer}>
              <TouchableOpacity onPress={()=>user_context.decrementDate()}>
                <Image source={Images.arrow_left} style={Styles.sideImage} />
              </TouchableOpacity>
              <View style={{ marginLeft: -10}}>
                <TouchableOpacity onPress={()=>this.setState({calendarModalVisible: true})} style={{flexDirection: 'row'}}>
                  <Icon
                    name={'calendar'}
                    size={31}
                    color={'white'}
                    style={{marginRight: 10, marginTop: 8}}
                  />
                
                <Text style={Styles.calenderText}>{user_context.DisplayDate}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>user_context.incrementDate()}>
                <Image source={Images.arrow_right} style={Styles.sideImage1} />
              </TouchableOpacity>
            </View></>)}
            </user_context.Consumer>
          </View>
        )}
      </app_context.Consumer>
    );
  }
}

export default HomeHeader;
