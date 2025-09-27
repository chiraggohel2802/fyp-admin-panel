import { useQuery } from '@tanstack/react-query';
import { FOOTER_MENU } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';
import { formIntialValues } from 'components/footer-cms-module/constant';
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
export default function useGetFooterCmsDetail() {
  const { id } = useParams();
  const { data: footerCmsDetails, isFetching: isLoadingFooterCmsDetails } = useQuery({
    queryKey: ['get-single-footer-cms-detail', id], // Unique query key with role ID
    queryFn: () => getRequest(`${FOOTER_MENU.SINGLEDETAIL}/${id}`), // Function to fetch role details
    enabled: !!id, // Function to fetch role details
    select: (responseData) => {
      const footerCmsDetailsData = {
        ...responseData.data,
      };
      return GetFormValues(footerCmsDetailsData, formIntialValues);
    },
  });
  return { footerCmsDetails, isLoadingFooterCmsDetails };
}
