import { useState, useEffect } from 'react';
import { getLocalItem } from 'storage/localStorage';

// Custom hook to verify user permissions
const usePermissions = () => {
  const [hasPermission, setHasPermission] = useState({});
  const { permissions } = getLocalItem('user_data');

  useEffect(() => {
    const permissionMap = {};
    permissions.forEach((permission) => {
      permissionMap[permission] = true;
    });
    setHasPermission(permissionMap);
  }, [permissions]);

  // Updated function to check multiple permissions
  const checkPermission = (requiredPermissions) => {
    if (!Array.isArray(requiredPermissions)) {
      throw new Error('Expected an array of permissions');
    }
    return requiredPermissions.every((permission) => hasPermission[permission]);
  };

  return { checkPermission };
};

export default usePermissions;
