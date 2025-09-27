import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader, PuffLoader } from 'react-spinners';
import styles from './pageLoader.module.css';

const PageLoader = ({ type = 'component', size = 50, customStyles }) => {
  const loaderStyles = {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    ...(customStyles || {}),
  };

  return (
    <div
      style={
        type === 'component'
          ? { height: '50vh', ...loaderStyles }
          : { width: '100%', height: '90vh', ...loaderStyles }
      }
    >
      {type === 'component' ? (
        <ClipLoader className={styles.loader} size={size} />
      ) : (
        <PuffLoader
          className={styles.loader}
          size={size * 2}
          speedMultiplier={3}
        />
      )}
    </div>
  );
};

PageLoader.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  customStyles: PropTypes.object,
};

export default memo(PageLoader);
