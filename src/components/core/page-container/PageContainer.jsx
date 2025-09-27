import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../button-component/Button';
import styles from './pageContainer.module.css';
import HelmetComponent from '../helmet/Helment';
import PropTypes from 'prop-types';

const PageContainer = (props) => {
  const {
    heading,
    subHeading,
    children,
    buttonProps,
    hasButton,
    scripts = [],
  } = props;

  return (
    <div className={styles.content}>
      <HelmetComponent title={heading}>
        {scripts.length > 0 ? scripts.map((script) => <>{script}</>) : ''}
      </HelmetComponent>
      <div className={styles.titleContainer}>
        <div className={styles.titles}>
          <div className={styles.title}>{heading}</div>
          {subHeading && <div className={styles.subTitle}>{subHeading}</div>}
        </div>
        <div className={styles.searhAndButtonGroup}>
          {hasButton && (
            <Button className={styles.outlineBtn} {...buttonProps} />
          )}
        </div>
      </div>
      {children ?? <Outlet />}
    </div>
  );
};

PageContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  children: PropTypes.node,
  buttonProps: PropTypes.object,
  hasButton: PropTypes.bool,
  scripts: PropTypes.array,
};

export default memo(PageContainer);
