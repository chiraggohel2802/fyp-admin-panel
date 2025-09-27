import React from 'react';
import ReactSelect from 'react-select';
import styles from './Select.module.css';
import Label from '../label/Label';
import Error from '../error/Error';
import PropTypes from 'prop-types';

const SelectBox = (props) => {
  const {
    label,
    required = false,
    value,
    name,
    isMulti,
    options,
    onChange,
    hideErrorSpace = false,
    error,
  } = props;
  return (
    <div className="">
      <div className={styles.textFieldContainer}>
        {label && <Label required={required} text={label} />}

        <div className={styles.textFieldRow}>
          <ReactSelect
            value={value}
            name={name}
            isMulti={isMulti || false}
            options={options}
            onChange={onChange}
            className={styles.reactSelectBox}
            classNamePrefix="select"
          />
        </div>

        {/* Error */}
        {!hideErrorSpace && <Error error={error} />}
      </div>
    </div>
  );
};

SelectBox.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  hideErrorSpace: PropTypes.bool,
  error: PropTypes.string,
};

export default SelectBox;
