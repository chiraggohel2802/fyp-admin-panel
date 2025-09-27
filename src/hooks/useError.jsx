import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const useError = () => {
  const triggerError = (error) => {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data.message || 'Something went wrong!!');
    } else if (error.message) {
      toast.error(error.message);
    } else {
      toast.error('Something went wrong!!');
    }
  };
  return { triggerError };
};

export default useError;
