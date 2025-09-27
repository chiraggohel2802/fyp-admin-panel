import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { useMutation } from '@tanstack/react-query';
import useError from 'hooks/useError';
import { putRequest } from 'api/apiRequest';
import { THERAPIST } from 'api/apiEndPoints';

/**
 * Custom hook to handle form submission for edit a role.
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
   * Mutation to handle the API request for edit a role.
   * @param {RoleApiProps} data - The role data to be sent in the API request.
   * @returns {Promise} The result of the API request.
   */
  const editRoleMutate = useMutation({
    mutationFn: (data) => {
      // Transform permissions to include only their values
      const reqData = {
        ...data,
      };

      return putRequest(`${THERAPIST.EDIT}/${id}/sequence`, reqData);
    },
  });

  /**
   * Function to handle form submission.
   * @param {RoleFormValues} values - The form values to be submitted.
   * @returns {Promise} The result of the form submission.
   */
  const handleFormSubmit = async (values) => {
     const image =
      values.profilePic instanceof File
        ? await fileToBase64(values.profilePic)
        : values.profilePic;
    return editRoleMutate.mutateAsync({
      ...values,
      profile: image,
    }, {
      onSuccess: (response) => {
        toast.success(response?.message || 'Therapist Updated'); // Show success toast notification
        navigate(ROUTES_ENUMS.THERAPIST_MANAGEMENT.INDEX); // Navigate to the role management page
      },
      onError: (error) => triggerError(error), // Trigger error handling
    });
  };

  return { handleFormSubmit };
}
