import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { useMutation } from '@tanstack/react-query';
import useError from 'hooks/useError';
import { postRequest } from 'api/apiRequest';
import { SLIDER } from 'api/apiEndPoints';

/**
 * Custom hook to handle form submission for adding a role.
 *
 * @returns {Object} An object containing the handleFormSubmit function.
 */
const useFormSubmit = () => {
  const navigate = useNavigate();
  const { triggerError } = useError();

  /**
   * Mutation to handle the API request for adding a role.
   * @param {RoleApiProps} data - The role data to be sent in the API request.
   * @returns {Promise} The result of the API request.
   */
  const addRoleMutate = useMutation({
    mutationFn: (data) => {
      // Transform permissions to include only their values
      const reqData = {
        ...data,
      };
      return postRequest(SLIDER.ADD, reqData);
    },
  });

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
   * Function to handle form submission.
   * @param {RoleFormValues} values - The form values to be submitted.
   * @returns {Promise} The result of the form submission.
   */
  const handleFormSubmit = async (values) => {
     const image =
      values.image instanceof File
        ? await fileToBase64(values.image)
        : values.image;
    const backgroundImage =
      values.backgroundImage instanceof File
        ? await fileToBase64(values.backgroundImage)
        : values.backgroundImage;
    const mobileImage =
      values.mobileImage instanceof File
        ? await fileToBase64(values.mobileImage)
        : values.mobileImage;
    const mobileBackgroundImage =
      values.mobileBackgroundImage instanceof File
        ? await fileToBase64(values.mobileBackgroundImage)
        : values.mobileBackgroundImage;

    const payload = {
      ...values,
      image,
      backgroundImage,
      mobileImage,
      mobileBackgroundImage,
    };
    return addRoleMutate.mutateAsync(payload, {
      onSuccess: (response) => {
        toast.success(response?.message || 'Slider Created'); // Show success toast notification
        navigate(ROUTES_ENUMS.SLIDER_MANAGEMENT.INDEX); // Navigate to the role management page
      },
      onError: (error) => triggerError(error), // Trigger error handling
    });
  };

  return { handleFormSubmit };
};

export { useFormSubmit };
