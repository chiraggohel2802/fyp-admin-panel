import { Formik } from 'formik';
import React, { memo } from 'react';
import { formIntialValues } from './constants';
import useCheckoutSchema from './hooks/useForgotPasswordSchema';
import useFormSubmit from './hooks/useFormSubmit';
import {
  Button,
  ButtonLoader,
  HelmetComponent,
  TextField,
} from 'components/core';
import { Check } from 'assets/iconComponents';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './forgotPassword.module.css';
import { NavLink } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';

const ForgotPassword = () => {
  const { forgotPasswordSchema } = useCheckoutSchema(); // Custom hook for forgot password form validation schema
  const { handleFormSubmit } = useFormSubmit(); // Custom hook for handling form submission
  return (
    <React.Fragment>
      <HelmetComponent title="Forgot Password" />
      <Formik
        initialValues={formIntialValues}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <h5 className={styles.textCenter}>Forgot Password</h5>
            <p className={styles.subTitle}>Get Reset Password Link</p>
            <div className={styles.fields}>
              {/* Email TextField */}
              <TextField
                autoFocus
                required
                fieldName="email"
                disabled={formikProps.isSubmitting}
                label="Email ID"
                placeholder="Enter your Email ID"
                onChange={formikProps.handleChange}
                value={formikProps.values.email}
                error={formikProps.errors.email}
                suffix={
                  formikProps.values.email &&
                  !formikProps.errors.email && <Check />
                }
              />

              {/* Submit Button */}
              <Button
                type="submit"
                text={
                  formikProps.isSubmitting ? (
                    <ButtonLoader />
                  ) : (
                    'Forgot Password'
                  )
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

export default memo(ForgotPassword);
