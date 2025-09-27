import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalFooter = ({ handleClose }) => {
  return (
    <Modal.Footer>
      <button type="button" className="btn btn-secondary" onClick={handleClose}>
        Close
      </button>
    </Modal.Footer>
  );
};

ModalFooter.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalFooter;
