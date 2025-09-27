import formStyles from 'css/form.module.css';
import { Formik } from 'formik';
import React from 'react';
import * as CoreComponent from 'components/core';
import { BiPlusCircle } from 'react-icons/bi';
import useGetRoleDetail from './hooks/useGetRoleDetail';
import useFormSubmit from './hooks/useFromSubmit';
import useRole from 'components/user-management/role/hooks/useRole';
import FormFields from '../form-fields/FormFields';
import useRoleValidationSchema from '../../hooks/useRoleSchema';
import { ROLE } from '../../constant';

const Edit = () => {
  const { handleBack } = useRole();

  const { roleDetails, isLoadingRoleDetails } = useGetRoleDetail();
  const { roleValidationSchema } = useRoleValidationSchema();
  const { handleFormSubmit } = useFormSubmit();

  if (isLoadingRoleDetails) {
    return <CoreComponent.PageLoader />;
  }

  return (
    <CoreComponent.PageContainer
      heading={ROLE.HEADING}
      subHeading={ROLE.SUB_HEADING}
    >
      <Formik
        initialValues={roleDetails}
        validationSchema={roleValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={formStyles.cardRow}>
              <div className={formStyles.formGroupItem}>
                <h1 className={formStyles.formTitle}>{ROLE.TITLE}</h1>
                <div className={formStyles.formGridGroup}>
                  <FormFields />
                </div>
              </div>

              {/* Buttons */}
              <div className={formStyles.buttonGroup}>
                <CoreComponent.Button
                  text={ROLE.CANCEL_BUTTON}
                  disabled={formikProps.isSubmitting}
                  className={formStyles.cancelButton}
                  onClick={handleBack}
                />
                <CoreComponent.Button
                  type="submit"
                  text={
                    formikProps.isSubmitting ? (
                      <CoreComponent.ButtonLoader />
                    ) : (
                      ROLE.EDIT.BUTTON
                    )
                  }
                  suffix={
                    !formikProps.isSubmitting && <BiPlusCircle size={16} />
                  }
                  disabled={formikProps.isSubmitting}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </CoreComponent.PageContainer>
  );
};

export default Edit;
