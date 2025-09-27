import styles from './sidebar.module.css';
import headerStyles from '../../masterPage.module.css';
import classNames from 'classnames';
import useSidebarItems from './hooks/useSidebarItems';
import SidebarItem from './components/SidebarItem';
import React from 'react';
import { useAuth } from 'context/auth/AuthContext';

const Sidebar = (sidebarProps) => {
  const { getSidebarClass, toggleHoverSidebar, isHoverSidebar } = sidebarProps;
  const { sidebarItems } = useSidebarItems();
  const { checkOptionalPermission } = useAuth();
  return (
    <div
      className={classNames(
        getSidebarClass(),
        styles.sidebar,
        headerStyles.sidebar
      )}
      onMouseEnter={() => (isHoverSidebar ? toggleHoverSidebar() : '')}
      onMouseLeave={() => (isHoverSidebar ? toggleHoverSidebar() : '')}
    >
      <div className={classNames(styles.sidebarMenu, headerStyles.sidebarMenu)}>
        <ul>
          {sidebarItems
            .filter((item) => {
              if (item.optionalPermission) {
                return true;
              } else {
                return (
                  item.permissions && checkOptionalPermission(item.permissions)
                );
              }
            })
            .map((props, i) => (
              <SidebarItem {...props} key={`sidebar-item-${i}`} />
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
