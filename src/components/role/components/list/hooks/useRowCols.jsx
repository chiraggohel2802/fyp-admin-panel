import styles from '../list.module.css';
import { ROLE as ROLE_API } from 'api/apiEndPoints';
import { PERMISSIONS, TABLE } from 'constants/config.constants';
import useGlobalHook from 'hooks/useGlobalHook';
import { StatusBadge } from 'components/core';
import { ROLE } from 'components/user-management/role/constant';
import React from 'react';
import { useAuth } from 'context/auth/AuthContext';

const columnFields = [
  { key: 'name', title: ROLE.FORM.NAME_FIELD_LABEL },
  { key: 'permission', title: ROLE.FORM.PERMISSIONS_FIELD_LABEL },
  { key: 'description', title: ROLE.FORM.DESCRIPTION_FIELD_LABEL },
  ...TABLE.LIST_COMMON_COLUMN,
];

/**
 * Custom hook to format row and column data for the role list table.
 *
 * @param {Array} data - The raw role data.
 * @returns {Object} - An object containing the formatted rows and columns.
 * @property {Array} rows - The formatted row data.
 * @property {Array} columns - The formatted column data.
 */
export default function useRowCols(data, refetchList) {
  const { checkPermission } = useAuth();
  const { tableListCommonColumns } = useGlobalHook(
    ROLE_API.CHANGE_STATUS,
    refetchList,
    !checkPermission([PERMISSIONS.USER_MANAGEMENT.ROLE.UPDATE])
  );

  const columns = columnFields.map(({ key, title }) => ({
    field: key,
    headerName: title,
  }));

  /**
   * ransform the data to include new fields and edit fields
   *
   * @param {Array} permission - selected permission oprions with label and value key
   * @param {string} description - descriptions add the text limit 30 with ... continue sign
   * @param {string} createdAt - update createdAt field for show the registerd date
   */
  const rows = data?.map((data) => {
    return {
      ...data,
      permission: (
        <div className="d-flex flex-wrap gap-2">
          {data?.permissions?.map((item) => (
            <StatusBadge
              key={`role-list-permissions-${item?.id}`}
              badge="Info"
              label={item?.name}
            />
          ))}
        </div>
      ),
      description: (
        <div className={styles.tableListDescription}>
          {data?.description?.length > 50
            ? data?.description.substring(0, 50) + '...'
            : data?.description}
        </div>
      ),
      ...tableListCommonColumns(data),
    };
  });

  return { rows, columns };
}
