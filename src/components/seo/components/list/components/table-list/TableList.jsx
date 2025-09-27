import { TableMaster } from 'components/core';
import useRowCols from '../../hooks/useRowCols';
import { useListContext } from 'context/table-list/ListProvider';
import useSeo from 'components/seo/hooks/useSeo';
import React from 'react';

const TableList = () => {
  const listContext = useListContext();
  const { rows, columns } = useRowCols(
    listContext.data?.data,
    listContext.refetchList
  );
  const { handleEditSeo } = useSeo();

  return (
    <TableMaster
      rows={rows}
      columns={columns}
      onEdit={handleEditSeo}
      totalRecords={listContext.data?.totalRecords}
      hideDeleteButton={true}
      hideEditButton={false}
      hideFooter={true}
      hideViewButton={true}
    />
  );
};

export default TableList;
