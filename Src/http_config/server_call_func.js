//Create server call func for app
import {
  AuthSeverCall,
  APIBackend,
  UserBackend,
  APITokenCall,
} from './axios_config';

const bcrypt = require('bcryptjs');
const saltRounds = 5;

{/*auth server calls*/}

export const LoginCall = (username, password) => {
  let result;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    AuthSeverCall.post('/login', {'username': username, 'password': hash}).then(function(res){result = res.data.result});
  });
  return result;
};

export const checkUsernameStatus = (username) => {
  let result;
  AuthSeverCall.get('/usernameStatus', {'username': username}).then(function(res){result = res.data.count});
  return result;
}

export const registerUser = (username, name, email) => {
  AuthSeverCall.post('/register/user', {'username': username, 'name': name, 'email': email});
}

export const registerUserCredentials = (username, password) => {
  bcrypt.hash(password, saltRounds, function(err,hash){
    AuthSeverCall.post('/register',{'username': username, 'password': hash});
  });
}
