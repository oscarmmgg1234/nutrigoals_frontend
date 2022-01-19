import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Colors from '../../Styles/Colors';
import Styles from '../../Screens/NutrionLog/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ResultsViewSearch from './resultView';
import PortionView from '../Log/LogBody/foodLog/portionComponent';
import {app_context} from '../../core';
import {foodLog_context} from '../../core';
import {APIServerCall} from '../../http_config/axios_config';

const SearchModal = (props) => {
  const selected = React.useRef('');
  const totalResults = React.useRef(0);

  const [portionData, setPortionData] = React.useState([]);

  function setSelected(arg) {
    selected.current = arg;
  }
  getFood = async (pageNumber) => {
    // props.setData([]);

    console.log(APItoken + props.searchItem, pageNumber);
    let responseObjects = await APIServer.get('/foodSearch', {
      headers: {
        token: APItoken,
        food: props.searchItem,
        page_number: pageNumber,
      },
    });

    console.log(responseObjects);
    totalResults.current = responseObjects.data.foods;
    if (responseObjects.data.foods.food.length > 0) {
      const results = responseObjects.data.foods.food.map((obj) => {
        return {
          name: obj.food_name,
          toggle: false,
          id: Math.random() % 100,
          foodType: obj.food_type,
          food_description: obj.food_description,
          food_id: obj.food_id,
          brand_name: obj.brand_name,
        };
      });
      //setPortionData([]);
      props.setData(results);
    } else {
      alert('no results');
    }
  };

  const {APItoken} = React.useContext(app_context);

  const [foodSearchFocus, setSFocus] = useState(false);

  function inputFocus() {
    setSFocus(!foodSearchFocus);
  }

  logLevel = (res) => {
    if (buttonFocus[0] === true) {
      editBFLogData(res);
    } else if (buttonFocus[1] === true) {
      editLunchLogData(res);
    } else if (buttonFocus[2] === true) {
      editDinnerLogData(res);
    } else if (buttonFocus[3] === true) {
      editSnackLogData(res);
    }
  };
  next = (res) => {
    logLevel(res.data);
    props.toggleModal(false);
  };
  addFoodToLog = async (obj) => {
    let num = 0;
    portionData.map((obj, ind) => {
      if (obj.toggle === true) {
        num = ind;
      }
    });

    await APIServerCall.get('/getFood', {
      headers: {
        token: APItoken,
        foodId: obj[0].food_id,
        serving_index: num,
      },
    })
      .then((res) => {
        next(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  foodServings = async (obj) => {
    await APIServerCall.get('/getFoodServingSize', {
      headers: {token: APItoken, foodId: obj[0].food_id},
    })
    .then((res) => {
      let temp = res.data.data.map((obj) => {
        return {...obj, toggle: false};
      });
      setPortionData(temp);
    });
  };
  function addFood() {
    let temp = props.data.filter((obj) => obj.toggle === true);

    addFoodToLog(temp);
  }

  const {editBFLogData, editLunchLogData, editDinnerLogData, editSnackLogData} =
    React.useContext(foodLog_context);

  const [buttonFocus, setButtonFocus] = useState([false, false, false, false]);

  function toggleButtonFocus(index) {
    if (buttonFocus[index] === false) {
      let temp = buttonFocus.map((obj, ind) => {
        if (index === ind) {
          return true;
        } else {
          return false;
        }
      });
      setButtonFocus(temp);
    } else {
      let temp = [false, false, false, false];
      setButtonFocus(temp);
    }
  }

  return (
    <>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={props.modal}
        onRequestClose={() => {
          props.toggleModal(false);
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: "rgba(0,0,0,0.6)",
          }}>
          <View
            style={{
              height: 150,
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            
            <View
              style={{
                height: 60,
                width: '80%',
                backgroundColor: 'rgba(255,255,255,0.6)',
                borderRadius: 30,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 57,
                marginLeft: 20
              }}>
              <View
                style={{
                  height: '95%',
                  width: '98.5%',
                  backgroundColor: "rgba(20,20,20,1)",
                  borderRadius: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={props.setSearchI}
                  onFocus={() => {
                    props.setSearchI('');
                    props.setData([]);
                  }}
                  value={props.searchItem}
                  textAlign={'left'}
                  placeholder={'Search Food'}
                  placeholderTextColor={'rgba(255,255,255,0.6)'}
                  style={{
                    paddingLeft: 15,
                    width: '86%',
                    color: 'white',
                    fontSize: 17,
                  }}
                />
                {props.searchItem.length > 0 ? (
                  <TouchableOpacity
                    style={{marginRight: 10}}
                    onPress={() => getFood(0)}>
                    <Icon name={'search'} color={'white'} size={29} />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
            <TouchableOpacity
              style={{marginRight: 15, marginTop: 60}}
              onPress={props.toggleModal}>
              <Icon name={'remove'} size={30} color={'white'} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            
            {props.data.length > 0 && (
              <>
                <View style={Styles.ResultModal}>
                  <Text
                    style={{color: 'white', alignSelf: 'center', marginTop: 6}}>
                    Results: {totalResults.current.totalResults}
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
                  <ResultsViewSearch
                    data={props.data}
                    setData={props.setData}
                    visBool={props.setVisi}
                    set={setSelected}
                    getServ={foodServings}
                    PortionData={portionData}
                    setPortionData={setPortionData}
                  />
                  {/* View for Page buttons */}
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
                  {/* End of page buttons */}
                </View>
                {/* Portion data function */}
                {portionData.length > 0 && (
                  <PortionView data={portionData} setData={setPortionData} />
                )}

                {props.visi === true && (
                  <View
                    style={{
                      width: '93%',
                      backgroundColor: Colors.texInputBackground,
                      alignSelf: 'center',
                      borderRadius: 20,
                      marginTop: 40,
                      height: 70,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignSelf: 'center',
                        justifyContent: 'space-evenly',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => toggleButtonFocus(0)}
                        style={{
                          height: '80%',
                          justifyContent: 'center',
                          backgroundColor: buttonFocus[0]
                            ? '#FF4343'
                            : 'rgba(0,0,0,0)',
                          borderRadius: 25,
                          paddingHorizontal: 5,
                          width: 75,
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>BFast</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => toggleButtonFocus(1)}
                        style={{
                          height: '80%',
                          justifyContent: 'center',
                          backgroundColor: buttonFocus[1]
                            ? '#FF4343'
                            : 'rgba(0,0,0,0)',
                          borderRadius: 25,
                          paddingHorizontal: 5,
                          width: 75,
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>Lunch</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => toggleButtonFocus(2)}
                        style={{
                          height: '80%',
                          justifyContent: 'center',
                          backgroundColor: buttonFocus[2]
                            ? '#FF4343'
                            : 'rgba(0,0,0,0)',
                          borderRadius: 25,
                          paddingHorizontal: 5,
                          width: 75,
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>Dinner</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => toggleButtonFocus(3)}
                        style={{
                          height: '80%',
                          justifyContent: 'center',
                          backgroundColor: buttonFocus[3]
                            ? '#FF4343'
                            : 'rgba(0,0,0,0)',
                          borderRadius: 25,
                          paddingHorizontal: 5,
                          width: 75,
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>Snack</Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        alignSelf: 'center',
                        marginTop: 30,
                        backgroundColor: Colors.buttonColor,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                      }}>
                      <TouchableOpacity
                        style={{width: 110}}
                        onPress={() => addFood()}>
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
                  </View>
                )}
              </>
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};
export default SearchModal;
