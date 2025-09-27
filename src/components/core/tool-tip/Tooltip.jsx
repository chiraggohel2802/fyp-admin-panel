/* eslint-disable react/prop-types */
import styles from './tooltip.module.css';
import React, { memo } from 'react';

const Tooltip = ({ heading, items, text, baseTextStyles }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText} style={baseTextStyles}>
        {text}
      </span>
      <div className={styles.tooltipContent}>
        {heading && <span className={styles.heading}>{heading}</span>}

        {items.map(({ icon, text }, index) => (
          <div className={styles.itemsBox} key={`tooltip-core-${index}`}>
            {icon && <span className={styles.iconStyle}> {icon}</span>}
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Tooltip);
