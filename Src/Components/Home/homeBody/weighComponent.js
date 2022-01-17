import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Colors from '../../../Styles/Colors';
import Styles from '../../../Screens/Home/Styles';
import {user_context} from '../../../core';

const ProgressChart = () => {
  const {graphData} = React.useContext(user_context);
  return (
    <>
      <Text style={Styles.inputTextStyle1}>{' Weight:'}</Text>
      <View style={Styles.weightContainer}>
        <View style={Styles.chartContainer}>
          <LineChart
            data={{
              labels: graphData.graphLabels,
              datasets: [
                {
                  data: graphData.graphDataP,
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(122,228,187, ${opacity})`,
                },
              ],
              legend: ['Performance / Weekly'],
            }}
            width={Dimensions.get('window').width / 1.2}
            height={180}
            yAxisSuffix="%"
            yAxisInterval={5}
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
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              },

              propsForDots: {
                r: '4',
                color: (opacity = 1) => `rgba(122,228,187, ${opacity})`,
              },
            }}
            bezier
            style={{
              marginBottom: 8,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
    </>
  );
};
export default ProgressChart;
