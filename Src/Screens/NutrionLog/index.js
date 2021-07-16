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
  StatusBar,
} from 'react-native';
import Styles from './Styles';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import BottomWrapper from '../../Components/BottomNavigator';
import LogHeader from '../../Components/Log/LogHeader/LogHeader';
import TotalView from '../../Components/Log/LogBody/totalView/totalView';
import WaterProgress from '../../Components/Home/homeBody/waterCompontent';

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
        <StatusBar barStyle={'light-content'} hidden={false} />
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <LogHeader />
          <ScrollView>
            <View
              style={{
                marginTop: 10,
                marginBottom: 20,
              }}>
              <Text style={Styles.inputTextStyle1}>{' Summary:'}</Text>
              <TotalView />

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
              {/* Lunch: */}
              <Text style={Styles.inputTextStyle1}>{'Lunch:'}</Text>

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

              <WaterProgress />
            </View>
          </ScrollView>
          <BottomWrapper navigation={this.props.navigation} page={2} />
        </SafeAreaView>
      </>
    );
  }
}
export default NutrionLog;
