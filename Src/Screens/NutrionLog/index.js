import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Styles from './Styles';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import BottomWrapper from '../../Components/BottomNavigator';
import {GradientCircularProgress} from 'react-native-circular-gradient-progress';
import * as Progress from 'react-native-progress';

class NutrionLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageProfile: '',
      storyData: [
        {
          name: 'Toast',
        },
        {
          name: 'Egg',
        },
        {
          name: 'add',
        },
      ],
      quantity: '',
      calory: '',
    };
  }
  showBreakfast = (value, index) => {
    const {imageProfile, storyData, quantity, calory} = this.state;
    return (
      <>
        {value.name != 'add' ? (
          <View style={Styles.showbackGroundContent1}>
            <View style={Styles.boxHeader}>
              <Image source={Images.delete} style={{width: 20, height: 20}} />
              <Text
                style={{color: Colors.White, fontSize: 18, fontWeight: '500'}}>
                {value.name}
              </Text>
              <Text>{''}</Text>
            </View>

            <View style={Styles.quantityWrapper}>
              <Text
                style={{color: Colors.White, fontSize: 18, fontWeight: '500'}}>
                {'Qty: '}
              </Text>
              <TextInput
                style={Styles.InputStyles}
                placeholder={'1'}
                placeholderTextColor={Colors.White}
                value={quantity}
                onChangeText={(value) => {
                  this.setState({quantity: value});
                }}
              />
              <Text
                style={{
                  color: Colors.White,
                  fontSize: 18,
                  fontWeight: '500',

                  marginLeft: 5,
                }}>
                {'Of'}
              </Text>
              <TextInput
                style={Styles.InputStyles1}
                placeholder={'1 cup(60ml)'}
                placeholderTextColor={Colors.White}
                value={calory}
                onChangeText={(value) => {
                  this.setState({calory: value});
                }}
              />
            </View>
            <Text
              style={{
                color: Colors.White,
                fontSize: 18,
                fontWeight: '500',
                marginTop: 20,
              }}>
              {'Calories/kcal : 200'}
            </Text>
            <Text
              style={{
                color: Colors.White,
                fontSize: 18,
                fontWeight: '500',
                marginTop: 7,
              }}>
              {'Carbs/g : 20'}
            </Text>
            <Text
              style={{
                color: Colors.White,
                fontSize: 18,
                fontWeight: '500',
                marginTop: 7,
              }}>
              {'Fat/g : 2'}
            </Text>
            <Text
              style={{
                color: Colors.White,
                fontSize: 18,
                fontWeight: '500',
                marginTop: 7,
              }}>
              {'Protein/g : 4'}
            </Text>
            <Text
              style={{
                color: Colors.White,
                fontSize: 18,
                fontWeight: '500',
                marginTop: 7,
              }}>
              {'Sodium/mg : 800'}
            </Text>
            <Text
              style={{
                color: Colors.White,
                fontSize: 18,
                fontWeight: '500',
                marginTop: 7,
              }}>
              {'Sugar/g : 10'}
            </Text>
          </View>
        ) : (
          <TouchableOpacity>
            <View style={Styles.showbackGroundContent}>
              <Text
                style={{fontSize: 17, fontWeight: '500', color: Colors.White}}>
                {'Add Food Element'}
              </Text>
              <Image
                source={Images.plus}
                style={{width: 35, height: 30, marginTop: 15}}
              />

              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                  color: Colors.White,
                  marginTop: 25,
                }}>
                {'Or scan it'}
              </Text>
              <Image
                source={Images.doc}
                style={{width: 35, height: 30, marginTop: 10}}
              />
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  render() {
    const {imageProfile, storyData, quantity, calory} = this.state;
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
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
            {/* Calender */}
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
          <ScrollView>
            <View
              style={{
                marginTop: 10,
                marginBottom: 20,
              }}>
              <Text style={Styles.inputTextStyle1}>{' Calories:'}</Text>
              {/* showProgressSingle */}
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
                      <Text style={Styles.firstText1}>{'1645'}</Text>
                      <Text
                        style={[
                          Styles.firstText,
                          {marginLeft: 7, marginTop: 3},
                        ]}>
                        {'/ 2030 Kcal'}
                      </Text>
                    </View>

                    <Text style={[Styles.firstText, {marginTop: 20}]}>
                      {'Spent'}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Text style={Styles.firstText1}>{'105'}</Text>
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
                    progress={60}>
                    <Text style={Styles.totalText}>{'Total'}</Text>
                    <Text style={Styles.totalText1}>{'1540'}</Text>
                    <Text style={Styles.totalText2}>{'Kcal'}</Text>
                  </GradientCircularProgress>
                </View>
              </View>

              {/* Breakfast */}

              <Text style={Styles.inputTextStyle1}>{'Breakfast:'}</Text>
              <View style={Styles.headerContentWrapper}>
                <View style={Styles.headerContent}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={storyData}
                    renderItem={({item}) => this.showBreakfast(item)}
                  />
                </View>
              </View>

              {/* Dinner:  */}
              <Text style={Styles.inputTextStyle1}>{'Dinner:'}</Text>

              <View style={Styles.headerContentWrapper}>
                <View style={Styles.headerContent}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={storyData}
                    renderItem={({item}) => this.showBreakfast(item)}
                  />
                </View>
              </View>

              {/* Snacks */}
              <Text style={Styles.inputTextStyle1}>{'Snacks:'}</Text>

              <View style={Styles.headerContentWrapper}>
                <View style={Styles.headerContent}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={storyData}
                    renderItem={({item}) => this.showBreakfast(item)}
                  />
                </View>
              </View>

              <Text style={Styles.inputTextStyle1}>{' Water:'}</Text>
              {/* showProgressSingle */}
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
                      <Text style={Styles.firstText1}>{'1,6'}</Text>
                      <Text
                        style={[
                          Styles.firstText,
                          {marginLeft: 7, marginTop: 3},
                        ]}>
                        {'/ 2,2 L'}
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
                      <TouchableOpacity style={Styles.buttonIncrement}>
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
                        style={[
                          Styles.buttonIncrement,
                          {
                            marginTop: 30,
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
                      progress={0.6}
                      style={{
                        transform: [{rotate: '-90deg'}],
                        height: 30,
                        marginTop: 38,
                        width: 100,
                      }}
                      height={30}
                      color={'#18acbb'}
                      borderRadius={25}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <BottomWrapper navigation={this.props.navigation} page={2} />
        </SafeAreaView>
      </>
    );
  }
}
export default NutrionLog;
