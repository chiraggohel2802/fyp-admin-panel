import formStyles from 'css/form.module.css';
import * as CoreComponent from 'components/core';
import React from 'react';
import { useFormikContext } from 'formik';
import { THERAPIST } from '../../constant';

const FormFields = () => {
  const formikProps = useFormikContext();

  return (
    <>
      <div className={formStyles.formGroup}>
        <CoreComponent.Label
          className={formStyles.formGroupItem}
          text={`Username: ${formikProps.values.username}`}
        />
        {/* SEO Paragraph Field */}
        <CoreComponent.TextArea
          name="seoParagraph"
          label={THERAPIST.FORM.SEO_PARAGRAPH_LABEL}
          placeholder={THERAPIST.FORM.SEO_PARAGRAPH_PLACEHOLDER}
          onChange={(e) => formikProps.handleChange(e)}
          value={formikProps.values.seoParagraph}
          error={formikProps.errors.seoParagraph}
          rows={4}
        />
        <CoreComponent.TextField
          fieldName="sequence"
          label={THERAPIST.FORM.SEQUENCE_LABEL}
          placeholder={THERAPIST.FORM.SEQUENCE_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.sequence}
          error={formikProps.errors.sequence}
        />
        
        {/* Intro Video Field */}
        <CoreComponent.TextField
          fieldName="introVideo"
          label={THERAPIST.FORM.INTRO_VIDEO_LABEL}
          placeholder={THERAPIST.FORM.INTRO_VIDEO_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.introVideo}
          error={formikProps.errors.introVideo}
        />
        
        {/* Review Count Field */}
        <CoreComponent.TextField
          fieldName="reviewCount"
          label={THERAPIST.FORM.REVIEW_COUNT_LABEL}
          placeholder={THERAPIST.FORM.REVIEW_COUNT_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.reviewCount}
          error={formikProps.errors.reviewCount}
          type="number"
        />
        
        {/* Rating Field */}
        <CoreComponent.TextField
          fieldName="rating"
          label={THERAPIST.FORM.RATING_LABEL}
          placeholder={THERAPIST.FORM.RATING_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.rating}
          error={formikProps.errors.rating}
          type="number"
        />
        
        {/* Is Verified Field */}
        <CoreComponent.SwitchButton
          label={THERAPIST.FORM.IS_VERIFIED_LABEL}
          name="isVerified"
          value={formikProps.values.isVerified}
          onChange={(e) => formikProps.setFieldValue('isVerified', !formikProps.values.isVerified)}
          error={formikProps.errors.isVerified}
        />
        
        {/* Profile Picture Field */}
        <CoreComponent.ImageUpload
          required
          name="profile"
          buttonLabel="Choose Image"
          label={THERAPIST.FORM.PROFILE_PIC_LABEL}
          value={formikProps.values.profile}
          error={formikProps.errors.profile}
          isField={true}
        />
        
        
      </div>
    </>
  );
};

export default FormFields;
