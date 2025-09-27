import formStyles from 'css/form.module.css';
import { Formik } from 'formik';
import React from 'react';
import * as CoreComponent from 'components/core';
import { BiPlusCircle } from 'react-icons/bi';
import useFormSubmit from './hooks/useFormSubmit';
import useSeo from '../../hooks/useTherapist';
import FormFields from '../form-fields/FormFields';
import useUserMetaSchema from '../../hooks/useUserMetaSchema';
import { THERAPIST } from '../../constant';
import useGetUserMetaDetail from './hooks/useGetUserMetaDetail';

const Edit = () => {
  const { handleBack } = useSeo();
  const { seoDetails, isLoadingSeoDetails } = useGetUserMetaDetail();
  const { userMetaValidationSchema } = useUserMetaSchema();
  const { handleFormSubmit } = useFormSubmit();

  if (isLoadingSeoDetails) {
    return <CoreComponent.PageLoader />;
  }

  return (
    <CoreComponent.PageContainer
      heading={THERAPIST.HEADING}
      subHeading={THERAPIST.SUB_HEADING}
    >
      <Formik
        initialValues={seoDetails}
        validationSchema={userMetaValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={formStyles.cardRow}>
              <div className={formStyles.formGroupItem}>
                <h1 className={formStyles.formTitle}>{THERAPIST.TITLE}</h1>
                <div className={formStyles.formGridGroup}>
                  <FormFields />
                </div>
              </div>
              <div className={formStyles.buttonGroup}>
                <CoreComponent.Button
                  text={THERAPIST.CANCEL_BUTTON}
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
                      THERAPIST.EDIT.BUTTON
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
