import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../../../Styles/Colors';
import Styles from '../../../../Screens/NutrionLog/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ResultsView from './resultsComponent';
import PortionView from './portionComponent';
import {app_context} from '../../../../core';
import {food_search, get_food} from '../../../../Services/apiServices/api_food';

const ModalComponent = (props) => {
  const selected = React.useRef('');
  const totalResults = React.useRef(0);

  const {APItoken} = React.useContext(app_context);

  const [foodSearchFocus, setSFocus] = useState(false);
  const [portionData, setPortionData] = React.useState([]);

  function setSelected(arg) {
    selected.current = arg;
  }

  function addFood() {
    let temp = props.resultsData.filter((obj) => obj.toggle === true);

    addFoodToLog(temp, true);
  }

  //second func called
  addFoodToLog = async (obj, type) => {
    let num = 0;
    portionData.map((obj, ind) => {
      if (obj.toggle === true) {
        num = ind;
      }
    });

    let response = await get_food(APItoken, obj[0].food_id, num);
    console.log(response);
    let porstionArray = response.food.servings.serving.map((obj) => {
      return {...obj, toggle: false};
    });
    setPortionData(porstionArray);
    if (type) {
      next(response, num);
    }
    //foodServings(obj);
  };

  next = (res, index) => {
    console.log(res);
    props.addFood(res, index);
    props.setVisible(false);
  };

  // foodServings = async (obj) => {

  //   let response = await get_food(APItoken,obj[0].food_id, num);

  // .then((res)=>{let temp = res.data.data.map(obj=>{return {...obj, toggle: false}});setPortionData(temp);})
  // }

  //searchFood
  getFood = async (pageNumber) => {
    //props.setData([]);
    let responseObjects = await food_search(
      APItoken,
      props.foodSearch,
      pageNumber,
    );

    totalResults.current = responseObjects.foods;

    if (responseObjects.foods.food.length > 0) {
      const results = responseObjects.foods.food.map((obj) => {
        return {
          name: obj.food_name,
          toggle: false,
          id: Math.random() % 100,
          foodType: obj.food_type,
          food_description: obj.food_description,
          food_id: obj.food_id,
          brandName: obj.brand_name,
        };
      });
      //setPortionData([]);
      props.setData(results);
    } else {
      alert('no results');
    }
  };

  function inputFocus() {
    setSFocus(!foodSearchFocus);
  }

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.state}
      onRequestClose={() => props.setVisible(false)}>
      <TouchableOpacity onPress={() => props.setVisible(false)}>
        <View
          style={{
            backgroundColor: 'rgba(20,19,25,0.3)',
            height: '100%',
            width: '100%',
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                width: '85%',
                marginTop: '20%',
                backgroundColor: 'rgba(20,19,25,1.0)',
                borderRadius: 20,
                alignSelf: 'center',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 20,
                  marginTop: 10,
                  color: Colors.White,
                  marginBottom: 13,
                  fontWeight: 'bold',
                }}>
                Add Food
              </Text>
              <View
                style={{
                  height: 1,
                  width: '95%',
                  backgroundColor: Colors.backgroundColor,
                  alignSelf: 'center',
                }}
              />
              <View
                style={[
                  Styles.ModalInput,
                  {
                    borderWidth: 2,
                    borderColor:
                      props.foodSearch.length > 0
                        ? '#62FF68'
                        : foodSearchFocus
                        ? Colors.buttonColor
                        : Colors.backgroundColor,
                  },
                ]}>
                <TextInput
                  onChangeText={props.setFoodSearch}
                  value={props.foodSearch}
                  placeholder={'Search Food'}
                  placeholderTextColor={'rgba(255,255,255,0.7)'}
                  onFocus={() => {
                    props.setFoodSearch('');
                    inputFocus();
                  }}
                  style={{
                    color: 'white',
                    width: '78%',
                    paddingLeft: 10,
                    marginRight: 18,
                  }}
                  textAlign={'left'}
                  onBlur={inputFocus}
                />
                {props.foodSearch.length > 0 && (
                  <TouchableOpacity onPress={() => getFood(0)}>
                    <Icon
                      name={'search'}
                      color={'white'}
                      size={23}
                      style={{marginTop: 10}}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {props.resultsData.length > 0 && props.foodSearch.length > 0 && (
                <>
                  <View style={Styles.ResultModal}>
                    <Text
                      style={{
                        color: 'white',
                        alignSelf: 'center',
                        marginTop: 6,
                      }}>
                      Results: {totalResults.current.total_results}
                    </Text>
                    <View
                      style={{
                        marginTop: 10,
                        height: 1,
                        width: '85%',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        alignSelf: 'center',
                      }}
                    />

                    <ResultsView
                      data={props.resultsData}
                      setData={props.setData}
                      set={setSelected}
                      getServ={addFoodToLog}
                      PortionData={portionData}
                      setPortionData={setPortionData}
                    />
                    {/* Start of Page buttons */}
                    <View style={Styles.PageResultContainer}>
                      {parseFloat(totalResults.current.page_number) > 0 ? (
                        <TouchableOpacity
                          onPress={() =>
                            getFood(
                              parseFloat(totalResults.current.page_number) - 1,
                            )
                          }
                          onLongPress={() => getFood(0)}>
                          <Icon
                            name={'chevron-circle-left'}
                            color={'white'}
                            size={25}
                          />
                        </TouchableOpacity>
                      ) : (
                        <Icon
                          name={'chevron-circle-left'}
                          color={'grey'}
                          size={25}
                        />
                      )}
                      <Text style={{color: 'white'}}>
                        {'Page: '} {totalResults.current.page_number}
                      </Text>
                      {parseFloat(totalResults.current.page_number) + 1 <
                      Math.ceil(
                        parseFloat(totalResults.current.total_results) / 20,
                      ) ? (
                        <TouchableOpacity
                          onPress={() =>
                            getFood(
                              parseFloat(totalResults.current.page_number) + 1,
                            )
                          }
                          onLongPress={() =>
                            getFood(
                              Math.ceil(
                                parseFloat(totalResults.current.total_results) /
                                  20,
                              ) - 1,
                            )
                          }>
                          <Icon
                            name={'chevron-circle-right'}
                            color={'white'}
                            size={25}
                          />
                        </TouchableOpacity>
                      ) : (
                        <Icon
                          name={'chevron-circle-right'}
                          color={'grey'}
                          size={25}
                        />
                      )}
                    </View>
                    {/* End of Page Buttons */}
                  </View>

                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 17,
                      marginVertical: 20,
                      fontWeight: 'bold',
                    }}>
                    {selected.current}
                  </Text>
                  {portionData.length > 0 && (
                    // Portion data function
                    <PortionView data={portionData} setData={setPortionData} />
                  )}
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: 50,
                      backgroundColor: Colors.buttonColor,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <TouchableOpacity style={{width: 110}} onPress={addFood}>
                      <Text
                        style={{
                          color: 'white',
                          alignSelf: 'center',
                          fontWeight: 'bold',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}

              <TouchableOpacity onPress={() => props.setVisible(false)}>
                <Icon
                  name={'angle-double-down'}
                  size={30}
                  color={'white'}
                  style={{alignSelf: 'center', marginTop: 26}}
                />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalComponent;
