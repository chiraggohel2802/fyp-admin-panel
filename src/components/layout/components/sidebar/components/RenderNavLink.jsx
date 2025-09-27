/* eslint-disable react/prop-types */
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from '../sidebar.module.css';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const RenderNavLink = ({ to, icon, hasEndIcon = false, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames({ [styles.active]: isActive })}
    >
      {icon && icon}
      <span>{label}</span>
      {hasEndIcon && <BsChevronRight size={15} className={styles.endIcon} />}
    </NavLink>
  );
};

export default RenderNavLink;
