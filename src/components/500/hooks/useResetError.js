import { useAuth } from 'context/auth/AuthContext';
import ROUTES_ENUMS from 'routes/url.enum';

const useResetError = ({ resetErrorBoundary }) => {
  const { isAuthenticate } = useAuth();
  const isAuthenticated = isAuthenticate();
  const resetError = () => {
    resetErrorBoundary();
    if (!isAuthenticated) {
      window.location.href = ROUTES_ENUMS.AUTH.LOGIN;
    } else {
      window.location.href = ROUTES_ENUMS.DASHBOARD.INDEX;
    }
  };
  return { resetError };
};

export default useResetError;
