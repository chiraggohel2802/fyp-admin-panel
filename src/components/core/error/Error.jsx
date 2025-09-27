import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './error.module.css';

const Error = ({ error }) => <p className={styles.error}>{error}</p>;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default memo(Error);
