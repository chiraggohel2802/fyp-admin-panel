import { createContext, useContext } from 'react';
import { getLocalItem, setLocalItem } from 'storage/localStorage';
import { STORAGE } from 'storage/localStorageEnum';

const setUserToLocalStorage = (data) => {
  setLocalItem(STORAGE.USER_DATA, data.user_details);
  setLocalItem(STORAGE.TOKEN, data.token);
};

const AuthContext = createContext({
  user: getLocalItem(STORAGE.USER_DATA),
  setUser: () => null,
  checkPermission: () => null,
  checkOptionalPermission: () => null,
  isAuthenticate: () => false,
});

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContext, setUserToLocalStorage };
