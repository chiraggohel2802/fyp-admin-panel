import { useQuery } from '@tanstack/react-query';
import { ROLE } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';
import { formIntialValues } from 'components/user-management/role/constant';
import { useParams } from 'react-router-dom';
import { GetFormValues } from 'utils/CommonFun';

/**
 * Custom hook to fetch the details of a single role using React Query.
 *
 * @param {string} id - The ID of the role to fetch details for.
 * @returns {Object} - An object containing the role details and loading state.
 * @property {Object} roleDetails - The details of the role.
 * @property {boolean} isLoadingRoleDetails - Loading state for the role details.
 */
export default function useGetRoleDetail() {
  const { id } = useParams();
  const { data: roleDetails, isFetching: isLoadingRoleDetails } = useQuery({
    queryKey: ['get-single-role-detail', id], // Unique query key with role ID
    queryFn: () => getRequest(`${ROLE.SINGLEDETAIL}${id}`), // Function to fetch role details
    enabled: !!id, // Function to fetch role details
    select: (responseData) => {
      const roleDetailsData = {
        ...responseData,
        permissions: responseData?.permissions?.map((permission) => {
          return {
            label: permission?.name,
            value: permission?.id,
          };
        }),
      };
      return GetFormValues(roleDetailsData, formIntialValues);
    },
  });
  return { roleDetails, isLoadingRoleDetails };
}
