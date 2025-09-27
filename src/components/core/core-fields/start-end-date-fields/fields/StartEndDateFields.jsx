import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/core/text-field/TextField';
import formStyles from 'css/form.module.css';
import { CORE_FIELDS } from 'constants/pages.constants';

const StartEndDateFields = ({
  isSubmitting,
  handleChange,
  values,
  errors,
  name = ['startDate', 'endDate'],
  label = [
    CORE_FIELDS.START_END_DATE_FIELDS.START_DATE_TEXTFIELD_LABEL,
    CORE_FIELDS.START_END_DATE_FIELDS.END_DATE_TEXTFIELD_LABEL,
  ],
}) => {
  const [startDateName, endDateName] = name;
  const [startDateLabel, endDateLabel] = label;
  return (
    <React.Fragment>
      {/* startDate Field */}
      <div className={formStyles.formGroup}>
        <TextField
          required
          type="time"
          fieldName={startDateName}
          disabled={isSubmitting}
          label={startDateLabel}
          onChange={handleChange}
          value={values.startDate}
          error={errors.startDate}
          inputClassName={formStyles.formGroupInput}
        />
      </div>

      {/* endDate Field */}
      <div className={formStyles.formGroup}>
        <TextField
          required
          type="time"
          fieldName={endDateName}
          disabled={isSubmitting}
          label={endDateLabel}
          onChange={handleChange}
          value={values.endDate}
          error={errors.endDate}
          inputClassName={formStyles.formGroupInput}
        />
      </div>
    </React.Fragment>
  );
};

StartEndDateFields.propTypes = {
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.array,
  label: PropTypes.array,
};

export default memo(StartEndDateFields);
