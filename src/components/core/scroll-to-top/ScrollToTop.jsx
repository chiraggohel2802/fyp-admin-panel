import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ScrollToTop);
