import React from 'react';
import { Formik } from 'formik';
import { formIntialValues, SLIDER } from '../../constant';
import useFormSubmit from './hooks/useFormSubmit';
import useSliderValidationSchema from 'components/slider/hooks/useSliderSchema';
import FormFields from '../form-fields/FormFields';
import { useParams } from 'react-router-dom';
import useGetSliderDetail from './hooks/useGetSliderDetail';
import * as CoreComponent from 'components/core';
import formStyles from 'css/form.module.css';
import useSlider from 'components/slider/hooks/useSlider';
import { BiPlusCircle } from 'react-icons/bi';

const Edit = () => {
  const { id } = useParams();
  const { handleBack } = useSlider();
  const { sliderDetails, isLoadingSliderDetails } = useGetSliderDetail(id);
  const { handleFormSubmit } = useFormSubmit(id);
  const { sliderValidationSchema } = useSliderValidationSchema();

  if (isLoadingSliderDetails) return <div>Loading...</div>;

  return (
    <CoreComponent.PageContainer
      heading={SLIDER.HEADING}
      subHeading={SLIDER.SUB_HEADING}
    >
      <Formik
        enableReinitialize
        initialValues={sliderDetails || formIntialValues}
        validationSchema={sliderValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={formStyles.cardRow}>
              <div className={formStyles.formGroupItem}>
                <h1 className={formStyles.formTitle}>{SLIDER.TITLE}</h1>
                <div className={formStyles.formGridGroup}>
                  <FormFields />
                </div>
              </div>
              <div className={formStyles.buttonGroup}>
                <CoreComponent.Button
                  text={SLIDER.CANCEL_BUTTON}
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
                      SLIDER.EDIT.BUTTON
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
