import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import useError from 'hooks/useError';
import { deleteRequest } from 'api/apiRequest';
import { FOOTER_MENU } from 'api/apiEndPoints';
import { Confirmation } from 'utils/SweetAlert';

/**
 * Custom hook to handle role deletion.
 *
 * @param {Function} refetchFootermenuList - Function to refetch the role list after deletion.
 * @returns {Object} - An object containing the handleDeleteRole function.
 * @property {Function} handleDeleteRole - Function to handle deleting a role.
 */

export default function useDeleteFooter(refetchFootermenuList) {
  const { triggerError } = useError();

  /**
   * Mutation to handle the API request for delete role.
   * @param {string} id - The role id to be sent in the API request.
   * @returns {Promise} The result of the API request.
   */
  const deleteRoleMutation = useMutation({
    mutationFn: (id) => deleteRequest(`${FOOTER_MENU.DELETE}/${id}`),
    onSuccess: (response) => {
      refetchFootermenuList(); //role list refetching data
      toast.success(response?.message || 'Footer menu Deleted'); // Show success toast notification
    },
    onError: (error) => triggerError(error), // Trigger error handling
  });

  /**
   * Function to handle delete role confirmation
   * @param {HandleDeleteRoleProps} id - The form values to be confirm.
   * @returns {Promise} The result of the form confirmation.
   */
  const handleDeleteFooter = async (id) => {
    Confirmation('Are you sure you want to delete this footer menu?').then(
      async (deleteConfirm) => {
        if (deleteConfirm.isConfirmed) {
          await deleteRoleMutation.mutateAsync(id);
        }
      }
    );
  };

  return { handleDeleteFooter };
}
