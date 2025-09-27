import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { useMutation } from '@tanstack/react-query';
import useError from 'hooks/useError';
import { putRequest } from 'api/apiRequest';
import { HERO_SECTION } from 'api/apiEndPoints';

/**
 * Custom hook to handle form submission for edit a hero section.
 *
 * @returns {Object} An object containing the handleFormSubmit function.
 */
export default function useFormSubmit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { triggerError } = useError();

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) return resolve('');
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  /**
   * Mutation to handle the API request for edit a hero section.
   * @param {HeroSectionApiProps} data - The hero section data to be sent in the API request.
   * @returns {Promise} The result of the API request.
   */
  const editHeroSectionMutate = useMutation({
    mutationFn: (data) => {
      const reqData = {
        ...data,
      };

      return putRequest(`${HERO_SECTION.EDIT}/${id}`, reqData);
    },
  });

  /**
   * Function to handle form submission.
   * @param {HeroSectionFormValues} values - The form values to be submitted.
   * @returns {Promise} The result of the form submission.
   */
  const handleFormSubmit = async (values) => {
    const image =
      values.image instanceof File
        ? await fileToBase64(values.image)
        : values.image;

    const payload = {
      ...values,
      image,
    };
    return editHeroSectionMutate.mutateAsync(payload, {
      onSuccess: (response) => {
        toast.success(response?.message || 'Hero Section Updated'); // Show success toast notification
        navigate(ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.INDEX); // Navigate to the hero section management page
      },
      onError: (error) => triggerError(error), // Trigger error handling
    });
  };

  return { handleFormSubmit };
}