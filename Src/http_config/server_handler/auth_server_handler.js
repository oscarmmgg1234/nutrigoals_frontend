import { AuthSeverCall } from "../axios_config";

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
  
  export const register_user_http_handler = async (userOBJ, callback) => {
    await AuthSeverCall.post('/registerUser', userOBJ).then((res) => {
      if (res.data.valid === true) {
        return callback(true);
      } else {
        return callback(false);
      }
    });
  };
  
  export const login_user = async (userOBJ, callback) => {
    await AuthSeverCall.post('/loginUser', {
      username: userOBJ.username,
      password: userOBJ.password,
      user_id: userOBJ.user_id,
    })
      .then((res) => {
        if (res.data.valid === true) {
          return callback(res.data);
        } else {
          return callback(false);
        }
      })
      .catch((err) => Alert.alert(err));
  };
  
  export const upload_image_http_handler = async (uploadOBJ) => {
    await AuthSeverCall.post('/uploadImage', {
      image: uploadOBJ.image,
      user_id: uploadOBJ.userID,
    });
  };
  
  export const account_update_http_handler = async (userOBJ, callback) => {
    await AuthSeverCall.post('/updateUserAccountInfo', userOBJ)
    .then((res)=>{
      if(res.data){
        return callback(res.data)
      }
      else{
        return callback(false)
      }
    })
    .catch((err)=>{console.log(err)})
  }
  
  export const macroGoal_update_http_handler = async (userOBJ) => {
    await AuthSeverCall.post('/updateMacroGoals', userOBJ);
  }
  
  export const waterGoal_update_http_handler = async (userOBJ) =>{
    await AuthSeverCall.post('/updateWaterGoals', userOBJ);
  }