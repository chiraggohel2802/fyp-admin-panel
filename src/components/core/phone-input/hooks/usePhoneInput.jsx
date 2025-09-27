import classNames from 'classnames';
import styles from '../Phone.module.css';

import { RxCross2 } from 'react-icons/rx';
import { handleKeyDown, handleNumberValue } from '../common/function';
import React from 'react';

export default function usePhoneInput({
  name = '',
  setFieldValue,
  suffixOnClick,
  useDefaultSuffixIcon,
  value,
  type = 'number',
}) {
  const defaultSuffixOnClick = () => setFieldValue?.(name, '');

  // Updated condition to include 0 as well
  const defaultSuffixIcon =
    useDefaultSuffixIcon && value !== undefined && value !== '' ? (
      <RxCross2 />
    ) : null;

  // classNames
  const suffixClasses = classNames(styles.suffix, {
    [styles.hasSuffixOnClick]: setFieldValue || suffixOnClick,
  });

  // handle input field behavior if type == "number"
  const defaultOnKeyDown = type === 'number' ? handleKeyDown : undefined;
  const defaultOnWheel = type === 'number' ? handleNumberValue : undefined;

  return {
    defaultSuffixOnClick,
    suffixClasses,
    defaultSuffixIcon,
    defaultOnKeyDown,
    defaultOnWheel,
  };
}
