import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/core/text-field/TextField';
import formStyles from 'css/form.module.css';
import { CORE_FIELDS } from 'constants/pages.constants';

const StartEndTimeFields = ({
  isSubmitting,
  handleChange,
  values,
  errors,
  name = ['startTime', 'endTime'],
  label = [
    CORE_FIELDS.START_END_TIME_FIELDS.START_TIME_TEXTFIELD_LABEL,
    CORE_FIELDS.START_END_TIME_FIELDS.END_TIME_TEXTFIELD_LABEL,
  ],
}) => {
  const [startTime, endTime] = name;
  const [startTimeLabel, endTimeLabel] = label;
  return (
    <React.Fragment>
      {/* startTime Field */}
      <div className={formStyles.formGroup}>
        <TextField
          required
          type="time"
          fieldName={startTime}
          disabled={isSubmitting}
          label={startTimeLabel}
          onChange={handleChange}
          value={values[startTime]}
          error={errors[startTime]}
          inputClassName={formStyles.formGroupInput}
        />
      </div>

      {/* endTime Field */}
      <div className={formStyles.formGroup}>
        <TextField
          required
          type="time"
          fieldName={endTime}
          disabled={isSubmitting}
          label={endTimeLabel}
          onChange={handleChange}
          value={values[endTime]}
          error={errors[endTime]}
          inputClassName={formStyles.formGroupInput}
        />
      </div>
    </React.Fragment>
  );
};

StartEndTimeFields.propTypes = {
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.array,
  label: PropTypes.array,
};

export default memo(StartEndTimeFields);
