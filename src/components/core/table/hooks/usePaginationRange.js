import { useCallback, useMemo } from 'react';

const usePaginationRange = (props) => {
  const { currentPage = 0, rowsCount = 0, pageSize = 10 } = props;

  const getLabelDisplayedRowsTo = useCallback(() => {
    if (rowsCount === -1) {
      return currentPage * pageSize;
    }
    return pageSize === -1
      ? rowsCount
      : Math.min(rowsCount, currentPage * pageSize);
  }, [currentPage, pageSize, rowsCount]);

  const labelDisplayedRows = ({ from, to, count }) => {
    return `${from} – ${to} of ${count !== -1 ? count : `more than ${to}`}`;
  };

  const getPageRange = useCallback(() => {
    if (rowsCount === -1) {
      return currentPage * pageSize;
    }
    const from = rowsCount === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const to = getLabelDisplayedRowsTo();
    const count = rowsCount === -1 ? -1 : rowsCount;
    const labelRange = labelDisplayedRows({ from, to, count });
    return labelRange;
  }, [currentPage, getLabelDisplayedRowsTo, pageSize, rowsCount]);

  const paginationRange = useMemo(() => {
    const rangeLabel = getPageRange();
    const isDisabledPreButton = currentPage === 1;
    const isDisabledNextButton =
      rowsCount !== -1 ? currentPage >= Math.ceil(rowsCount / pageSize) : false;
    return { rangeLabel, isDisabledPreButton, isDisabledNextButton };
  }, [getPageRange, currentPage, rowsCount, pageSize]);

  return { paginationRange, getPageRange };
};

export default usePaginationRange;
