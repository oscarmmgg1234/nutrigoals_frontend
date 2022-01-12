import { account_update_http_handler } from "../http_config/server_call_func";

export const account_update = (userOBJ, callback) => {
    console.log(userOBJ)
    account_update_http_handler(userOBJ, (res)=>{return callback(res)})
}