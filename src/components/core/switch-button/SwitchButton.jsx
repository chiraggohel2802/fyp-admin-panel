import React from 'react';
import Error from '../error/Error';
import Label from '../label/Label';
import styles from './SwitchButton.module.css';
import PropTypes from 'prop-types';

const SwitchButton = (props) => {
  const {
    label,
    name,
    value,
    error,
    required = false,
    onChange,
    hideErrorSpace = false,
    disabled = false,
  } = props;

  return (
    <div className="">
      <div className={styles.checkMarkStatus}>
        {label && <Label required={required} text={label} />}
        <div className={styles.statusToggle}>
          <input
            id={name}
            className={styles.check}
            type="checkbox"
            checked={value}
            onChange={onChange}
            disabled={disabled}
          />
          <label htmlFor={name} className={styles.checktoggle}>
            checkbox
          </label>
        </div>
      </div>

      {/* Error */}
      {!hideErrorSpace && <Error error={error} />}
    </div>
  );
};

SwitchButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  hideErrorSpace: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SwitchButton;
