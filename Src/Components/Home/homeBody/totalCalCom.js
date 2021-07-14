import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {GradientCircularProgress} from 'react-native-circular-gradient-progress';
import {user_context} from '../../../setup';
import Styles from '../../../Screens/Home/Styles';
import Colors from '../../../Styles/Colors';

class CaloriesView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<>
        
            <Text style={Styles.inputTextStyle1}>{' Calories:'}</Text>
            
                <user_context.Consumer>
                {({macroData})=>(
                  <View style={Styles.showProgressSingle}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-around',
                        marginTop: 20,
                      }}>
                      <View>
                        <Text style={Styles.firstText}>{'Recieved'}</Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text style={Styles.firstText1}>
                            {macroData[0].macroCurrent * 4 +
                              macroData[1].macroCurrent * 9 +
                              macroData[2].macroCurrent * 4}
                          </Text>
                          <Text
                            style={[
                              Styles.firstText,
                              {marginLeft: 7, marginTop: 3},
                            ]}>
                            {'/ '}
                            {macroData[0].macroGoal * 4 +
                              macroData[1].macroGoal * 9 +
                              macroData[2].macroGoal * 4}
                            {' Kcal'}
                          </Text>
                        </View>

                        <Text style={[Styles.firstText, {marginTop: 20}]}>
                          {'Left'}
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text style={Styles.firstText1}>
                            {Math.round(
                              macroData[0].macroGoal * 4 +
                                macroData[1].macroGoal * 9 +
                                macroData[2].macroGoal * 4 -
                                (macroData[0].macroCurrent * 4 +
                                  macroData[1].macroCurrent * 9 +
                                  macroData[2].macroCurrent * 4),
                            )}
                          </Text>
                          <Text
                            style={[
                              Styles.firstText,
                              {marginLeft: 7, marginTop: 3},
                            ]}>
                            {'Kcal'}
                          </Text>
                        </View>
                      </View>

                      <GradientCircularProgress
                        startColor={'#18acbb'}
                        middleColor={'#4abb0b'}
                        endColor={'#4abb0b'}
                        emptyColor={Colors.cancel}
                        size={100}
                        progress={Math.round(
                          ((macroData[0].macroCurrent * 4 +
                            macroData[1].macroCurrent * 9 +
                            macroData[2].macroCurrent * 4) /
                            (macroData[0].macroGoal * 4 +
                              macroData[1].macroGoal * 9 +
                              macroData[2].macroGoal * 4)) *
                            100,
                        )}
                        stokeWidth={1}>
                        <Text style={Styles.totalText}>{'Total'}</Text>
                        <Text style={Styles.totalText1}>
                          {macroData[0].macroGoal * 4 +
                            macroData[1].macroGoal * 9 +
                            macroData[2].macroGoal * 4}
                        </Text>
                        <Text style={Styles.totalText2}>{'Kcal'}</Text>
                      </GradientCircularProgress>
                    </View>
                  </View>
                )}
                </user_context.Consumer>
                </>
        )
    }
}

export default CaloriesView;