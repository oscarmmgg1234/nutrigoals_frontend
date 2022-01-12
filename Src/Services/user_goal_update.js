import { macroGoal_update_http_handler, waterGoal_update_http_handler } from "../http_config/server_call_func";

export const macroGoal_update = (userOBJ) =>{
    macroGoal_update_http_handler(userOBJ);
}

export const waterGoal_update = (userOBJ) =>{
    waterGoal_update_http_handler(userOBJ);
}