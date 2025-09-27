/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AuthContext, setUserToLocalStorage } from './AuthContext';
import { getLocalItem } from 'storage/localStorage';
import { STORAGE } from 'storage/localStorageEnum';

export const AuthProvider = ({ children }) => {
  const [user, addUser] = useState(getLocalItem(STORAGE.USER_DATA));

  /* const formatPermissions = (permissionsArr) => {
    const permissionMap = {};
    if (permissionsArr && permissionsArr.length > 0) {
      permissionsArr.forEach((permission) => {
        permissionMap[permission] = true;
      });
    }
    return permissionMap;
  }; */

  /* const [permissions, setPermissions] = useState(
    formatPermissions(user?.permissions || [])
  ); */

  const setUser = (currentUser) => {
    setUserToLocalStorage({
      user_details: currentUser.userDet,
      token: currentUser.token,
    });
    addUser(currentUser?.userDet);
    if (
      currentUser?.userDet?.permissions &&
      currentUser?.userDet?.permissions.length > 0
    ) {
      // setPermissions(formatPermissions(currentUser?.userDet?.permissions));
    }
  };

  const isAuthenticate = () => !!user;

  const checkPermission = () => {
    //requiredPermissions
    return true;
    /* if (!Array.isArray(requiredPermissions)) {
      throw new Error('Expected an array of permissions');
    }
    return requiredPermissions.every((permission) => permissions[permission]); */
  };

  const checkOptionalPermission = () => {
    //requiredPermissions
    return true;
    /* if (!Array.isArray(requiredPermissions)) {
      throw new Error('Expected an array of permissions');
    }
    return requiredPermissions.some((permission) => permissions[permission]); */
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticate,
        checkPermission,
        checkOptionalPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
