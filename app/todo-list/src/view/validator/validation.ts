// import _ from "lodash";
import * as EmailValidator from "email-validator";
import passwordValidator from "password-validator";

export function validateEmail(val, errorText = "Email is not valid") {
  return EmailValidator.validate(val) || errorText;
}

export const validatePassword = (
  val,
  errorText = "Password must have upper and lower case, no spaces and minmum 8 digits"
) => {
  const schema = new passwordValidator();
  schema
    .is()
    .min(8)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .not()
    .spaces();
  return schema.validate(val) || errorText;
};

export default {
  email: [val => validateEmail(val)],
  password: [val => validatePassword(val)]
};
