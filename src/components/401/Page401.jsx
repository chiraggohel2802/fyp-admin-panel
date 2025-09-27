import { NotFound } from 'assets/iconComponents';
import styles from './401.module.css';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { MdOutlineLogout } from 'react-icons/md';

const Page401 = () => {
  return (
    <div className={styles.container401}>
      <NotFound className={styles.icon} />
      <span className={styles.text}>Unauthorized !!</span>
      <Link className={styles.link} to={ROUTES_ENUMS.LOGOUT}>
        <MdOutlineLogout fontSize={25} />
        Please logout and login again!!
      </Link>
    </div>
  );
};

export default memo(Page401);
