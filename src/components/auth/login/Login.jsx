import { Formik } from 'formik';
import React, { memo } from 'react';
// import { NavLink } from 'react-router-dom';
import { formIntialValues } from './constants';
import useCheckoutSchema from './hooks/useLoginSchema';
import useFormSubmit from './hooks/useFormSubmit';
import {
  Button,
  ButtonLoader,
  HelmetComponent,
  TextField,
} from 'components/core';
import { Check } from 'assets/iconComponents';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './login.module.css';
// import ROUTES_ENUMS from 'routes/url.enum';
import { AUTH } from 'constants/pages.constants';
import usePassword from 'hooks/usePassword';

const Login = () => {
  const { loginSchema } = useCheckoutSchema(); // Custom hook for login form validation schema
  const { handleFormSubmit } = useFormSubmit(); // Custom hook for handling form submission
  const { passwordFieldType, passwordSuffixIcon, toggleHidePassword } =
    usePassword(); // Custom hook for managing password field state

  return (
    <React.Fragment>
      <HelmetComponent title={AUTH.LOGIN.TITLE} />
      <Formik
        initialValues={formIntialValues}
        validationSchema={loginSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <h5 className={styles.textCenter}>{AUTH.LOGIN.LOGIN_FORM.TITLE}</h5>
            <p className={styles.subTitle}>{AUTH.LOGIN.LOGIN_FORM.SUBTITLE}</p>
            <div className={styles.fields}>
              {/* Email TextField */}
              <TextField
                autoFocus
                required
                fieldName="email"
                disabled={formikProps.isSubmitting}
                label={AUTH.LOGIN.LOGIN_FORM.EMAIL_TEXTFIELD_LABEL}
                placeholder={AUTH.LOGIN.LOGIN_FORM.EMAIL_TEXTFIELD_PLACEHOLDER}
                onChange={formikProps.handleChange}
                value={formikProps.values.email}
                error={formikProps.errors.email}
                suffix={
                  formikProps.values.email &&
                  !formikProps.errors.email && <Check />
                }
              />

              {/* Password TextField */}
              <TextField
                required
                fieldName="password"
                disabled={formikProps.isSubmitting}
                label={AUTH.LOGIN.LOGIN_FORM.PASSWORD_TEXTFIELD_LABEL}
                placeholder={
                  AUTH.LOGIN.LOGIN_FORM.PASSWORD_TEXTFIELD_PLACEHOLDER
                }
                onChange={formikProps.handleChange}
                value={formikProps.values.password}
                error={formikProps.errors.password}
                type={passwordFieldType}
                suffix={passwordSuffixIcon}
                suffixOnClick={toggleHidePassword}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                text={
                  formikProps.isSubmitting ? (
                    <ButtonLoader />
                  ) : (
                    AUTH.LOGIN.LOGIN_BUTTON
                  )
                }
                suffix={
                  !formikProps.isSubmitting && <IoIosArrowForward size={16} />
                }
                disabled={formikProps.isSubmitting}
              />

              {/* Forgot Password Link */}
              {/* <div className={styles.loginBottomSection}>
                <NavLink to={ROUTES_ENUMS.AUTH.FORGOT_PASSWORD}>
                  {AUTH.LOGIN.FORGOT_PASSWORD_LINK_LABEL}
                </NavLink>
              </div> */}
            </div>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default memo(Login);
