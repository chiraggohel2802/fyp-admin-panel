import { TableMaster } from 'components/core';
import useRowCols from '../../hooks/useRowCols';
import { useListContext } from 'context/table-list/ListProvider';
import useHeroSection from 'components/hero-sections/hooks/useHeroSection';
import React from 'react';

const TableList = () => {
  const listContext = useListContext();
  const { rows, columns } = useRowCols(
    listContext.data?.data,
    listContext.refetchList
  );
  const { handleEditHeroSection } = useHeroSection();

  return (
    <TableMaster
      rows={rows}
      columns={columns}
      onEdit={handleEditHeroSection}
      totalRecords={listContext.data?.totalRecords}
      hideDeleteButton={true}
      hideEditButton={false}
      hideFooter={true}
      hideViewButton={true}
    />
  );
};

export default TableList;