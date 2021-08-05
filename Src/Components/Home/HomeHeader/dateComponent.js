import React from 'react';
import {View, Modal, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const CalendarComponent = (props) => {
    
    function dateFormat(arg){
        props.editDate(arg)
        

    }
    

    return(
        <Modal transparent={true} visible={props.visibility} animationType={'slide'}>

            <TouchableOpacity onPress={()=>props.removeVis()}>
            <View style={{height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center',}}>
                <TouchableWithoutFeedback>
            <View style={{width: 300, height: 345,alignSelf: 'center', marginBottom: 50, backgroundColor: 'white', borderRadius:20, justifyContent: 'flex-end'}}>
             
            <CalendarList horizontal={true} style={{width: 300, height: 300, borderRadius: 20,}} calendarWidth={300} calendarHeight={300}
            pagingEnabled={true} onDayPress={(day)=>dateFormat(day)} markingType={'period'} markedDates={{'2021-08-05': {selected: true, color: 'red'}}} />
            <View style={{height: 1, width: '87%',backgroundColor: 'rgba(0,0,0,0.3)', alignSelf: 'center', marginTop: 15}}/>
               <TouchableOpacity style={{alignSelf: 'center', marginTop: 15}} onPress={()=>props.removeVis()}><Icon name={'angle-double-down'} size={26} color={'rgba(0,0,0,0.8)'}/></TouchableOpacity>
        </View></TouchableWithoutFeedback>
        
            </View>
            </TouchableOpacity>
            
        </Modal>
    )
}

export default CalendarComponent;