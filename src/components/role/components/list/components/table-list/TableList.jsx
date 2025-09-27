import { TableMaster } from 'components/core';
import useRowCols from '../../hooks/useRowCols';
import useDeleteRole from '../../hooks/useDeleteRole';
import Details from '../details/Details';
import { useListContext } from 'context/table-list/ListProvider';
import useRole from 'components/user-management/role/hooks/useRole';
import React from 'react';
import { useAuth } from 'context/auth/AuthContext';
import { PERMISSIONS } from 'constants/config.constants';

const TableList = () => {
  const listContext = useListContext();
  const { handleDeleteRole } = useDeleteRole(listContext.refetchList);
  const { rows, columns } = useRowCols(
    listContext.data?.roles,
    listContext.refetchList
  );
  const { handleEditRole } = useRole();
  const { checkPermission } = useAuth();

  return (
    <TableMaster
      rows={rows}
      columns={columns}
      onEdit={handleEditRole}
      onDelete={handleDeleteRole}
      ViewModel={Details}
      totalRecords={listContext.data?.totalRecords}
      hideDeleteButton={
        !checkPermission([PERMISSIONS.USER_MANAGEMENT.ROLE.DELETE])
      }
      hideEditButton={
        !checkPermission([PERMISSIONS.USER_MANAGEMENT.ROLE.UPDATE])
      }
    />
  );
};

export default TableList;
