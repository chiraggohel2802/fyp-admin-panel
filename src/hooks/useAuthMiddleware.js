import { useAuth } from 'context/auth/AuthContext';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';

const useAuthMiddleware = () => {
  const navigate = useNavigate();
  const { isAuthenticate } = useAuth();
  const authMiddleware = useCallback(() => {
    const isAccessTokenValid = isAuthenticate();
    if (!isAccessTokenValid) {
      navigate(ROUTES_ENUMS.AUTH.LOGIN);
    }
  }, []);

  return { authMiddleware };
};

export default useAuthMiddleware;
