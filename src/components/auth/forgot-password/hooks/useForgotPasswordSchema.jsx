import { emailRegExp, getErrors } from 'constants/errors.constants';
import { object, string } from 'yup';

/**
 * Custom hook to define validation schema for forgot password form.
 */
export default function useCheckoutSchema() {
  const { ERRORS } = getErrors();

  // Define validation schema using Yup
  const forgotPasswordSchema = object().shape({
    email: string()
      .matches(emailRegExp, ERRORS.EMAIL)
      .required(ERRORS.REQUIRED), // Validate email format and ensure it's required
  });

  return { forgotPasswordSchema };
}
