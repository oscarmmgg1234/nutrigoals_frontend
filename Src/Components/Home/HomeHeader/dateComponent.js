import React from 'react';
import {View, Modal, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Colors from '../../../Styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const CalendarComponent = (props) => {
    const months = React.useRef(['Months','January','February','March','May','June','July','August','September', 'November', 'December']);
    
    
    function dateFormat(arg){
        const day = arg.day;
        const month = months.current[arg.month];
        const year = arg.year;
        
        props.editDate(`${month} ${day}, ${year}`)
        

    }
    

    return(
        <Modal transparent={true} visible={props.visibility} animationType={'slide'}>

            <TouchableOpacity onPress={()=>props.removeVis()}>
            <View style={{height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center'}}>
                <TouchableWithoutFeedback>
            <View style={{width: 300, height: 335,alignSelf: 'center', marginBottom: 50, backgroundColor: 'white', borderRadius:20, justifyContent: 'flex-end'}}>
             
            <CalendarList horizontal={true} style={{width: 300, height: 300, borderRadius: 20,}} calendarWidth={300} calendarHeight={300}
            pagingEnabled={true} current={new Date()} onDayPress={(day)=>dateFormat(day)}/>
               <TouchableOpacity style={{alignSelf: 'center', marginTop: 7}} onPress={()=>props.removeVis()}><Icon name={'angle-double-down'} size={26} color={'rgba(0,0,0,0.8)'}/></TouchableOpacity>
        </View></TouchableWithoutFeedback>
        
            </View>
            </TouchableOpacity>
            
        </Modal>
    )
}

export default CalendarComponent;