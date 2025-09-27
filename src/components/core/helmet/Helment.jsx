import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const HelmetComponent = ({ title, children }) => (
  <Helmet>
    <title>
      {process.env.REACT_APP_NAME} | {title}
    </title>
    {children}
  </Helmet>
);

HelmetComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default memo(HelmetComponent);
