import { useAuth } from 'context/auth/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { clearLocalStorage } from 'storage/localStorage';
import React from 'react';

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    clearLocalStorage();
    setUser({
      userDet: null,
      token: null,
    });
    navigate(ROUTES_ENUMS.AUTH.LOGIN);
  }, [navigate, setUser]);

  return <></>;
};

export default Logout;
