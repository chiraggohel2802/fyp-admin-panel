/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ListContext } from './ListContext';
import useTableHandlers from 'hooks/useTableHandlers';
import useGetList from 'hooks/useGetList';

export const ListProvider = ({ children, value }) => {
  const {
    searchValue,
    currentPage,
    pageSize,
    handleSearch,
    handleNextPage,
    handlePreviousPage,
    handlePageSizeChange,
  } = useTableHandlers();

  const { data, refetchList, isLoadingList } = useGetList({
    search: searchValue,
    page: currentPage,
    limit: pageSize,
    api_endpoint: value.api_endpoint,
    isPaginate: value.isPaginate ?? true, // Default to true if not provided
  });

  return (
    <ListContext.Provider
      value={{
        data,
        refetchList,
        isLoadingList,
        handlePreviousPage,
        handleNextPage,
        handlePageSizeChange,
        handleSearch,
        pageSize,
        currentPage,
        searchValue,
        isPaginate: value.isPaginate ?? true,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useRoleListContext must be used within a ListProvider');
  }
  return context;
};
