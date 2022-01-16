import React, {Component, Suspense} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Styles from './Styles';
import HomeHeader from '../../Components/Home/HomeHeader/homeHeader';
import CaloriesView from '../../Components/Home/homeBody/totalCalCom';
import SplashScreen from 'react-native-splash-screen';
const MacroComponent = React.lazy(() =>
  import('../../Components/Home/homeBody/macroComponent'),
);
const ProgressChart = React.lazy(() =>
  import('../../Components/Home/homeBody/weighComponent'),
);
const WaterProgress = React.lazy(() =>
  import('../../Components/Home/homeBody/waterCompontent'),
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
              <Suspense fallback={null}>
                <ProgressChart />
              </Suspense>
              <Suspense fallback={null}>
                <WaterProgress />
              </Suspense>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Home;
