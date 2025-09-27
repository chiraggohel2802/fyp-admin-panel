import { useState } from 'react';

/**
 * Custom hook to manage table interactions such as search, pagination, and role editing.
 *
 * @returns {Object} - An object containing state variables and handler functions for table interactions.
 * @property {string} searchValue - The current search query.
 * @property {number} currentPage - The current page number.
 * @property {number} pageSize - The number of items per page.
 * @property {Function} handleSearch - Function to handle search input change.
 * @property {Function} handleNextPage - Function to handle pagination to the next page.
 * @property {Function} handlePreviousPage - Function to handle pagination to the previous page.
 * @property {Function} handlePageSizeChange - Function to handle changing the page size.
 * @property {Function} handleEditRole - Function to navigate to the edit role page.
 */
export default function useTableHandlers() {
  // State variables for search, pagination, and page size
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  let timerId;

  /**
   * Function to handle search input change.
   * Sets current page to 1 and updates the search value.
   *
   * @param {Object} e - Event object containing the search input value.
   */
  const handleSearch = (e) => {
    // Clear previous timer
    clearTimeout(timerId);

    // Set a new timer
    timerId = setTimeout(() => {
      setCurrentPage(1);
      setSearchValue(e.target.value);
      // Perform search operation here, like fetching data
    }, 500); // Adjust delay as needed (e.g., 500 milliseconds)
  };

  /**
   * Function to handle pagination to the next page.
   * Increments the current page by 1.
   */
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  /**
   * Function to handle pagination to the previous page.
   * Decrements the current page by 1, unless it's already the first page (currentPage === 1).
   */
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  /**
   * Function to handle changing the page size.
   * Updates the page size and resets the current page to 0.
   *
   * @param {Object} e - Event object containing the selected page size value.
   */
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.value));
    setCurrentPage(1);
  };

  // Return state variables and handler functions
  return {
    searchValue,
    currentPage,
    pageSize,
    handleSearch,
    handleNextPage,
    handlePreviousPage,
    handlePageSizeChange,
  };
}
