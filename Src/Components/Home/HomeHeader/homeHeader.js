import React, {Component, useState} from 'react';
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


class HomeHeader extends Component{
 
  
  constructor(props){
    super(props);
    this.state = {visi: false,
    data: [],
    searchItem: '',
    modalVisible: false,
    searchModalV: false,
    calendarModalVisible: false,
    }
  }

componentDidUpdate(prevProps, prevState){
  if(prevState.searchModalV != this.state.searchModalV && this.state.searchModalV != ''){
    this.setData([]);
    this.setSearchI('');

  }
}

  setVisi = (prevState) => {
    this.setState({visi: prevState})
  }
  setData = (value) =>{
    this.setState({data: value})
  }
  setSearchI = (value) => {
    this.setState({searchItem: value})
  }
  removeCalendarModalView = () => {
    this.setState({calendarModalVisible: false});
  }

  removeSearcModal = () => {
    this.setState({searchModalV: false});
  };
    
  removeModalView = () => {
    this.setState({modalVisible: false});
  };
  
  

  render(){
    return (
        <user_context.Consumer>
          {user_context=>(
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContainer}>
              <app_context.Consumer>
                {app_context=>(
              <TouchableOpacity onPress={app_context.selectImage}>
                <Image
                  source={
                    app_context.User.profile_image !== null
                      ? {uri: app_context.User.profile_image}
                      : Images.Profile
                  }
                  style={[Styles.profileStyle, {borderColor: 'rgba(20,20,30,0.6)', borderWidth: 4}]}
                />
               
              </TouchableOpacity>
                )}
               </app_context.Consumer>
              
              <Text style={Styles.homeText}>{'Home'}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.setState({searchModalV: true})}>
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
                  modal={this.state.searchModalV}
                  visi={this.state.visi}
                  data={this.state.data}
                  setVisi={this.setVisi}
                  setData={this.setData}
                  searchItem={this.state.searchItem}
                  setSearchI={this.setSearchI}
                />
              </View>
            </View>
            
        <CalendarComponent visibility={this.state.calendarModalVisible} removeVis={this.removeCalendarModalView}  editDate={user_context.editDate} date={this.state.date} 
        markedDate={user_context.markedDate} setMarkedDate={user_context.setMarkedDate}/>
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
            </View>
          </View>
          )}
          </user_context.Consumer>
        
    );
  }
}


export default HomeHeader;
