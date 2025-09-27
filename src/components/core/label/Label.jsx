import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './label.module.css';
import Tooltip from '../tool-tip/Tooltip';
import { BsInfoCircle } from 'react-icons/bs';

const Label = ({ text, required = false, className = '', toolTipText }) => {
  const labelClassName = `${styles.fieldLabel} ${className}`;

  return (
    <label className={labelClassName}>
      {text}
      {required && <span style={{ color: 'var(--error)' }}> * </span>}

      {toolTipText && (
        <Tooltip text={<BsInfoCircle />} items={[{ text: toolTipText }]} />
      )}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  toolTipText: PropTypes.string,
};

export default memo(Label);
