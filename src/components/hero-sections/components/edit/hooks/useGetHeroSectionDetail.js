import { useQuery } from '@tanstack/react-query';
import { HERO_SECTION } from 'api/apiEndPoints';
import { getRequest } from 'api/apiRequest';
import { formIntialValues } from 'components/hero-sections/constant';
import { useParams } from 'react-router-dom';
import { GetFormValues } from 'utils/CommonFun';

/**
 * Custom hook to fetch the details of a single hero section using React Query.
 *
 * @param {string} id - The ID of the hero section to fetch details for.
 * @returns {Object} - An object containing the hero section details and loading state.
 * @property {Object} heroSectionDetails - The details of the hero section.
 * @property {boolean} isLoadingHeroSectionDetails - Loading state for the hero section details.
 */
export default function useGetHeroSectionDetail() {
  const { id } = useParams();
  const { data: heroSectionDetails, isFetching: isLoadingHeroSectionDetails } = useQuery({
    queryKey: ['get-single-hero-section-detail', id], // Unique query key with hero section ID
    queryFn: () => getRequest(`${HERO_SECTION.SINGLEDETAIL}/${id}`), // Function to fetch hero section details
    enabled: !!id, // Function to fetch hero section details
    select: (responseData) => {
      console.log('responseData', responseData);
      const heroSectionDetailsData = {
        ...responseData.data,
      };
      return GetFormValues(heroSectionDetailsData, formIntialValues);
    },
  });
  return { heroSectionDetails, isLoadingHeroSectionDetails };
}