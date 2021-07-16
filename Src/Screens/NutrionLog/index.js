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
import FoodLog from "../../Components/Log/LogBody/foodLog";

class NutrionLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageProfile: '',}
    };
  render() {

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

             <FoodLog/>
              <FoodLog/>
              <FoodLog/>
              <FoodLog/>


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
