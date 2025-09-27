import React from 'react';
import { Formik } from 'formik';
import { formIntialValues, SLIDER } from '../../constant';
import FormFields from '../form-fields/FormFields';
import useSliderValidationSchema from 'components/slider/hooks/useSliderSchema';
import { useFormSubmit } from './hooks/useFormSubmit';
import * as CoreComponent from 'components/core';
import formStyles from 'css/form.module.css';
import useSlider from 'components/slider/hooks/useSlider';
import { BiPlusCircle } from 'react-icons/bi';

const Add = () => {
  const { handleBack } = useSlider();
  const { handleFormSubmit } = useFormSubmit();
  const { sliderValidationSchema } = useSliderValidationSchema();

  return (
    <CoreComponent.PageContainer
      heading={SLIDER.HEADING}
      subHeading={SLIDER.SUB_HEADING}
    >
      <Formik
        initialValues={formIntialValues}
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
                      SLIDER.ADD.BUTTON
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
