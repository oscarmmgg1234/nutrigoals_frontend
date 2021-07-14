import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableNativeFeedbackBase,
  Modal, 
  RefreshControl,
  ScrollView,
  Switch
} from 'react-native';


import Styles from './Styles';


import BottomWrapper from '../../Components/BottomNavigator';

import SplashScreen from 'react-native-splash-screen';

import {timeout} from 'async';
import HomeHeader from '../../Components/Home/HomeHeader/homeHeader';
import CaloriesView from '../../Components/Home/homeBody/totalCalCom';
import MacroScrollComponent from '../../Components/Home/homeBody/macroComponent';
import WaterProgress from '../../Components/Home/homeBody/waterCompontent';
import ProgressChart from '../../Components/Home/homeBody/weighComponent';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenRefresh: false, 
    };
  }
  componentDidMount() {
    SplashScreen.hide();
  }


  wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  onRefresh = () => {
    this.setState({screenRefresh: true});
    
    this.wait(1000).then(()=>this.setState({screenRefresh: false}));
  }



  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} hidden={false} />
        
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <HomeHeader/>
          <ScrollView
          
            refreshControl={
              <RefreshControl 
              refreshing={this.state.screenRefresh}
              onRefresh={this.onRefresh}
              progressBackgroundColor={'white'}
              
              progressViewOffset={50}
              />
            }
            >
            <View
              style={{
                marginTop: 10,
                marginBottom: 20,
              }}>

                <CaloriesView/>
                <MacroScrollComponent/>
                <ProgressChart/>
                <WaterProgress/>



            </View>
            
          </ScrollView>
          
        
            <BottomWrapper navigation={this.props.navigation} page={1} />
        </SafeAreaView>)
      </>
    );
  }
}

export default Home;
