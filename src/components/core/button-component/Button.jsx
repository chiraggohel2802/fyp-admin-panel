import styles from './button.module.css';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text,
  prefix,
  suffix,
  type = 'button',
  variant = 'filled',
  className = '',
  ...props
}) => {
  const buttonClass =
    variant === 'filled' ? styles.filledBtn : styles.outlinedBtn;
  const combinedClassName = `${styles.coreBtn} ${buttonClass} ${className}`;

  return (
    <button type={type} className={combinedClassName} {...props}>
      {prefix && prefix}
      {text}
      {suffix && suffix}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Button);
