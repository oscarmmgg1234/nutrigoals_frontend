import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../Styles/Colors';
import Styles from '../../../Screens/Home/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import ScrollPicker from 'react-native-wheely-simple-picker';
import { water_context } from '../../../setup';

const WaterModal = (props) => {

    const data = React.useRef([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    const {setWaterGoal} = React.useContext(water_context);
    const waterGoal = React.useRef(15);

return (<Modal visible={props.visibility} animationType={'fade'} transparent={true}>
 <View style={Styles.MacroModalContainer}>
        <View style={Styles.modalHeader}>
          <View style={Styles.ModalHeaderView}>
            <Text style={Styles.homeText}>{'Water'}</Text>

            <TouchableOpacity onPress={() => props.setModalV(1)}>
              <Icon
                name={'close'}
                color={'white'}
                size={35}
                style={{marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{marginTop: 20, fontSize: 20, color:'white', fontWeight: 'bold',alignSelf: 'center'}}>{'Enter water goal manually'}</Text>
        <View style={{alignSelf: 'center', height: 1, width: '80%', backgroundColor: 'rgba(255,255,255,0.5)', marginVertical: 20}}/>
            <Text style={{alignSelf: 'center', fontSize: 15, color: 'white', marginVertical: 15}}>Water Goal: </Text>
            <View style={{height: 180, width: '100%'}}>
        <ScrollPicker 
             dataSource={data.current}
           selectedIndex={15}
           renderItem={(data, index, isSelected) => {
               //
           }}
           onValueChange={(data, selectedIndex) => {
               waterGoal.current = data;
           }}
           wrapperHeight={180}
           wrapperWidth={'100%'}
           wrapperBackground="#FFFFFF"
           itemHeight={60}
           highlightColor="#d8d8d8"
           highlightBorderWidth={2}
           activeItemColor="#222121"
           itemColor="#222121" />
           </View>
           
           <TouchableOpacity style={{alignSelf: 'center', marginBottom: 40, marginTop: 20}} onPress={()=>{setWaterGoal(waterGoal.current); props.setModalV(1);}}>
           <View style={{height: 52, width: 160, backgroundColor: Colors.buttonColor, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 25}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Change Goals</Text>
          </View>
           </TouchableOpacity>
           </View>
        

</Modal>)
}
export default WaterModal;
