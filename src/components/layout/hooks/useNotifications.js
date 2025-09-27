import { useState } from 'react';
import styles from '../masterPage.module.css';

const useNotifications = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(true);

  const toggleNotification = () => setIsOpenNotification((prev) => !prev);

  const getNotificationClass = () =>
    isOpenNotification ? '' : styles.dropdownMenuShow;

  const handleFullScreenMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return {
    toggleNotification,
    isOpenNotification,
    getNotificationClass,
    handleFullScreenMode,
  };
};
export default useNotifications;
