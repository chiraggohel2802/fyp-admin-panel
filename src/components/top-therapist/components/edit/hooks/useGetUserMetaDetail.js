import { useQuery } from '@tanstack/react-query';
import { THERAPIST } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';
import { formIntialValues } from 'components/top-therapist/constant';
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
export default function useGetUserMetaDetail() {
  const { id } = useParams();
  const { data: seoDetails, isFetching: isLoadingSeoDetails } = useQuery({
    queryKey: ['get-single-user-meta-detail', id], // Unique query key with role ID
    queryFn: () => getRequest(`${THERAPIST.SINGLEDETAIL}/${id}/sequence`), // Function to fetch role details
    enabled: !!id, // Function to fetch role details
    select: (responseData) => {
      console.log('responseData', responseData);
      const seoDetailsData = {
        ...responseData.data,
      };
      return GetFormValues(seoDetailsData, formIntialValues);
    },
  });
  return { seoDetails, isLoadingSeoDetails };
}
