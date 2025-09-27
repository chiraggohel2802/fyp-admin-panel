import React, { memo } from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './buttonLoader.module.css';

function ButtonLoader() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <ClipLoader className={styles.loader} size={25} />
    </div>
  );
}

export default memo(ButtonLoader);
