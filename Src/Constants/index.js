export const LOGIN = 'Log in';
export const USERNAME = 'Username:';
export const PASSWORD = 'Password:';
export const DONT_HAVE_ACCOUNT = 'Dont have an account?';
export const SIGNUP = 'Sign Up';
export const LOGIN_DESCRIPTION = 'Or Login with one of the following options.';
export const GOOGLE = 'Google';
export const APPLEID = 'AppleID';
export const NAME = 'Name:';
export const EMAIL = 'Email:';
export const CONFIRM_PASSWORD = 'Re-type Password:';
export const NEXT = 'Next';
export const SELECT_USERNAME = 'Select Username';
export const FINISH_SIGNUP = 'Finish Signing Up';
export const SIGNOUT = 'Sign out';
export const PROTEIN = 'Protein';
export const FATS = 'Fats';
export const CARBS = 'Carbohydrates';
export const SUGAR = 'Sugar';
export const SODIUM = 'Sodium';
export const SETTINGS = 'Settings';
export const MACRONUTRIENT = 'Macronutrients';

export const MACROdescription =
  'In the context of health and fitness, macronutrients are most often defined to be the chemical compounds that humans consume in large quantities that provide bulk energy. Specifically, they refer to carbohydrates, proteins, and fats. Some definitions also include water, air, calcium, sodium, chloride ions, and some other substances, along with more typical macronutrients, since they are needed in large quantities by the human body. In this calculator, we only calculate daily carbohydrate, protein, and fat needs.';
export const BMRdescripton =
  'The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment when the digestive system is inactive. It is the equivalent of figuring out how much gas an idle car consumes while parked. In such a state, energy will be used only to maintain vital organs, which include the heart, lungs, kidneys, nervous system, intestines, liver, lungs, sex organs, muscles, and skin.';
export const TDEEdescription =
  "TDEE stands for total daily energy expenditure. It is the total energy that a person uses in a day. TDEE is hard to measure accurately and varies day by day. More often, it is estimated using factors such as a person's basal metabolic rate (BMR), activity level, and the thermic effect of food.";
export const BMIdescription =
  "BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese.";
export const BodyFdescription =
  "The Body Fat Calculator can be used to estimate your total body fat based on specific measurements. Use the 'Metric Units' tab if you are more comfortable with the International System of Units (SI). To get the best results, measure to the nearest 1/4 inch (0.5 cm).";

export const validation_status = {
  sucess: {id: 1, mesagge: 'Input is valid', status: true},
  failed: {id: 2, mesagge: 'Input is not valid', status: false},
  ruleExeption: [
    {id: 3, mesagge: 'Input out of range', status: false},
    {id: 4, mesagge: 'Input type is invalid-type', status: false},
    {id: 5, message: 'Input email is in invalid-format', status: false},
    {id: 6, message: 'Input email cannot be empty', status: false},
    {id: 7, message: 'Input string cannot be empty', status: false},
    {id: 8, message: 'Invalid character in input string', status: false},
    {id: 9, message: 'Input password in invalid', status: false},
  ],
};

export const passRegex = RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$');
export const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

export const user_account_key = "userkey0";
export const navigation_key = "userkey1";
export const user_macro_goals_key = "userkey2";
export const user_water_goals_key = "userkey3";
export const user_soi_goals_key = "userkey4";

export const auth_server_publicIp_with_port = 'http://34.216.10.88:5000';
export const api_server_publicIp_with_port = 'http://34.216.10.88:5001';
export const access_server_publicIp_with_port = 'http://34.216.10.88:5002';
export const calc_server_publicIp_with_port = 'http://34.216.10.88:5003';