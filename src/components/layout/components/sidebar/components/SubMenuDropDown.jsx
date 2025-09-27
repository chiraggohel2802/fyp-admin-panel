/* eslint-disable react/prop-types */
import styles from '../sidebar.module.css';
import headerStyles from '../../../masterPage.module.css';
import { BsChevronRight } from 'react-icons/bs';
import useSubMenuItems from '../hooks/useSubMenuItems';
import classNames from 'classnames';
import React from 'react';
import { useAuth } from 'context/auth/AuthContext';

const SubMenuDropDown = (props) => {
  const { icon, label, subMenuItems, permissions } = props;
  const { checkOptionalPermission } = useAuth();
  const { dropDownHeadingClassNames, handleActiveState } =
    useSubMenuItems(props);
  return (
    <React.Fragment>
      {checkOptionalPermission(permissions) && (
        <a className={dropDownHeadingClassNames} onClick={handleActiveState}>
          {icon && icon}
          <span>{label}</span>
          {!!subMenuItems && (
            <BsChevronRight
              size={15}
              className={classNames(styles.endIcon, headerStyles.endIcon)}
            />
          )}
        </a>
      )}
    </React.Fragment>
  );
};

export default SubMenuDropDown;
