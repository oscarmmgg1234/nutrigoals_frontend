import {register_user_http_handler} from '../../http_config/server_handler/auth_server_handler';

export const register_user = (userOBJ, callback) => {
  register_user_http_handler(userOBJ, (res) => {
    return callback(res);
  });
};
