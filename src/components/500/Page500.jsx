/* eslint-disable react/prop-types */
import { NotFound } from 'assets/iconComponents';
import styles from './500.module.css';
import React, { memo } from 'react';
import useResetError from './hooks/useResetError';
import { BiUndo } from 'react-icons/bi';

const Page500 = ({ error, resetErrorBoundary }) => {
  const { resetError } = useResetError({ resetErrorBoundary, error });
  return (
    <div className={styles.container404}>
      <NotFound className={styles.icon} />
      <span className={styles.text}>{error.message}</span>
      <span className={styles.link} onClick={resetError}>
        <BiUndo fontSize={35} />
        Reset Error
      </span>
    </div>
  );
};

export default memo(Page500);
