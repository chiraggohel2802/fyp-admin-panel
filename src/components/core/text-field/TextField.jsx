/* eslint-disable react/prop-types */
import Label from '../label/Label';
import styles from './textField.module.css';
import useTextField from './hooks/useTextField';
import Error from '../error/Error';
import React, { memo } from 'react';

const TextField = (props) => {
  const {
    inputClasses,
    suffixClasses,
    defaultSuffixIcon,
    defaultSuffixOnClick,
    defaultOnKeyDown,
    defaultOnWheel,
  } = useTextField(props);

  const {
    readOnly,
    type = 'text',
    required = false,
    hideErrorSpace = false,
    autoFocus = false,
    disabled = false,
    placeholder = '',
    label,
    fieldName,
    inputCustomStyles,
    prefix,
    suffix,
    value,
    error,
    onBlur,
    onKeyUp,
    onChange,
    suffixOnClick,
    onClick,
    pattern,
    className,
    suffixCustomStyles,
    toolTipText,
  } = props;

  return (
    <div className={className}>
      <div className={styles.textFieldContainer}>
        {label && (
          <Label required={required} text={label} toolTipText={toolTipText} />
        )}

        <div className={styles.textFieldRow}>
          {!!prefix && <span className={styles.prefix}>{prefix}</span>}

          <input
            type={type}
            id={fieldName}
            name={fieldName}
            readOnly={readOnly}
            disabled={disabled}
            autoFocus={autoFocus}
            placeholder={placeholder}
            className={inputClasses}
            style={inputCustomStyles}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onClick={onClick}
            onKeyUp={onKeyUp}
            pattern={pattern}
            autoComplete="off"
            onKeyDown={defaultOnKeyDown}
            onWheel={defaultOnWheel}
          />

          {/* Suffix */}
          {(!!suffix || !!defaultSuffixIcon) && (
            <span
              className={suffixClasses}
              style={suffixCustomStyles}
              onClick={suffixOnClick || defaultSuffixOnClick}
            >
              {suffix || defaultSuffixIcon}
            </span>
          )}
        </div>

        {/* Error */}
        {!hideErrorSpace && <Error error={error} />}
      </div>
    </div>
  );
};

export default memo(TextField);
