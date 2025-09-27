import { TableMaster } from 'components/core';
import useRowCols from '../../hooks/useRowCols';
import { useListContext } from 'context/table-list/ListProvider';
import React from 'react';
import useFooterCMS from 'components/footer-cms-module/hooks/useFooterCMS';
import useDeleteFooter from '../../hooks/useDeleteFooter';

const TableList = () => {
  const listContext = useListContext();
  const { rows, columns } = useRowCols(
    listContext.data?.data,
    listContext.refetchList
  );
  const { handleDeleteFooter } = useDeleteFooter(listContext.refetchList);
  const { handleEditFooterCms } = useFooterCMS();

  return (
    <TableMaster
      rows={rows}
      columns={columns}
      onEdit={handleEditFooterCms}
      onDelete={handleDeleteFooter}
      totalRecords={listContext.data?.totalRecords}
      // hideDeleteButton={true}
      hideEditButton={false}
      hideFooter={true}
      hideViewButton={true}
    />
  );
};

export default TableList;
