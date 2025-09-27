import React from 'react';
import { Formik } from 'formik';
import { formIntialValues, HERO_SECTION } from '../../constant';
import useFormSubmit from './hooks/useFormSubmit';
import useHeroSectionValidationSchema from 'components/hero-sections/hooks/useHeroSectionSchema';
import FormFields from '../form-fields/FormFields';
import { useParams } from 'react-router-dom';
import useGetHeroSectionDetail from './hooks/useGetHeroSectionDetail';
import * as CoreComponent from 'components/core';
import formStyles from 'css/form.module.css';
import useHeroSection from 'components/hero-sections/hooks/useHeroSection';
import { BiPlusCircle } from 'react-icons/bi';

const Edit = () => {
  const { id } = useParams();
  const { handleBack } = useHeroSection();
  const { heroSectionDetails, isLoadingHeroSectionDetails } = useGetHeroSectionDetail(id);
  const { handleFormSubmit } = useFormSubmit(id);
  const { heroSectionValidationSchema } = useHeroSectionValidationSchema();

  if (isLoadingHeroSectionDetails) return <div>Loading...</div>;

  return (
    <CoreComponent.PageContainer
      heading={HERO_SECTION.HEADING}
      subHeading={HERO_SECTION.SUB_HEADING}
    >
      <Formik
        enableReinitialize
        initialValues={heroSectionDetails || formIntialValues}
        validationSchema={heroSectionValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={formStyles.cardRow}>
              <div className={formStyles.formGroupItem}>
                <h1 className={formStyles.formTitle}>{HERO_SECTION.TITLE}</h1>
                <div className={formStyles.formGridGroup}>
                  <FormFields />
                </div>
              </div>
              <div className={formStyles.buttonGroup}>
                <CoreComponent.Button
                  text={HERO_SECTION.CANCEL_BUTTON}
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
                      HERO_SECTION.EDIT.BUTTON
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