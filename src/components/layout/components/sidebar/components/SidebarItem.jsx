/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../sidebar.module.css';
import headerStyles from '../../../masterPage.module.css';
import SubMenuDropDown from './SubMenuDropDown';
import RenderNavLink from './RenderNavLink';
import classNames from 'classnames';
import { SIDEBAR_MENU_TYPE } from '../sidebar.constants';
import { useAuth } from 'context/auth/AuthContext';

const SidebarItem = (props) => {
  const { icon, label, to, subMenuItems, type } = props;
  const haveSubMenuItems = !!subMenuItems;
  const { checkPermission } = useAuth();

  if (type === SIDEBAR_MENU_TYPE.TITLE) {
    return (
      <li className={classNames(styles.menuTitle, headerStyles.menuTitle)}>
        <span>{label}</span>
      </li>
    );
  }

  return (
    <li className={classNames(styles.item, headerStyles.item)}>
      {haveSubMenuItems ? (
        <SubMenuDropDown {...props} />
      ) : (
        <RenderNavLink
          to={to}
          icon={icon}
          hasEndIcon={haveSubMenuItems}
          label={label}
        />
      )}

      {subMenuItems && (
        <ul
          className={classNames(styles.subMenuItems, headerStyles.subMenuItems)}
        >
          {subMenuItems
            ?.filter((item) => {
              if (item.optionalPermission) {
                return true;
              } else {
                return item.permissions && checkPermission(item.permissions);
              }
            })
            ?.map(({ label, to }, i) => (
              <li key={`sub-menu-item-${i}`} className={styles.subItem}>
                <RenderNavLink to={to} label={label} />
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};
export default SidebarItem;
