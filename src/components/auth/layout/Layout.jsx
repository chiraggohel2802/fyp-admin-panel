import React, { useEffect } from 'react';
import styles from './layout.module.css';
import { Link, Outlet } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import useAuthMiddleware from 'hooks/useAuthMiddleware';

const Layout = () => {
  const { authMiddleware } = useAuthMiddleware();
  useEffect(() => {
    authMiddleware();
  }, []);
  return (
    <div className={styles.formContainer}>
      <div className={styles.formSection}>
        <Link className={styles.logo} to={ROUTES_ENUMS.AUTH.LOGIN}>
          FYP Life Admin Panel
        </Link>
        <div className={styles.authForm}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
