import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../../../Screens/NutrionLog/Styles';
import Images from '../../../Styles/Images';

const LogHeader = () => {
  return (
    <>
      <View style={Styles.headerWrapper}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.homeText}>{'Nutrition Log'}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image source={Images.search} style={Styles.sideImage} />
            </TouchableOpacity>
            <TouchableOpacity>
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
              <Image source={Images.calendar} style={Styles.sideImage} />
            </TouchableOpacity>
            <Text style={Styles.calenderText}>{' May 23, 2021'}</Text>
          </View>
          <TouchableOpacity>
            <Image source={Images.arrow_right} style={Styles.sideImage1} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LogHeader;
