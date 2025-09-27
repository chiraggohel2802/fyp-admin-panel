/* eslint-disable react/prop-types */
import React from 'react';
import TableActions from './TableActions';
import PageLoader from 'components/core/page-loader/PageLoader';

const TableBody = ({
  loading,
  columns,
  rows,
  editable,
  onView,
  onEdit,
  onDelete,
  dataStyles = {},
  hideDeleteButton,
  hideEditButton,
  hideViewButton,
  showCopyButton,
  sr,
  pageSize = 10,
  currentPage,
  // rowsCount,
}) => (
  <tbody>
    {loading === true && (
      <tr key="table-loading-tr" style={{ ...dataStyles }}>
        <td
          key="table-loading-td"
          style={{ ...dataStyles }}
          colSpan={columns.length + (sr ? 1 : 0) + (editable ? 1 : 0)}
        >
          <PageLoader />
        </td>
      </tr>
    )}
    {!loading && rows?.length === 0 ? (
      <tr key="table-zero-rows-tr" style={{ ...dataStyles }}>
        <td
          key="table-zero-rows-td"
          style={{ ...dataStyles, textAlign: 'center' }}
          colSpan={columns.length + (sr ? 1 : 0) + (editable ? 1 : 0)}
        >
          No Data.
        </td>
      </tr>
    ) : !loading ? (
      rows?.map((row, rowIndex) => {
        const { id = '' } = row || {};
        return (
          <tr key={`${rowIndex}-${id}`}>
            {editable && (
              <TableActions
                id={id}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
                hideDeleteButton={hideDeleteButton}
                hideEditButton={hideEditButton}
                showCopyButton={showCopyButton}
                hideViewButton={hideViewButton}
              />
            )}
            {sr && (
              <td style={{ ...dataStyles }}>
                {currentPage === 1
                  ? rowIndex + 1
                  : pageSize * (currentPage - 1) + (rowIndex + 1)}
              </td>
            )}
            {columns?.map(({ field, style = {} }, colIndex) => (
              <td
                key={`${colIndex}${field}${id}`}
                style={{ ...dataStyles, ...style }}
              >
                {row?.[field] || '-'}
              </td>
            ))}
          </tr>
        );
      })
    ) : (
      ''
    )}
  </tbody>
);

export default TableBody;
