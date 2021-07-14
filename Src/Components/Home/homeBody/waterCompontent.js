import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import Styles from '../../../Screens/Home/Styles';
import Colors from '../../../Styles/Colors';
import { user_context } from '../../../setup';
import Images from '../../../Styles/Images';

const WaterProgress = () =>{
    const {waterGoals, increaseWaterLevel, decrementWaterLevelView} = React.useContext(user_context);
return(
       <>
    <Text style={Styles.inputTextStyle1}>{' Water:'}</Text>
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
                {waterGoals.waterCurrent}
              </Text>
              <Text
                style={[
                  Styles.firstText,
                  {marginLeft: 7, marginTop: 3},
                ]}>
                {'/ '}{waterGoals.waterGoal} {' Cups'}
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Image
                source={Images.clock}
                style={{width: 20, height: 20}}
              />
              <Text style={[Styles.firstText, {marginLeft: 7}]}>
                {'Last Drunk 9:34 AM'}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginRight: -50}}>
            <View>
              <TouchableOpacity
                style={Styles.buttonIncrement}
                onPress={() => {this.incrementWaterLevelView}}>
                <Text
                  style={{
                    color: Colors.White,
                    fontWeight: '600',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  {'+'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>{this.decrementWaterLevelView}}
                style={[
                  Styles.buttonIncrement,
                  {
                    marginTop: 45,
                  },
                ]}>
                <Text
                  style={{
                    color: Colors.White,
                    fontWeight: '600',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  {'-'}
                </Text>
              </TouchableOpacity>
            </View>
            
                  
            <Progress.Bar
              progress={1/7} 
              style={{
                transform: [{rotate: '-90deg'}],
                height: 40,
                marginTop: 38,
                width: 120,
              }}
              indeterminateAnimationDuration={700}
              animationConfig={{bounciness: 30}}
              animationType={'spring'}
              borderColor={
                waterGoals.waterCurrent === 15
                  ? '#62FF68'
                  : '#18acbb'
              }
              borderWidth={waterGoals.waterCurrent=== 15 ? 5 : 1}
              height={40}
              color={'#18acbb'}
              borderRadius={25}
            />
          </View>
        </View>
      </View>
      </>
)
}

export default WaterProgress;