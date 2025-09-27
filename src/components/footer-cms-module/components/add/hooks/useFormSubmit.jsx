import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { useMutation } from '@tanstack/react-query';
import useError from 'hooks/useError';
import { postRequest } from 'api/apiRequest';
import { FOOTER_MENU } from 'api/apiEndPoints';

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

      return postRequest(FOOTER_MENU.ADD, reqData);
    },
  });

  /**
   * Function to handle form submission.
   * @param {RoleFormValues} values - The form values to be submitted.
   * @returns {Promise} The result of the form submission.
   */
  const handleFormSubmit = async (values) => {
    return addRoleMutate.mutateAsync(values, {
      onSuccess: (response) => {
        toast.success(response?.message || 'Footer cms Created'); // Show success toast notification
        navigate(ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.INDEX); // Navigate to the role management page
      },
      onError: (error) => triggerError(error), // Trigger error handling
    });
  };

  return { handleFormSubmit };
};

export { useFormSubmit };
