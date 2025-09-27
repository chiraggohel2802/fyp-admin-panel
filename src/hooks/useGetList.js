import { useQuery } from '@tanstack/react-query';
import { getRequest } from 'api/apiRequest';

/**
 * Custom hook to fetch the list of roles using React Query.
 *
 * @param {Object} params - The parameters for fetching the list.
 * @param {string} params.search - The search query.
 * @param {number} params.page - The current page number.
 * @param {number} params.limit - The number of items per page.
 * @param {number} params.api_endpoint - The number of items per page.
 * @returns {Object} - An object containing the  list, loading state, and refetch function.
 * @property {Array} List - The list of s.
 * @property {boolean} isLoadingList - Loading state for the  list.
 * @property {Function} refetchList - Function to refetch the  list.
 */
export default function useGetList({
  search,
  page,
  limit,
  api_endpoint,
  isPaginate,
  select,
  enabled,
}) {
  const checkIsPaginate = isPaginate
    ? {
        sortMode: 'desc',
        sortBy: 'createdAt',
        search: search,
        offset: page,
        limit: limit,
      }
    : {};
  const {
    data,
    refetch: refetchList,
    isFetching: isLoadingList,
  } = useQuery({
    queryKey: isPaginate ? [api_endpoint, search, page, limit] : [api_endpoint], // Unique query key with search ,page ,limit
    queryFn: () => getRequest(api_endpoint, checkIsPaginate), // Function to fetch role list
    select: select ? (response) => select(response?.data) : undefined,
    enabled: enabled,
  });
  return { data, isLoadingList, refetchList };
}
