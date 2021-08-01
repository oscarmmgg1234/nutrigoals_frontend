import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../../../Screens/NutrionLog/Styles';
import Images from '../../../Styles/Images';
import EditMainModal from '../../EditModal/editMainModal';
import SearchModal from '../../SearchModal/searchModal';
import Icon from 'react-native-vector-icons/FontAwesome'
const LogHeader = () => {
  const [editModalVisible, SetModalV] = React.useState(false);
  const [searchModal, setSearchM] = React.useState(false);

  function setModalV() {
    SetModalV(false);
  }
  function setSearchModal() {
    setSearchM(false);
  }
  return (
    <>
      <View style={Styles.headerWrapper}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.homeText}>{'Nutrition Log'}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setSearchM(true)}>
              <Icon name={'search'} size={28} color={'white'} style={{marginRight: 10, marginTop: 5}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SetModalV(true)}>
              <Image source={Images.menu} style={Styles.sideImage1} />
            </TouchableOpacity>
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
          <EditMainModal toggleModal={setModalV} modal={editModalVisible} />
          <SearchModal toggleModal={setSearchModal} modal={searchModal} />
          <TouchableOpacity>
            <Image source={Images.arrow_right} style={Styles.sideImage1} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LogHeader;
