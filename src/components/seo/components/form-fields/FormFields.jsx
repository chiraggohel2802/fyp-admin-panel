import formStyles from 'css/form.module.css';
import * as CoreComponent from 'components/core';
import React from 'react';
import { useFormikContext } from 'formik';
import { SEO } from '../../constant';

const FormFields = () => {
  const formikProps = useFormikContext();

  return (
    <>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="metaTitle"
          label={SEO.FORM.META_TITLE_LABEL}
          placeholder={SEO.FORM.META_TITLE_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.metaTitle}
          error={formikProps.errors.metaTitle}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextArea
          required
          name="metaDescription"
          label={SEO.FORM.META_DESCRIPTION_LABEL}
          placeholder={SEO.FORM.META_DESCRIPTION_PLACEHOLDER}
          value={formikProps.values.metaDescription}
          error={formikProps.errors.metaDescription}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="metaKeywords"
          label={SEO.FORM.META_KEYWORDS_LABEL}
          placeholder={SEO.FORM.META_KEYWORDS_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.metaKeywords}
          error={formikProps.errors.metaKeywords}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="canonicalLink"
          label={SEO.FORM.CANONICAL_LINK_LABEL}
          placeholder={SEO.FORM.CANONICAL_LINK_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.canonicalLink}
          error={formikProps.errors.canonicalLink}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="pageLink"
          label={SEO.FORM.PAGE_LINK_LABEL}
          placeholder={SEO.FORM.PAGE_LINK_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.canonicalLink}
          error={formikProps.errors.canonicalLink}
        />
      </div>
    </>
  );
};

export default FormFields;
