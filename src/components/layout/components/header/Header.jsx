/* eslint-disable react/prop-types */
import styles from '../../masterPage.module.css';
import { FiAlignJustify } from 'react-icons/fi';
import classNames from 'classnames';
import React from 'react';

const Header = ({ toggleSidebar, getSidebarClass }) => {
  return (
    <div className={classNames(getSidebarClass(), styles.header)}>
      <div className={styles.headerLeft}>
        <span className={styles.logo}>FYP Life Admin Panel</span>
        <span className={styles.smallLogo}>FYP</span>
      </div>
      <span className={styles.toggleButton} onClick={toggleSidebar}>
        <FiAlignJustify size={25} />
      </span>
    </div>
  );
};

export default Header;
