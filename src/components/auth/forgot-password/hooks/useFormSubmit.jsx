import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postRequest } from 'api/apiRequest';
import { AUTH } from 'api/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import useError from 'hooks/useError';

export default function useFormSubmit() {
  const navigate = useNavigate();
  const { triggerError } = useError();

  // Intialize forgot password mutation
  const forgotPasswordMutate = useMutation({
    mutationFn: (data) => postRequest(AUTH.FORGOT_PASSWORD, data),
  });

  // Function to handle form submission
  const handleFormSubmit = async (values) => {
    return forgotPasswordMutate.mutateAsync(values, {
      onSuccess: (response) => {
        toast.success(response?.message || 'Success'); // Show success toast message
        navigate(ROUTES_ENUMS.AUTH.LOGIN); // Navigate to login page after successful password reset
      },
      onError: (error) => triggerError(error), // Callback when mutation fails, trigger error handling
    });
  };

  return { handleFormSubmit };
}
