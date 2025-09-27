import formStyles from 'css/form.module.css';
import * as CoreComponent from 'components/core';
import { StatusField } from 'components/core/core-fields';
import React from 'react';
import { useFormikContext } from 'formik';
import useGetPermissions from '../../hooks/useGetPermissions';
import { FORM } from 'constants/config.constants';
import { ROLE } from '../../constant';

const FormFields = () => {
  const formikProps = useFormikContext();
  const { permissions } = useGetPermissions();

  return (
    <React.Fragment>
      {/* Name Field */}
      <div className={formStyles.formGroup}>
        <CoreComponent.TextField
          required
          fieldName="name"
          disabled={formikProps.isSubmitting}
          label={ROLE.FORM.NAME_FIELD_LABEL}
          placeholder={ROLE.FORM.NAME_TEXTFIELD_PLACEHOLDER}
          onChange={formikProps.handleChange}
          value={formikProps.values.name}
          error={formikProps.errors.name}
          inputClassName={formStyles.formGroupInput}
        />
      </div>

      {/* Permissions Field */}
      <div className={formStyles.formGroup}>
        <CoreComponent.DropDown
          isMulti={true}
          dropdownLabel={ROLE.FORM.PERMISSIONS_FIELD_LABEL}
          placeholder={ROLE.FORM.PERMISSIONS_TEXTFIELD_PLACEHOLDER}
          options={permissions}
          value={formikProps.values.permissions}
          field="permissions"
          error={formikProps.errors.permissions}
          setFieldValue={formikProps.setFieldValue}
          menuListClass={FORM.DROPDOWN_MENU_ITEM_STYLE}
        />
      </div>

      {/* Description Field */}
      <div className={formStyles.formGroup}>
        <CoreComponent.TextArea
          required
          name="description"
          label={ROLE.FORM.DESCRIPTION_FIELD_LABEL}
          placeholder={ROLE.FORM.DESCRIPTION_TEXTFIELD_PLACEHOLDER}
          value={formikProps.values?.description}
          error={formikProps.errors.description}
        />
      </div>

      {/* Status Field */}
      <StatusField
        value={formikProps.values.status}
        handleChange={formikProps.handleChange}
      />
    </React.Fragment>
  );
};

export default FormFields;
