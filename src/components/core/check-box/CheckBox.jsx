import React, { memo, useState } from 'react';
import styles from './checkbox.module.css';
import PropTypes from 'prop-types';

const Checkbox = ({
  label,
  checked,
  readOnly,
  fieldName,
  setFieldValue,
  useInternalState = true,
  customStyles = {},
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
    setFieldValue?.(fieldName, !isChecked);
  };

  const props = {
    readOnly,
    disabled: readOnly,
    checked: useInternalState ? isChecked : checked,
    onChange: !readOnly || useInternalState ? toggleCheckbox : () => null,
  };

  return (
    <label className={styles['custom-checkbox']} style={customStyles}>
      <input type="checkbox" {...props} />
      <span className={styles['custom-checkmark']}></span>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  fieldName: PropTypes.string,
  setFieldValue: PropTypes.func,
  useInternalState: PropTypes.bool,
  customStyles: PropTypes.object,
};

export default memo(Checkbox);
