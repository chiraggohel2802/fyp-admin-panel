import { TableMaster } from 'components/core';
import useRowCols from '../../hooks/useRowCols';
import { useListContext } from 'context/table-list/ListProvider';
import useSlider from 'components/slider/hooks/useSlider';
import React from 'react';
import useDeleteSlider from '../../hooks/useDeleteSlider';

const TableList = () => {
  const listContext = useListContext();
  const { handleDeleteSlider } = useDeleteSlider(listContext.refetchList)
  const { rows, columns } = useRowCols(
    listContext.data?.data,
    listContext.refetchList
  );
  const { handleEditSlider } = useSlider();

  return (
    <TableMaster
      rows={rows}
      columns={columns}
      onEdit={handleEditSlider}
      onDelete={handleDeleteSlider}
      totalRecords={listContext.data?.totalRecords}
      hideDeleteButton={false}
      hideEditButton={false}
      hideFooter={true}
      hideViewButton={true}
    />
  );
};

export default TableList;
