import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {GradientCircularProgress} from 'react-native-circular-gradient-progress';
import {user_context} from '../../../setup';
import Styles from '../../../Screens/Home/Styles';
import Colors from '../../../Styles/Colors';

const MacroScrollComponent = () => {
  const {macroData} = React.useContext(user_context);
  return (
    <>
      <Text style={Styles.inputTextStyle1}>{' Tracked Macros:'}</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: 16}}>
        <View style={Styles.headerContentWrapper}>
          <View style={Styles.headerContent}>
            {macroData.length > 0 &&
              macroData.map((value) => {
                return (
                  <>
                    <View style={Styles.showbackGroundContent}>
                      <Text
                        style={{
                          color: Colors.grey,
                          fontSize: 10,
                          marginBottom: 2,
                        }}>
                        {value.name}
                      </Text>
                      <View
                        style={[
                          Styles.macroProgressTextContainer,
                          {
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                          },
                        ]}>
                        <Text style={Styles.macroProgressText}>
                          {value.macroCurrent + ' '}
                        </Text>
                        <Text style={Styles.macroProgressText1}>
                          {' / '}
                          {value.macroGoal}
                          {'g'}
                        </Text>
                      </View>
                      <GradientCircularProgress
                        startColor={'#18acbb'}
                        middleColor={'#4abb0b'}
                        endColor={'#4abb0b'}
                        emptyColor={Colors.cancel}
                        size={50}
                        progress={Math.round(
                          (value.macroCurrent / value.macroGoal) * 100,
                        )}
                        stokeWidth={1}>
                        <Text style={Styles.totalTextMacro}>
                          {Math.round(
                            (value.macroCurrent / value.macroGoal) * 100,
                          )}
                          %
                        </Text>
                      </GradientCircularProgress>
                    </View>
                  </>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MacroScrollComponent;
