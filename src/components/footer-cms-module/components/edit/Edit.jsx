import formStyles from 'css/form.module.css';
import { Formik } from 'formik';
import React from 'react';
import * as CoreComponent from 'components/core';
import { BiPlusCircle } from 'react-icons/bi';
import useGetFooterCmsDetail from './hooks/useGetFooterCmsDetail';
import useFormSubmit from './hooks/useFormSubmit';
import FormFields from '../form-fields/FormFields';
import useSeoValidationSchema from '../../hooks/useFooterCMSSchema';
import { FOOTER_CMS } from '../../constant';
import useFooterCMS from '../../hooks/useFooterCMS';
import useFooterCMSSchema from '../../hooks/useFooterCMSSchema';

const Edit = () => {
  const { handleBack } = useFooterCMS();
  const { footerCmsDetails, isLoadingFooterCmsDetails } = useGetFooterCmsDetail();
  const { footerCmsValidationSchema } = useFooterCMSSchema();
  const { handleFormSubmit } = useFormSubmit();

  if (isLoadingFooterCmsDetails) {
    return <CoreComponent.PageLoader />;
  }

  return (
    <CoreComponent.PageContainer
      heading={FOOTER_CMS.HEADING}
      subHeading={FOOTER_CMS.SUB_HEADING}
    >
      <Formik
        initialValues={footerCmsDetails}
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
                      FOOTER_CMS.EDIT.BUTTON
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
