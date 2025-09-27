import formStyles from 'css/form.module.css';
import * as CoreComponent from 'components/core';
import React from 'react';
import { useFormikContext } from 'formik';
import { SLIDER } from '../../constant';

const FormFields = () => {
  const formikProps = useFormikContext();

  return (
    <>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="title"
          label={SLIDER.FORM.TITLE_LABEL}
          placeholder={SLIDER.FORM.TITLE_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.title}
          error={formikProps.errors.title}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextArea
          required
          name="description"
          label={SLIDER.FORM.DESCRIPTION_LABEL}
          placeholder={SLIDER.FORM.DESCRIPTION_PLACEHOLDER}
          value={formikProps.values.description}
          error={formikProps.errors.description}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.ImageUpload
          required
          name="image"
          buttonLabel="Choose Image"
          label={SLIDER.FORM.IMAGE_LABEL}
          value={formikProps.values.image}
          error={formikProps.errors.image}
          isField={true}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.ImageUpload
          required
          name="backgroundImage"
          buttonLabel="Choose Background"
          label={SLIDER.FORM.BACKGROUND_IMAGE_LABEL}
          value={formikProps.values.backgroundImage}
          error={formikProps.errors.backgroundImage}
          isField={true}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.ImageUpload
          required
          name="mobileImage"
          buttonLabel="Choose Mobile Image"
          label="Mobile Image"
          value={formikProps.values.mobileImage}
          error={formikProps.errors.mobileImage}
          isField={true}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.ImageUpload
          required
          name="mobileBackgroundImage"
          buttonLabel="Choose Mobile Background"
          label="Mobile Background Image"
          value={formikProps.values.mobileBackgroundImage}
          error={formikProps.errors.mobileBackgroundImage}
          isField={true}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="buttonText"
          label={SLIDER.FORM.BUTTON_TEXT_LABEL}
          placeholder={SLIDER.FORM.BUTTON_TEXT_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.buttonText}
          error={formikProps.errors.buttonText}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="buttonLink"
          label={SLIDER.FORM.BUTTON_LINK_LABEL}
          placeholder={SLIDER.FORM.BUTTON_LINK_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.buttonLink}
          error={formikProps.errors.buttonLink}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="sequenceNo"
          label={SLIDER.FORM.SEQUENCE_NO_LABEL}
          placeholder={SLIDER.FORM.SEQUENCE_NO_PLACEHOLDER}
          type="number"
          onChange={formikProps.handleChange}
          value={formikProps.values.sequenceNo}
          error={formikProps.errors.sequenceNo}
        />
      </div>
    </>
  );
};

export default FormFields;
