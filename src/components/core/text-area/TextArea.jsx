/* eslint-disable react/prop-types */
import React from 'react';
import Label from '../label/Label';
import styles from './textArea.module.css';
import Error from '../error/Error';

const TextArea = (props) => {
  const {
    label,
    name,
    value,
    placeholder,
    error,
    required = false,
    hideErrorSpace = false,
    onChange
  } = props;

  return (
    <div className="">
      <div className={styles.textAreaControl}>
        {label && <Label required={required} text={label} />}
        <textarea
          name={name}
          value={value}
          className={styles.textAreaInput}
          placeholder={placeholder}
          onChange={onChange}
          rows={4}
        />
      </div>

      {/* Error */}
      {!hideErrorSpace && <Error error={error} />}
    </div>
  );
};

export default TextArea;
