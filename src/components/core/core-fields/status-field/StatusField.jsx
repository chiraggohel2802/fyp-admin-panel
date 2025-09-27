import React, { memo } from 'react';
import PropTypes from 'prop-types';
import formStyles from 'css/form.module.css';
import SwitchButton from 'components/core/switch-button/SwitchButton';
import { CORE_FIELDS } from 'constants/pages.constants';

const StatusField = ({
  handleChange,
  value,
  label = CORE_FIELDS.STATUS_FIELD.LABEL,
}) => {
  return (
    <div className={formStyles.formGroup}>
      <SwitchButton
        label={label}
        value={value}
        name="status"
        onChange={handleChange}
      />
    </div>
  );
};

StatusField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
};

export default memo(StatusField);
