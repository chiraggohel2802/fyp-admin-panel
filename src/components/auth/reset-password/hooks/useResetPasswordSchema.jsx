import { getErrors, passwordRules } from 'constants/errors.constants';
import { object, ref, string } from 'yup';

/**
 * Custom hook to define validation schema for reset password form.
 */
export default function useCheckoutSchema() {
  const { ERRORS } = getErrors();

  // Define validation schema using Yup
  const resetPasswordSchema = object().shape({
    password: string()
      .required(ERRORS.REQUIRED)
      .min(5, ERRORS.AUTH.SHORT_PASSWORD)
      .matches(passwordRules, { message: ERRORS.AUTH.WEEK_PASSWORD }), // Ensure password is required with min and max validation
    confirm_password: string()
      .oneOf([ref('password')], ERRORS.AUTH.MISMATCH_PASSWORD)
      .required(ERRORS.REQUIRED), // Ensure confirm password is required with min, max and match with password field value validation
  });

  return { resetPasswordSchema };
}
