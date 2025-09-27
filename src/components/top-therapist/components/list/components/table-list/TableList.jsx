import { TableMaster } from 'components/core';
import useRowCols from '../../hooks/useRowCols';
import { useListContext } from 'context/table-list/ListProvider';
import React from 'react';
import useTherapist from 'components/top-therapist/hooks/useTherapist';

const TableList = () => {
  const listContext = useListContext();
  const { rows, columns } = useRowCols(
    listContext.data?.data?.dataList,
    listContext.refetchList
  );
  const { handleEditTherapist } = useTherapist();

  return (
    <TableMaster
      rows={rows}
      columns={columns}
      onEdit={handleEditTherapist}
      totalRecords={listContext.data?.data?.meta?.totalRecords}
      hideDeleteButton={true}
      hideEditButton={false}
      hideFooter={true}
      hideViewButton={true}
    />
  );
};

export default TableList;
