import formStyles from 'css/form.module.css';
import { Formik } from 'formik';
import * as CoreComponent from 'components/core';
import { BiPlusCircle } from 'react-icons/bi';
import FormFields from '../form-fields/FormFields';
import { formIntialValues, FOOTER_CMS } from '../../constant';
import React from 'react';
import { useFormSubmit } from './hooks/useFormSubmit';
import useFooterCMS from 'components/footer-cms-module/hooks/useFooterCMS';
import useFooterCMSSchema from '../../hooks/useFooterCMSSchema';

const Add = () => {
  const { handleBack } = useFooterCMS();
  const { footerCmsValidationSchema } = useFooterCMSSchema();
  const { handleFormSubmit } = useFormSubmit();

  return (
    <CoreComponent.PageContainer
      heading={FOOTER_CMS.HEADING}
      subHeading={FOOTER_CMS.SUB_HEADING}
    >
      <Formik
        initialValues={formIntialValues}
        validationSchema={footerCmsValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={formStyles.cardRow}>
              <div className={formStyles.formGroupItem}>
                <h1 className={formStyles.formTitle}>{FOOTER_CMS.TITLE}</h1>
                <div className={formStyles.formGridGroup}>
                  <FormFields />
                </div>
              </div>
              <div className={formStyles.buttonGroup}>
                <CoreComponent.Button
                  text={FOOTER_CMS.CANCEL_BUTTON}
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
                      FOOTER_CMS.ADD.BUTTON
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
