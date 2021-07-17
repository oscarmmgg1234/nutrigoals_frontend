import React, {Component, Suspense} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Styles from './Styles';
import BottomWrapper from '../../Components/BottomNavigator';
import SplashScreen from 'react-native-splash-screen';
import HomeHeader from '../../Components/Home/HomeHeader/homeHeader';
import CaloriesView from '../../Components/Home/homeBody/totalCalCom';
import WaterProgress from '../../Components/Home/homeBody/waterCompontent';
import ProgressChart from '../../Components/Home/homeBody/weighComponent';

const MacroComponent = React.lazy(() =>
  import('../../Components/Home/homeBody/macroComponent'),
);

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
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  onRefresh = () => {
    this.setState({screenRefresh: true});
    this.wait(1000).then(() => this.setState({screenRefresh: false}));
  };

  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} hidden={false} />
        <SafeAreaView style={Styles.safeViewStyle1} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <HomeHeader />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.screenRefresh}
                onRefresh={this.onRefresh}
                progressBackgroundColor={'white'}
                progressViewOffset={50}
              />
            }>
            <View
              style={{
                marginTop: 10,
                marginBottom: 20,
              }}>
              <CaloriesView />
              <Suspense fallback={null}>
                <MacroComponent />
              </Suspense>
              <ProgressChart />
              <WaterProgress />
            </View>
          </ScrollView>
          <BottomWrapper navigation={this.props.navigation} page={1} />
        </SafeAreaView>
      </>
    );
  }
}

export default Home;
