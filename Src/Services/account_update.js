import { account_update_http_handler } from "../http_config/server_call_func";
import { save_json_data } from "../Utilities/local_storage";

export const account_update = (userOBJ, callback) => {
    account_update_http_handler(userOBJ, (res)=>{return callback(res)})
}

export const local_account_update = (key, userOBJ) =>{
    save_json_data(key, userOBJ);
}