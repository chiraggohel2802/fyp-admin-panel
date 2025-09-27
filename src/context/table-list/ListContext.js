import { createContext, useContext } from 'react';
const ListContext = createContext({
  data: undefined,
  refetchList: async () => null,
  isLoadingList: false,
  currentPage: 0,
  isPaginate: true,
  pageSize: 0,
  searchValue: '',
  handleNextPage: () => null,
  handlePreviousPage: function () {
    throw new Error('Function not implemented.');
  },
  handlePageSizeChange: function () {
    throw new Error('Function not implemented.');
  },
  handleSearch: function () {
    throw new Error('Function not implemented.');
  },
});

const useRole = () => useContext(ListContext);

export { useRole, ListContext };
