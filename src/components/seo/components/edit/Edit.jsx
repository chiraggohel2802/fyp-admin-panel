import formStyles from 'css/form.module.css';
import { Formik } from 'formik';
import React from 'react';
import * as CoreComponent from 'components/core';
import { BiPlusCircle } from 'react-icons/bi';
import useGetSeoDetail from './hooks/useGetSeoDetail';
import useFormSubmit from './hooks/useFormSubmit';
import useSeo from '../../hooks/useSeo';
import FormFields from '../form-fields/FormFields';
import useSeoValidationSchema from '../../hooks/useSeoSchema';
import { SEO } from '../../constant';

const Edit = () => {
  const { handleBack } = useSeo();
  const { seoDetails, isLoadingSeoDetails } = useGetSeoDetail();
  const { seoValidationSchema } = useSeoValidationSchema();
  const { handleFormSubmit } = useFormSubmit();

  if (isLoadingSeoDetails) {
    return <CoreComponent.PageLoader />;
  }

  return (
    <CoreComponent.PageContainer
      heading={SEO.HEADING}
      subHeading={SEO.SUB_HEADING}
    >
      <Formik
        initialValues={seoDetails}
        validationSchema={seoValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={formStyles.cardRow}>
              <div className={formStyles.formGroupItem}>
                <h1 className={formStyles.formTitle}>{SEO.TITLE}</h1>
                <div className={formStyles.formGridGroup}>
                  <FormFields />
                </div>
              </div>
              <div className={formStyles.buttonGroup}>
                <CoreComponent.Button
                  text={SEO.CANCEL_BUTTON}
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
                      SEO.EDIT.BUTTON
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
