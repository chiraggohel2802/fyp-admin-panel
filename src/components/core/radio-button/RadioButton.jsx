import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.css';

const RadioButton = (props) => {
  const { name, value, label, onChange, checked } = props;
  return (
    <div>
      <label className={styles?.radioGap}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          autoFocus={false}
        />
        {label}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default RadioButton;
