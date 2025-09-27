import { useEffect, useState } from 'react';
import styles from '../masterPage.module.css';
import { useMediaQuery } from '@uidotdev/usehooks';

const useSidebar = () => {
  const isNonMobile = useMediaQuery('(min-width: 768px)');
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [isHoverSidebar, setIsHoverSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
    if (isOpenSidebar) {
      setIsHoverSidebar(true);
    } else {
      setIsHoverSidebar(false);
    }
  };

  const toggleHoverSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  const getSidebarClass = () => (isOpenSidebar ? '' : styles.miniSidebar);

  useEffect(() => {
    !isNonMobile ? setIsOpenSidebar(false) : setIsOpenSidebar(true);
  }, [isNonMobile]);

  return {
    toggleSidebar,
    isOpenSidebar,
    getSidebarClass,
    toggleHoverSidebar,
    isHoverSidebar,
  };
};
export default useSidebar;
