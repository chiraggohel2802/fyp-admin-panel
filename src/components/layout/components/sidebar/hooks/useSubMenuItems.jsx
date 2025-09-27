import { useEffect, useState } from 'react';
import styles from '../sidebar.module.css';
import useCurrentPath from 'hooks/useCurrentPath';

export default function useSubMenuItems({ to }) {
  const { currentPath } = useCurrentPath();
  const isMenuItemActive = currentPath?.includes(to);

  const [activeClassNames, setActiveClassNames] = useState(['']);

  function handleActiveState() {
    const isActive =
      activeClassNames.includes(styles.active) ||
      activeClassNames.includes(styles.isOpen);

    if (isActive) setActiveClassNames([]);
    else setActiveClassNames([styles.active]);
  }

  useEffect(() => {
    if (!isMenuItemActive) {
      setActiveClassNames((prev) => {
        if (prev?.includes(styles.active)) return [];
        else return [];
      });
    } else {
      setActiveClassNames(isMenuItemActive ? [styles.active] : ['']);
    }
  }, [isMenuItemActive]);

  return {
    dropDownHeadingClassNames: activeClassNames?.join(' '),
    handleActiveState,
  };
}
