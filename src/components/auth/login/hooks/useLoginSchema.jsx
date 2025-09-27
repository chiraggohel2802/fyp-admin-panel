import { emailRegExp, getErrors } from 'constants/errors.constants';
import { object, string } from 'yup';

/**
 * Custom hook to define validation schema for login form.
 */
export default function useCheckoutSchema() {
  const { ERRORS } = getErrors();

  // Define validation schema using Yup
  const loginSchema = object().shape({
    email: string()
      .matches(emailRegExp, ERRORS.EMAIL)
      .required(ERRORS.REQUIRED), // Validate email format and ensure it's required
    password: string().required(ERRORS.REQUIRED), // Ensure password is required
  });

  return { loginSchema };
}
