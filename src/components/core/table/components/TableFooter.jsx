import styles from '../table.module.css';
import React from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import usePaginationRange from '../hooks/usePaginationRange';
import DropDown from 'components/core/drop-down/DropDown';
import { tablePerPageOption } from '../table.constants';
import PropTypes from 'prop-types';

const TableFooter = (props) => {
  const {
    rowsCount,
    nextButtonOnClick,
    backButtonOnClick,
    currentPage,
    pageSize,
    isCustomPageRange = false,
    customPageRange,
    handlePageRange,
  } = props;
  const { paginationRange } = usePaginationRange({
    rowsCount,
    currentPage,
    pageSize,
  });

  return (
    <div className={styles.footer}>
      <div className={styles.contentBox}>
        <DropDown
          field="pageLimit"
          hideErrorSpace
          value={
            isCustomPageRange
              ? customPageRange?.find((ctr) => ctr.value === pageSize)
              : tablePerPageOption?.find((ctr) => ctr.value === pageSize)
          }
          options={isCustomPageRange ? customPageRange : tablePerPageOption}
          controllerStyles={{
            fontSize: '0.75rem',
          }}
          menuListClass={{
            overflow: 'hidden',
          }}
          isSearchable={false}
          onChange={handlePageRange}
        />
        {paginationRange.rangeLabel}
        <span className={styles.arrows}>
          <button
            type="button"
            disabled={paginationRange.isDisabledPreButton}
            onClick={backButtonOnClick}
          >
            <MdOutlineKeyboardArrowLeft size={20} />
          </button>
          <button
            type="button"
            disabled={paginationRange.isDisabledNextButton}
            onClick={nextButtonOnClick}
          >
            <MdOutlineKeyboardArrowRight size={20} />
          </button>
        </span>
      </div>
    </div>
  );
};

TableFooter.propTypes = {
  rowsCount: PropTypes.number.isRequired,
  nextButtonOnClick: PropTypes.func.isRequired,
  backButtonOnClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  isCustomPageRange: PropTypes.bool,
  customPageRange: PropTypes.array,
  handlePageRange: PropTypes.func.isRequired,
};

export default TableFooter;
