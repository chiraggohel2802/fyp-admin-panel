/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import styles from './tableSearch.module.css';
import TextField from '../text-field/TextField';

const TableSearch = (props) => {
  const { handleSearch } = props;

  return (
    <div className={styles.searchBoxContainer}>
      <TextField
        placeholder="Search..."
        onChange={handleSearch}
        inputClassName={styles.searchBox}
      />
    </div>
  );
};

export default memo(TableSearch);
