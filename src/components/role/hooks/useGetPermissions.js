import { useQuery } from '@tanstack/react-query';
import { PERMISSION } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';

/**
 * Custom hook to get permissions.
 * Uses react-query to fetch and cache the permissions data.
 *
 * @return {Object} The permissions data, loading state, and refetch function.
 * @property {Array} permissions - The transformed permissions data.
 * @property {boolean} isLoadingPermissionList - Loading state of the permissions data.
 * @property {function} refetchPermissions - Function to refetch the permissions data.
 */
export default function useGetPermissions() {
  const {
    data,
    refetch: refetchPermissions,
    isLoading: isLoadingPermissionList,
  } = useQuery({
    queryKey: ['permissions-options'],
    queryFn: () => getRequest(PERMISSION.LIST),
    select: (data) => {
      // Transform the data to include label and value properties for each permission
      return data.data.map((item) => ({
        ...item,
        label: item.name,
        value: item.id,
      }));
    },
  });
  return { permissions: data, isLoadingPermissionList, refetchPermissions };
}
