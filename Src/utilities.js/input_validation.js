import {validation_status} from '../Constants';
import { passRegex, emailRegex } from '../Constants';


//validation function :(
export const validate_input = (input, config) => {
  if (config.type === 'number') {
    //number
    if (typeof input === 'number') {
      if (input >= config.minNum && input <= config.maxNum) {
        return validation_status.sucess;
      } else {
        return validation_status.ruleExeption[0];
      }
    }
    //end of number typeof block
    else {
      return validation_status.ruleExeption[1];
    } //end of else number typeof block
  } else if (config.type === 'email') {
    
    //email
    if (typeof input === 'string') {
      if (input.length > 0) {
        if (emailRegex.test(input)) {
          return validation_status.sucess;
        } else {
          return validation_status.ruleExeption[2];
        }
      } else {
        return validation_status.ruleExeption[3];
      }
    } else {
      return validation_status.ruleExeption[1];
    } //end of email type of block
  } else if (config.type === 'text') {
    //text
    if (typeof input === 'string') {
      if (config.valueRequired === true) {
        if (input.length > 0) {
          if (
            config.minLength < input.length &&
            config.maxLength > input.length
          ) {
            let reg = new RegExp(
              config.customRegex !== null ? config.customRegex : '^[a-zA-Z]+$',
            );
            if (reg.test(input)) {
              return validation_status.sucess;
            } else {
              return validation_status.ruleExeption[5];
            }
          } else {
            return validation_status.ruleExeption[0];
          }
        } else {
          return validation_status.ruleExeption[4];
        }
      } else if (config.valueRequired === false) {
        if (input.length > 0) {
          if (
            config.minLenght < input.length &&
            config.maxLenght > input.length
          ) {
            let reg = new RegExp(
              config.customRegex !== null ? config.customRegex : '^[a-zA-Z]+$',
            );
            if (reg.test(input)) {
              return validation_status.sucess;
            } else {
              return validation_status.ruleExeption[5];
            }
          }
        } else {
          return validation_status.sucess;
        }
      } else {
        return validation_status.failed;
      }
    } else {
      return validation_status.ruleExeption[1];
    }
  } else if (config.type === 'password') {
    //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    
    if (typeof input === 'string') {
      if (input.length > 0) {
        
        if (passRegex.test(input)) {
          return validation_status.sucess;
        } else {
          return validation_status.ruleExeption[6];
        }
      } else {
        return validation_status.ruleExeption[4];
      }
    } else {
      return validation_status.ruleExeption[1];
    }
  }
};
