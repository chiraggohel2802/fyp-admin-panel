import { useQuery } from '@tanstack/react-query';
import { ROLE } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';
import { useGetStatus } from 'hooks/useGetStatus';

/**
 * Custom hook to fetch the details of a single role using React Query.
 *
 * @param {string} id - The ID of the role to fetch details for.
 * @returns {Object} - An object containing the role details and loading state.
 * @property {Object} roleDetails - The details of the role.
 * @property {boolean} isLoadingRoleDetails - Loading state for the role details.
 */
export default function useGetRoleDetail(id) {
  const { getStatusLabel } = useGetStatus(); //roleStatusLabels

  const { data: roleDetails, isLoading: isLoadingRoleDetails } = useQuery({
    queryKey: ['get-role-detail', id], // Unique query key with role ID
    queryFn: () => getRequest(`${ROLE.SINGLEDETAIL}${id}`), // Function to fetch role details
    enabled: !!id, // Function to fetch role details
    select: (data) => {
      // Transform the data here
      return {
        ...data,
        ...getStatusLabel(data.status),
      };
    },
  });
  return { roleDetails, isLoadingRoleDetails };
}
