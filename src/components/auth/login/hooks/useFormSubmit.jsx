import { useMutation } from '@tanstack/react-query';
import useError from 'hooks/useError';
import { postRequest } from 'api/apiRequest';
import { AUTH } from 'api/apiEndPoints';
import { useAuth } from 'context/auth/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';

/**
 * Custom hook to handle login form submission.
 */
export default function useFormSubmit() {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Access user authentication context
  const { triggerError } = useError(); // Custom hook for error handling

  // Initialize login mutation using React Query
  const loginMutate = useMutation({
    mutationFn: (data) => postRequest(AUTH.LOGIN, data), // API call to authenticate user
  });

  // Function to handle form submission
  const handleFormSubmit = async (values) => {
    return loginMutate.mutateAsync(
      { ...values, userType: 'SUPER_ADMIN' },
      {
        onSuccess: (response) => {
          console.log('Login response:', response);
          setUser({
            userDet: response.data.admin,
            token: response.data.token.accessToken,
          }); // Set user details and token in context
          navigate(ROUTES_ENUMS.DASHBOARD.INDEX); // Navigate to dashboard upon successful login
          toast.success(response?.message || 'Success'); // Display success message using toast notification
        },
        onError: (error) => triggerError(error), // Handle errors using error handling hook
      }
    );
  };

  return { handleFormSubmit };
}
