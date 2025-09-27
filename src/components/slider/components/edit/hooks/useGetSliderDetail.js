import { useQuery } from '@tanstack/react-query';
import { SLIDER } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';
import { formIntialValues } from 'components/slider/constant';
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
export default function useGetSliderDetail() {
  const { id } = useParams();
  const { data: sliderDetails, isFetching: isLoadingSliderDetails } = useQuery({
    queryKey: ['get-single-slider-detail', id], // Unique query key with role ID
    queryFn: () => getRequest(`${SLIDER.SINGLEDETAIL}/${id}`), // Function to fetch role details
    enabled: !!id, // Function to fetch role details
    select: (responseData) => {
      console.log('responseData', responseData);
      const sliderDetailsData = {
        ...responseData.data,
      };
      return GetFormValues(sliderDetailsData, formIntialValues);
    },
  });
  return { sliderDetails, isLoadingSliderDetails };
}
