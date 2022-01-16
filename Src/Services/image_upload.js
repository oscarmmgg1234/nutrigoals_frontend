import {upload_image_http_handler} from '../http_config/server_call_func';
import { save_bool_data, save_json_data } from '../Utilities/local_storage';

export  function upload_image(uploadOBJ) {
  upload_image_http_handler(uploadOBJ);
}
export const local_upload_image = (key, userOBJ) =>{
  save_json_data(key, userOBJ)
} 