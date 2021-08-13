import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../../../Screens/NutrionLog/Styles';
import Images from '../../../Styles/Images';
import EditMainModal from '../../EditModal/editMainModal';
import SearchModal from '../../SearchModal/searchModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { user_context } from '../../../setup';
import { useState } from 'react/cjs/react.development';
import CalendarComponent from '../../Home/HomeHeader/dateComponent';

const LogHeader = () => {



  const [editModalVisible, SetModalV] = React.useState(false);
  const [searchModalV, setSearchM] = React.useState(false);
  const {date, DisplayDate, decrementDate, incrementDate, editDate} = React.useContext(user_context);
  const [calendarModalVisible, setCalendarModalV] = useState(false);
  const [visi, setVisib] = React.useState(false);
  const [searchItem, setSearchIn] = React.useState('');
  const [data, setDatad] = React.useState([]);
  React.useEffect(()=>{setData([]);setSearchI('');},[searchModalV])
function removeSearcModal(){
  setSearchM(false);
}
  function setVisi(){
    setVisib(true);
  }
  function setSearchI(value){
    setSearchIn(value)
  }
  function setModalV(){
    setModalVisible(true);
  }
  function setData(value){
    setDatad(value)
  }
  function closeCModal(){
    setCalendarModalV(false)
  }
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
        <CalendarComponent visibility={calendarModalVisible} removeVis={closeCModal}  editDate={editDate} date={date}/>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={()=>decrementDate()}>
            <Image source={Images.arrow_left} style={Styles.sideImage} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: -10}}>
            <TouchableOpacity onPress={()=>setCalendarModalV(true)} style={{flexDirection: 'row'}}>
              <Icon name={'calendar'} size={31} color={'white'} style={{marginRight: 10, marginTop: 8}}/>
            
            <Text style={Styles.calenderText}>{DisplayDate}</Text>
            </TouchableOpacity >
          </View>
          <EditMainModal toggleModal={setModalV} modal={editModalVisible} />
          <SearchModal
                  toggleModal={removeSearcModal}
                  modal={searchModalV}
                  visi={visi}
                  data={data}
                  setVisi={setVisi}
                  setData={setData}
                  searchItem={searchItem}
                  setSearchI={setSearchI}
                />
          <TouchableOpacity onPress={()=>incrementDate()}>
            <Image source={Images.arrow_right} style={Styles.sideImage1} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LogHeader;
