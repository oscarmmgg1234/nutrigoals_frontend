import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import {GradientCircularProgress} from 'react-native-circular-gradient-progress';
import Styles from './Styles';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import BottomWrapper from '../../Components/BottomNavigator';

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleOn: true,
      imageProfile: '',
      storyData: [
        {
          name: 'Ruben',
        },
        {
          name: 'Rubeen',
        },
        {
          name: 'Maria',
        },
        {
          name: 'John',
        },
        {
          name: 'Rubeen',
        },
        {
          name: 'John',
        },
        {
          name: 'Maria',
        },
      ],
      storyIntagram: [
        {
          name: 'Ruben',
        },
        {
          name: 'Rubeen',
        },
        {
          name: 'Maria',
        },
        {
          name: 'John',
        },
        {
          name: 'Rubeen',
        },
      ],
    };
  }
  showProfileWrapper = (value) => {
    return (
      <>
        <View style={Styles.storyWrapper}>
          <Image source={Images.Profile} style={Styles.headerContentInner} />
          <Text style={Styles.storyText}>{value.name}</Text>
        </View>
      </>
    );
  };

  render() {
    const {toogleOn, imageProfile, storyData, storyIntagram} = this.state;
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContainer}>
              <Text style={Styles.homeText}>{'Friends'}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image source={Images.addPerson} style={Styles.sideImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={Images.plus_square}
                    style={Styles.sideImage1}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={Styles.inputTextStyle1}>{'Highlights:'}</Text>

          <View style={Styles.headerContentWrapper}>
            <View style={Styles.headerContent}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={storyData}
                renderItem={({item}) => this.showProfileWrapper(item)}
              />
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.mainDataWrapper}>
              <View style={Styles.listMainWrapper}>
                {storyIntagram.length > 0 &&
                  storyIntagram.map((value) => {
                    return (
                      <>
                        <View>
                          <View style={Styles.listMainContent}>
                            <View style={{flexDirection: 'row', marginTop: 12}}>
                              <Image
                                source={Images.Profile}
                                style={Styles.headerContentInner}
                              />
                              <Text style={Styles.storyText1}>
                                {value.name}
                              </Text>
                            </View>
                            <GradientCircularProgress
                              startColor={'#18acbb'}
                              middleColor={'#e8ffe6'}
                              endColor={'#4abb0b'}
                              emptyColor={Colors.cancel}
                              size={80}
                              progress={60}>
                              <Text style={Styles.totalText}>{'Total'}</Text>
                              <Text style={Styles.totalText1}>{'1540'}</Text>
                              <Text style={Styles.totalText2}>{'Kcal'}</Text>
                            </GradientCircularProgress>

                            <View style={{flexDirection: 'row', marginTop: 30}}>
                              <Image
                                source={Images.book_open1}
                                style={{width: 25, height: 25, marginRight: 10}}
                              />
                              <Image
                                source={Images.message_square}
                                style={{width: 25, height: 25}}
                              />
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 10,
                              marginLeft: 20,
                            }}>
                            <Image
                              source={Images.emojione_fire}
                              style={{
                                width: 25,
                                height: 25,
                                marginRight: 10,
                                marginLeft: 10,
                              }}
                            />
                            <Text style={Styles.totalText3}>{'x 20'}</Text>
                          </View>
                          <View style={Styles.seperator} />
                        </View>
                      </>
                    );
                  })}
              </View>
            </View>
          </ScrollView>
          <BottomWrapper navigation={this.props.navigation} page={3} />
        </SafeAreaView>
      </>
    );
  }
}
export default Instagram;
