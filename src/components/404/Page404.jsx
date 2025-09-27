import { NotFound } from 'assets/iconComponents';
import styles from './404.module.css';
import React, { memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { AiFillHome, AiOutlineLogin } from 'react-icons/ai';
import { useAuth } from 'context/auth/AuthContext';

const Page404 = () => {
  const navigate = useNavigate();
  const { isAuthenticate } = useAuth();
  const isAuthenticated = isAuthenticate();

  useEffect(() => navigate('/404'), [navigate]);

  return (
    <div className={styles.container404}>
      <NotFound className={styles.icon} />
      <span className={styles.text}>Page Not Found</span>
      {!isAuthenticated ? (
        <Link className={styles.link} to={ROUTES_ENUMS.AUTH.LOGIN}>
          <AiOutlineLogin fontSize={25} />
          Go To Login
        </Link>
      ) : (
        <Link className={styles.link} to={ROUTES_ENUMS.DASHBOARD.INDEX}>
          <AiFillHome fontSize={25} />
          Go To Dashboard
        </Link>
      )}
    </div>
  );
};

export default memo(Page404);
