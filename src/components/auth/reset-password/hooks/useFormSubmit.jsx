import { toast } from 'react-toastify';

/**
 * Custom hook to handle reset password  form submission.
 */
export default function useFormSubmit() {
  // Function to handle form submission
  const handleFormSubmit = async () => {
    toast.success('Success');
  };

  return { handleFormSubmit };
}
