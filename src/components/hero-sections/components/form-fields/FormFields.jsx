import formStyles from 'css/form.module.css';
import * as CoreComponent from 'components/core';
import React from 'react';
import { useFormikContext } from 'formik';
import { HERO_SECTION } from '../../constant';

const FormFields = () => {
  const formikProps = useFormikContext();

  return (
    <>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="title"
          label={HERO_SECTION.FORM.TITLE_LABEL}
          placeholder={HERO_SECTION.FORM.TITLE_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.title}
          error={formikProps.errors.title}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="subtitle"
          label={HERO_SECTION.FORM.SUBTITLE_LABEL}
          placeholder={HERO_SECTION.FORM.SUBTITLE_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.subtitle}
          error={formikProps.errors.subtitle}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextArea
          required
          name="description"
          label={HERO_SECTION.FORM.DESCRIPTION_LABEL}
          placeholder={HERO_SECTION.FORM.DESCRIPTION_PLACEHOLDER}
          value={formikProps.values.description}
          error={formikProps.errors.description}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.ImageUpload
          required
          name="image"
          buttonLabel="Choose Image"
          label={HERO_SECTION.FORM.IMAGE_LABEL}
          value={formikProps.values.image}
          error={formikProps.errors.image}
          isField={true}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="imageAltText"
          label={HERO_SECTION.FORM.IMAGE_ALT_TEXT_LABEL}
          placeholder={HERO_SECTION.FORM.IMAGE_ALT_TEXT_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.imageAltText}
          error={formikProps.errors.imageAltText}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="buttonText"
          label={HERO_SECTION.FORM.BUTTON_TEXT_LABEL}
          placeholder={HERO_SECTION.FORM.BUTTON_TEXT_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.buttonText}
          error={formikProps.errors.buttonText}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="buttonLink"
          label={HERO_SECTION.FORM.BUTTON_LINK_LABEL}
          placeholder={HERO_SECTION.FORM.BUTTON_LINK_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.buttonLink}
          error={formikProps.errors.buttonLink}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextArea
          name="seoParagraph"
          label={HERO_SECTION.FORM.SEO_PARAGRAPH_LABEL}
          placeholder={HERO_SECTION.FORM.SEO_PARAGRAPH_PLACEHOLDER}
          onChange={(e) => formikProps.handleChange(e)}
          value={formikProps.values.seoParagraph}
          error={formikProps.errors.seoParagraph}
          rows={4}
        />
      </div>
    </>
  );
};

export default FormFields;