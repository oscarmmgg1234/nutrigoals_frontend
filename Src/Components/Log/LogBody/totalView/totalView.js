import React from 'react';
import {View} from 'react-native';
import {Styles} from './totalViewStyles';
import ProgressMacro from './progressMacro';
import {user_context} from '../../../../setup';

const TotalView = () => {
  const {userGoals} = React.useContext(user_context);
  const calCurrent =
    userGoals.proteinCurrent * 4 +
    userGoals.carbCurrent * 4 +
    userGoals.fatCurrent * 9;

  const calGoal =
    userGoals.fatGoal * 9 + userGoals.carbGoal * 4 + userGoals.proteinGoal * 4;

  return (
    <>
      <View style={Styles.viewContainer}>
        <View style={Styles.chartContainer}>
          <ProgressMacro
            name={'Calories:'}
            current={calCurrent}
            goal={calGoal}
            color={'#a064e0'}
          />
          <ProgressMacro
            name={'Protein:'}
            current={userGoals.proteinCurrent}
            goal={userGoals.proteinGoal}
            color={'#74abdf'}
          />
          <ProgressMacro
            name={'Fat:'}
            current={userGoals.fatCurrent}
            goal={userGoals.fatGoal}
            color={'#fada7a'}
          />
          <ProgressMacro
            name={'Carbohydrates:'}
            current={userGoals.carbCurrent}
            goal={userGoals.carbGoal}
            color={'#49ffc2'}
          />
        </View>
      </View>
    </>
  );
};

export default TotalView;
