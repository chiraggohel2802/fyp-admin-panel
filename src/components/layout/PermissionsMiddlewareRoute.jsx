import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'context/auth/AuthContext';
import ROUTES_ENUMS from 'routes/url.enum';

const PermissionsMiddlewareRoute = ({ children, requiredPermissions }) => {
  const navigate = useNavigate();
  const { isAuthenticate, checkPermission } = useAuth();
  const isAccessTokenValid = isAuthenticate();

  if (!isAccessTokenValid) {
    navigate(ROUTES_ENUMS.AUTH.LOGIN);
  }

  const hasPermission = checkPermission(requiredPermissions);

  if (!hasPermission) {
    return <Navigate to={ROUTES_ENUMS[401]} />;
  }

  return children;
};

PermissionsMiddlewareRoute.propTypes = {
  children: PropTypes.element.isRequired,
  requiredPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PermissionsMiddlewareRoute;
