import classNames from 'classnames';
import styles from '../textField.module.css';
import { RxCross2 } from 'react-icons/rx';
import { handleKeyDown, handleNumberValue } from '../common/functions';
import React from 'react';

export default function useTextField({
  fieldName = '',
  suffix,
  prefix,
  inputClassName,
  setFieldValue,
  suffixOnClick,
  useDefaultSuffixIcon,
  value,
  type = 'text',
}) {
  const defaultSuffixOnClick = () => setFieldValue?.(fieldName, '');

  // Updated condition to include 0 as well
  const defaultSuffixIcon =
    useDefaultSuffixIcon && value !== undefined && value !== '' ? (
      <RxCross2 />
    ) : null;

  // classNames
  const suffixClasses = classNames(styles.suffix, {
    [styles.hasSuffixOnClick]: setFieldValue || suffixOnClick,
  });

  const inputClasses = classNames(
    styles.input,
    { [styles.removeRightBorder]: suffix || defaultSuffixIcon },
    { [styles.hasPrefix]: prefix },
    inputClassName
  );

  // handle input field behavior if type == "number"
  const defaultOnKeyDown = type === 'number' ? handleKeyDown : undefined;
  const defaultOnWheel = type === 'number' ? handleNumberValue : undefined;

  return {
    defaultSuffixOnClick,
    suffixClasses,
    inputClasses,
    defaultSuffixIcon,
    defaultOnKeyDown,
    defaultOnWheel,
  };
}
