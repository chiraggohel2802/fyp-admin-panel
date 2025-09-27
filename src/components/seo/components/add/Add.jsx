import formStyles from 'css/form.module.css';
import { Formik } from 'formik';
import * as CoreComponent from 'components/core';
import { BiPlusCircle } from 'react-icons/bi';
import FormFields from '../form-fields/FormFields';
import { formIntialValues, SEO } from '../../constant';
import useSeoValidationSchema from '../../hooks/useSeoSchema';
import React from 'react';
import useSeo from 'components/seo/hooks/useSeo';
import { useFormSubmit } from './hooks/useFormSubmit';

const Add = () => {
  const { handleBack } = useSeo();
  const { seoValidationSchema } = useSeoValidationSchema();
  const { handleFormSubmit } = useFormSubmit();

  return (
    <CoreComponent.PageContainer
      heading={SEO.HEADING}
      subHeading={SEO.SUB_HEADING}
    >
      <Formik
        initialValues={formIntialValues}
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
                      SEO.ADD.BUTTON
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

export default Add;
