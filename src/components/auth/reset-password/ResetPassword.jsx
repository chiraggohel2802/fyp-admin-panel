import { Formik } from 'formik';
import React, { memo } from 'react';
import { formIntialValues } from './constants';
import useCheckoutSchema from './hooks/useResetPasswordSchema';
import useFormSubmit from './hooks/useFormSubmit';
import {
  Button,
  ButtonLoader,
  HelmetComponent,
  TextField,
} from 'components/core';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './resetPassword.module.css';
import { NavLink } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import usePasswordForm from 'hooks/usePassword';

const ResetPassword = () => {
  const { resetPasswordSchema } = useCheckoutSchema(); // Custom hook for reset password form validation schema
  const { handleFormSubmit } = useFormSubmit(); // Custom hook for handling form submission
  const useResetHook = usePasswordForm(); // Custom hook for managing password field
  return (
    <React.Fragment>
      <HelmetComponent title="Reset Password" />
      <Formik
        initialValues={formIntialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <h5 className={styles.textCenter}>Reset Password</h5>
            <div className={styles.fields}>
              {/* Password TextField */}
              <TextField
                required
                fieldName="password"
                disabled={formikProps.isSubmitting}
                label="Password"
                placeholder="Enter your Password"
                onChange={formikProps.handleChange}
                value={formikProps.values.password}
                error={formikProps.errors.password}
                type={useResetHook.passwordFieldType}
                suffix={useResetHook.passwordSuffixIcon}
                suffixOnClick={useResetHook.toggleHidePassword}
              />

              {/* Confirm Password TextField */}
              <TextField
                required
                fieldName="confirm_password"
                disabled={formikProps.isSubmitting}
                label="Confirm Password"
                placeholder="Enter confirm Password"
                onChange={formikProps.handleChange}
                value={formikProps.values.confirm_password}
                error={formikProps.errors.confirm_password}
                type={useResetHook.confirmPasswordFieldType}
                suffix={useResetHook.confirmPasswordSuffixIcon}
                suffixOnClick={useResetHook.toggleHideConfirmPassword}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                text={
                  formikProps.isSubmitting ? <ButtonLoader /> : 'Reset Password'
                }
                suffix={
                  !formikProps.isSubmitting && <IoIosArrowForward size={16} />
                }
                disabled={formikProps.isSubmitting}
              />

              {/* Login Link */}
              <div className={styles.loginBottomSection}>
                <NavLink to={ROUTES_ENUMS.AUTH.LOGIN}>
                  Login to dashboard?
                </NavLink>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default memo(ResetPassword);
