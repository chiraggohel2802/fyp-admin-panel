import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalBody = ({ children }) => {
  return <Modal.Body>{children}</Modal.Body>;
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalBody;
