import React, {useContext, Suspense} from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Styles from './Styles';
import {foodLog_context} from '../../setup';

import LogHeader from '../../Components/Log/LogHeader/LogHeader';
import TotalView from '../../Components/Log/LogBody/totalView/totalView';

const FoodLogComponent = React.lazy(() =>
  import('../../Components/Log/LogBody/foodLog/foodLog'),
);

const WaterComponent = React.lazy(() =>
  import('../../Components/Home/homeBody/waterCompontent'),
);

const NutrionLog = (props) => {
  const {BFLogData, LunchLogData, DinnerLogData, SnackLogData} =
    useContext(foodLog_context);
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
            <Text style={Styles.inputTextStyle1}>{'Breakfast:'}</Text>
            <Suspense fallback={null}>
              <FoodLogComponent data={BFLogData} />
            </Suspense>
            <Text style={Styles.inputTextStyle1}>{'Lunch:'}</Text>
            <Suspense fallback={null}>
              <FoodLogComponent data={LunchLogData} />
            </Suspense>
            <Text style={Styles.inputTextStyle1}>{'Dinner:'}</Text>
            <Suspense fallback={null}>
              <FoodLogComponent data={DinnerLogData} />
            </Suspense>
            <Text style={Styles.inputTextStyle1}>{'Snacks:'}</Text>
            <Suspense fallback={null}>
              <FoodLogComponent data={SnackLogData} />
            </Suspense>
            <Suspense fallback={null}>
              <WaterComponent />
            </Suspense>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default NutrionLog;
