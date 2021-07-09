import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableNativeFeedbackBase
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Styles from './Styles';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import BottomWrapper from '../../Components/BottomNavigator';
import {GradientCircularProgress} from 'react-native-circular-gradient-progress';
import SplashScreen from 'react-native-splash-screen';
import {color, Value} from 'react-native-reanimated';
import {LineChart} from 'react-native-chart-kit'
import * as Progress from 'react-native-progress';

//compare http and asynctorage username and if not same update async user data http for userData only not theme or other data => having current user data in servers will allow synchronization beetween devices possible


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageProfile: '',
      waterData: {value: 8},
      graphData: {graphLabels: ["S", "M", "T", "W", "T", "F", "S"], graphDataP: [80,20,30,40,50,60,70]},
      macroData: [
        {
          name: 'Protein',
          macroGoal: 100,
          macroCurrent: 50,
        },
        {
          name: 'Fat',
          macroGoal: 100,
          macroCurrent: 2,
        },
        {
          name: 'Carbohydrates',
          macroGoal: 100,
          macroCurrent: 10,
        },
        {
          name: 'Sugar',
          macroGoal: 100,
          macroCurrent: 32,
        },
        {
          name: 'Sodium',
          macroGoal: 100,
          macroCurrent: 89,
        },
      ],
    };


  }
  componentDidMount() {
    SplashScreen.hide();
    
  }

  incrementWaterLevelView(){

    let old = this.state.waterData.value;
    if(old < 15){
    this.setState({waterData: {value: old + 1}})
    }
  }

  decrementWaterLevelView(){
    
    let old = this.state.waterData.value;
    if(old > 0){
    this.setState({waterData: {value: old - 1}})
    }
  }

  selectImage = () => {
    const options = {
      quality: 0.1,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        // console.log('User cancelled photo picker');
        //dispatch(TASKS.hideLoader());
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
        //dispatch(TASKS.hideLoader());
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        // let source = { uri: response.uri };
        // You can also display the image using data:
        const {fileName, type, uri, fileSize} = response;

        // `${utilities.BASE_URL}register`
        this.setState({imageProfile: uri});
        // dispatch(TASKS.hideLoader());
      }
    });
  };

  addTraceMacro(value) {
    this.setState({
      macroData: [
        ...this.state.macroData,
        {
          name: value.name,
          macroGoal: value.macroGoal,
          macroCurrent: value.macroCurrent,
        },
      ],
    });
  }
  deleteTraceElement(position) {
    const newStateArray = this.state.macroData.map((item, index) => {
      if (item.name !== position) {
        return item;
      }
    });
    this.setState({macroData: [newStateArray]});
    this.state.macroData.map((item) => alert(item.name));
  }

  render() {
    const {imageProfile, macroData} = this.state;
    return (
      <>
      <StatusBar 
      barStyle={'light-content'}
      hidden={false}
      />
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContainer}>
        
              <TouchableOpacity onPress={this.selectImage}>
                <Image
                  source={imageProfile ? {uri: imageProfile} : Images.Profile}
                  style={Styles.profileStyle}
                />
              </TouchableOpacity>
              <Text style={Styles.homeText}>{'Home'}</Text>
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
                    progress={60}
                    stokeWidth={1}>
                    <Text style={Styles.totalText}>{'Total'}</Text>
                    <Text style={Styles.totalText1}>{'1540'}</Text>
                    <Text style={Styles.totalText2}>{'Kcal'}</Text>
                  </GradientCircularProgress>
                </View>
              </View>
              {/* Tracked Macros */}

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
                              <View style={Styles.macroProgressTextContainer}>
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
                                progress={
                                  (value.macroCurrent / value.macroGoal) * 100
                                }
                                stokeWidth={1}>
                                <Text style={Styles.totalTextMacro}>
                                  {(value.macroCurrent / value.macroGoal) * 100}
                                  %
                                </Text>
                              </GradientCircularProgress>
                              <TouchableOpacity
                                onPress={() =>
                                  this.deleteTraceElement('Sodium')
                                }>
                                <Image
                                  source={require('../../assests/Icons/delete.png')}
                                  style={{width: 12, height: 12, marginTop: 10}}
                                />
                              </TouchableOpacity>
                            </View>
                          </>
                        );
                      })}
                    <View style={Styles.showbackGroundContent}>
                      <TouchableOpacity
                        onPress={() =>
                          this.addTraceMacro({
                            name: 'fat',
                            macroGoal: 100,
                            macroCurrent: 40,
                          })
                        }>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '500',
                            color: Colors.primary,
                          }}>
                          {'Add Trace Elements'}
                        </Text>
                      </TouchableOpacity>
                      {/* <View style={{}}>

                        </View> */}
                    </View>
                  </View>
                </View>
              </ScrollView>

              {/* Weight */}

              <Text style={Styles.inputTextStyle1}>{' Weight:'}</Text>
              <View style={Styles.weightContainer }>
                <View style={Styles.chartContainer}>
                <LineChart data={{
                  
                        labels: this.state.graphData.graphLabels,
                        datasets: [
                          {
                            data: this.state.graphData.graphDataP,
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(122,228,187, ${opacity})`,
                          
                          },
                        ],
                        legend: ["Performance / Weekly"]
                      }}
                      width={Dimensions.get("window").width / 1.2} // from react-native
                      height={180}
                      yAxisSuffix="%"
                      yAxisInterval={10} // optional, defaults to 1
                      withInnerLines={false}
                      withDots={true}
                      fromZero={true}
                      
                      
                      chartConfig={{
                        backgroundColor: Colors.ok,
                        backgroundGradientFrom: Colors.ok,
                        decimalPlaces: 0,
                    
                        backgroundGradientTo: Colors.ok,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        
                        },
                    
                        propsForDots: {
                          r: "4",
                          color: (opacity = 1) => `rgba(122,228,187, ${opacity})`
                        }
                      }}
                      bezier
                      style={{
                        marginBottom: 8,
                        borderRadius: 20
                      }}
                    />
                </View>
              </View>

              {/* Water */} 
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
                      <Text style={Styles.firstText1}>{this.state.waterData.value}</Text>
                      <Text
                        style={[
                          Styles.firstText,
                          {marginLeft: 7, marginTop: 3},
                        ]}>
                        { '/ 15 Cups'}
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
                      <TouchableOpacity style={Styles.buttonIncrement} onPress={()=>this.incrementWaterLevelView()}>
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

                      <TouchableOpacity onPress={()=>this.decrementWaterLevelView()}
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
                      progress={this.state.waterData.value / 15 }//make gender male 15.5 and female 12.5 cups
                      style={{
                        transform: [{rotate: '-90deg'}],
                        height: 40,
                        marginTop: 38,
                        width: 120,
                      }}
                      indeterminateAnimationDuration={700}
                      animationConfig={{bounciness: 20}}
                      animationType={'spring'}
                      borderColor={this.state.waterData.value === 15 ? '#62FF68' : '#18acbb'}
                      borderWidth={this.state.waterData.value === 15 ? 5 : 1}
                      height={40}
                      color={'#18acbb'}
                      borderRadius={25}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <BottomWrapper navigation={this.props.navigation} page={1} />
        </SafeAreaView>
      </>
    );
  }
}
export default Home;
