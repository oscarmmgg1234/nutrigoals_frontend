import { food_get_http_handler, food_search_http_handler } from "../../http_config/server_handler/api_server_handler";

export const food_search = async (apiKey, foodExpr, pNumber) =>{
    let data = null;
    await food_search_http_handler(apiKey, foodExpr, pNumber, (res)=>{data = res});
    if(data !== null){
        return data
    }else{
        return null
    }
    
}

export const get_food = async (apiKey, foodID, ser_index) =>{
    let data = null;
    await food_get_http_handler(apiKey, foodID, ser_index, (res)=>{
        data = res;
    })
    if(data !== null){
        return data
    }else{
        return null
    }
}