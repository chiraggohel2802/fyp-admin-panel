/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import styles from './table.module.css';
import TableColumn from './components/TableColumn';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TableFooter from './components/TableFooter';
import classNames from 'classnames';

const Table = (props) => {
  const {
    columns,
    customStyles,
    useCustomTableBody,
    CustomTableBody,
    variant,
    hideFooter,
  } = props;

  return (
    <div
      style={customStyles}
      className={classNames(styles.tableContainer, {
        [styles.blackAndWhite]: variant === 'blackAndWhite',
      })}
    >
      <div className={styles.scrollableTable}>
        <table className={styles.table}>
          <colgroup>
            {columns?.map(({ style, field }, index) => (
              <TableColumn key={`${field}${index}`} customStyles={style} />
            ))}
          </colgroup>
          <TableHeader {...props} />

          {useCustomTableBody ? (
            CustomTableBody && <CustomTableBody />
          ) : (
            <TableBody {...props} />
          )}
        </table>
      </div>

      {!hideFooter && <TableFooter {...props} />}
    </div>
  );
};

export default memo(Table);
