//Create server call func for app
import {
  AuthSeverCall,
  APIBackend,
  UserBackend,
  APITokenCall,
} from './axios_config';

const saltRounds = 5;

{
  /*auth server calls*/
}
AuthSeverCall.defaults.timeout = 4000;
export const checkUsernameStatus = (username) => {
  let result;
  AuthSeverCall.get('/usernameStatus', {username: username}).then(function (
    res,
  ) {
    result = res.data.count;
  });
  return result;
};

export const registerUser = (username, name, email, password) => {
  AuthSeverCall.post('/register/user', {
    username: username,
    name: name,
    email: email,
    password: password
  });
};

export const login_user = async (userOBJ, callback) =>{
  
  await AuthSeverCall.post('/loginUser', {
    username: userOBJ.username,
    password: userOBJ.password,
    user_id: userOBJ.user_id
  })
    .then((res) => {
      if (res.data.valid === true) {
        return callback(res.data)
      } else {
        return callback(false)
      }
    })
    .catch((err) => alert(err));
}

export const upload_image_http_handler = async (uploadOBJ) =>{
  
  await AuthSeverCall.post('/uploadImage', {
    image: uploadOBJ.image,
    user_id: uploadOBJ.userID
  })

}