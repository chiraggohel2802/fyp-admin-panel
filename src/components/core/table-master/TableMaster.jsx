/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import Table from '../table/Table';
import { useListContext } from 'context/table-list/ListProvider';
import { TABLE } from 'constants/config.constants';
import useModal from 'hooks/useModalHook';

const TableMaster = ({
  rows,
  columns,
  onEdit,
  onDelete,
  ViewModel,
  totalRecords = 0,
  ...props
}) => {
  const listContext = useListContext();
  const { isOpen, id, openModal, closeModal } = useModal();

  return (
    <React.Fragment>
      <Table
        editable
        sr
        srTitle="#"
        loading={listContext.isLoadingList}
        rows={rows}
        columns={columns}
        rowsCount={totalRecords}
        currentPage={listContext.currentPage}
        pageSize={listContext.pageSize}
        isPaginate={listContext.isPaginate}
        customStyles={TABLE.LIST_CUSTOM_STYLE}
        dataStyles={TABLE.LIST_DATA_STYLE}
        nextButtonOnClick={listContext.handleNextPage}
        backButtonOnClick={listContext.handlePreviousPage}
        handlePageRange={listContext.handlePageSizeChange}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={openModal}
        {...props}
      />
      {typeof ViewModel !== 'undefined' && (
        <ViewModel id={id} isOpen={isOpen} handleCloseBtn={closeModal} />
      )}
    </React.Fragment>
  );
};

export default memo(TableMaster);
