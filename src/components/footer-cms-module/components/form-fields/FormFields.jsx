import formStyles from 'css/form.module.css';
import * as CoreComponent from 'components/core';
import React from 'react';
import { useFormikContext } from 'formik';
import { FOOTER_CMS } from 'components/footer-cms-module/constant';

const CATEGORY_OPTIONS = [
  { label: 'How We Can Help', value: 1 },
  { label: 'Therapy Services', value: 2 },
  { label: 'About', value: 3 },
  { label: 'Contact Us', value: 4 },
];

const FormFields = () => {
  const formikProps = useFormikContext();

  return (
    <>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="title"
          label={FOOTER_CMS.FORM.FOOTER_TITLE_LABEL}
          placeholder={FOOTER_CMS.FORM.FOOTER_TITLE_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.title}
          error={formikProps.errors.title}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="url_link"
          label={FOOTER_CMS.FORM.FOOTER_URL_LABEL}
          placeholder="Enter URL Link"
          onChange={formikProps.handleChange}
          value={formikProps.values.url_link}
          error={formikProps.errors.url_link}
        />
      </div>
      <div className={formStyles.formGroup}>
        <CoreComponent.DropDown
          field="category"
          dropdownLabel={FOOTER_CMS.FORM.FOOTER_CATEGORY_LABEL}
          required
          options={CATEGORY_OPTIONS}
          error={formikProps.errors.category}
          value={CATEGORY_OPTIONS.find(opt => opt.value === formikProps.values.category) || null}
          setFieldValue={(field, selected) => formikProps.setFieldValue(field, selected?.value ?? '')}
          setFieldTouched={formikProps.setFieldTouched}
        />
      </div>
    </>
  );
};

export default FormFields;