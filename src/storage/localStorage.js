import secureLocalStorage from 'react-secure-storage';

export const getLocalItem = (key) => {
  const item = secureLocalStorage.getItem(key);
  return item;
};

export const setLocalItem = (key, value) => {
  secureLocalStorage.setItem(key, value);
};

export const removeLocalItem = (key) => {
  secureLocalStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  secureLocalStorage.clear();
};
