import React from 'react';
import { ScrollView,View, Text, TouchableOpacity,Dimensions, ImageBackground } from 'react-native';
import Styles from './Style';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants/index';


class CalcHomeScroll extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
            data: [{title: "BMR", imagePath: require('../../../assests/bmr.jpg'), description: Constants.BMRdescripton }
            ,{title: "TDEE", imagePath: require('../../../assests/bmi.jpg'), description: Constants.TDEEdescription }, {title: "Macro", imagePath: require('../../../assests/bmr.jpg'), description: Constants.MACROdescription }
            , {title: "Body Fat", imagePath: require('../../../assests/bmi.jpg'), description: Constants.BodyFdescription }, {title: "BMI", imagePath: require('../../../assests/bmr.jpg'), description: Constants.BMIdescription }],
            activeIndex: 0
            
        }
    }

    runIndex = (index) =>{
        switch (index) {
            case 0: {
                this.props.runModal(0);
                break;
            }
            case 1: {
                this.props.runModal(1);
                break;
            }
            case 2: {
                this.props.runModal(2);
                break;
            }
            case 3: {
                this.props.runModal(3);
                break;
            }
            case 4: {
                this.props.runModal(4);
                break;
            }
        }
    }
    
    setActiveIndex = (value) =>{
        this.setState({activeIndex: value})
    }

    _renderItem = ({item, index}) => {
        
        return (<TouchableOpacity onPress={()=>this.runIndex(index)}>
            
            <View style={{width: '100%', height: '97%', backgroundColor: 'rgba(100,100,150,1)', marginTop: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground style={{width: '100%', height: '100%'}} borderRadius={20} source={item.imagePath}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%', borderRadius: 20}}>
                    <View style={{width: '100%', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 80, justifyContent: 'center'}} >
                <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold',}}>{ item.title }</Text>
                </View>
                <View style={{flexDirection: 'column', width: '100%', alignItems: 'center', height: '50%', backgroundColor:  'rgba(0,0,0,0.8)',
            borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                    <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold',marginTop: 5}}>{'Description: '}</Text>
                    <Text style={{color: 'white', fontSize: 14, marginTop: 5}}>{item.description}</Text>
                </View>
                </View>
                </ImageBackground>
            </View></TouchableOpacity>
        );
    }

    render () {
        
        return (<>
            <View style={{alignSelf: 'center', height: Dimensions.get('window').height / 1.37, borderRadius: 20, marginTop: 17}}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.data}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('window').width / 1.1}
              itemWidth={Dimensions.get('window').width / 1.3 }
              backgroundColor={Colors.backgroundColor}
              borderRadius={20}
              onSnapToItem={index=>{this.setActiveIndex(index)}}
            />
            </View>
            <Pagination
            dotsLength={this.state.data.length}
            activeDotIndex={this.state.activeIndex}
            containerStyle={{ backgroundColor: Colors.texInputBackground }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          </>
        );
    }
}
export default CalcHomeScroll;
