import React from 'react';
import PropTypes from 'prop-types';

const TableColumn = ({ customStyles = {} }) => {
  return <col style={{ ...customStyles }} />;
};

TableColumn.propTypes = {
  customStyles: PropTypes.object,
};

export default TableColumn;
