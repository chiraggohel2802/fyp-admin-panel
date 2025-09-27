/* eslint-disable react/prop-types */
import React from 'react';
import Label from '../label/Label';
import styles from './textArea.module.css';
import Error from '../error/Error';
import { useFormikContext } from 'formik';

const TextArea = (props) => {
  const { setFieldValue } = useFormikContext();
  const {
    label,
    name,
    value,
    placeholder,
    error,
    required = false,
    hideErrorSpace = false,
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
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
        />
      </div>

      {/* Error */}
      {!hideErrorSpace && <Error error={error} />}
    </div>
  );
};

export default TextArea;
