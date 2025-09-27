import { getErrors } from 'constants/errors.constants';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { string } from 'yup';

export default function useValidations() {
  const { ERRORS } = getErrors();

  const mobileValidation = string()
    .required(ERRORS.REQUIRED)
    .test('is-valid-phone', ERRORS.DRIVERS.MOBILE.NUMBER, (value) => {
      return value ? isValidPhoneNumber(value) : false;
    });

  const mobileOptionalValidation = string().test(
    'is-valid-phone',
    ERRORS.DRIVERS.MOBILE.NUMBER,
    (value) => {
      return value ? isValidPhoneNumber(value) : true;
    }
  );

  return {
    mobileValidation,
    mobileOptionalValidation,
  };
}
