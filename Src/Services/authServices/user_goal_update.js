import { macroGoal_update_http_handler, waterGoal_update_http_handler } from "../../http_config/server_handler/auth_server_handler";
import { save_json_data } from "../../Utilities/local_storage";

export const macroGoal_update = (userOBJ) =>{
    macroGoal_update_http_handler(userOBJ);
}

export const waterGoal_update = (userOBJ) =>{
    waterGoal_update_http_handler(userOBJ);
}

export const local_macroGoal_update = (keys,userOBJ) =>{
    save_json_data(keys, userOBJ);
}

export const local_waterGoal_update = (key,userOBJ) => {
    save_json_data(key, userOBJ);
}
export const local_soiGoal_update = (key, userOBJ) =>{
    save_json_data(key, userOBJ);
}