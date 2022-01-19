import {APIServerCall} from '../axios_config'

// userbackend calls
APIServerCall.defaults.timeout = 5000;

export const food_search_http_handler = async (apiKey, searchExp, pageNumber, callback) => {
 
  let response = await APIServerCall.post("/foodSearch", {
    API_access_token: apiKey,
    foodID: searchExp,
    page_number: pageNumber
  })
  return callback(response.data);
}


export const food_get_http_handler = async (apiKey, foodID, ser_index, callback) => {
  let response = await APIServerCall.post("/getFood", {
    API_access_token: apiKey,
    foodID: foodID,
    serving_index: ser_index,
  })
  return callback(response.data)
}
