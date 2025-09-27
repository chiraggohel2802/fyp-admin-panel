import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalHeader = ({ modalHeadingTitle, customeHeaderClass }) => {
  return (
    <Modal.Header closeButton style={customeHeaderClass}>
      <Modal.Title id="contained-modal-title-vcenter">
        {modalHeadingTitle}
      </Modal.Title>
    </Modal.Header>
  );
};

ModalHeader.propTypes = {
  modalHeadingTitle: PropTypes.string.isRequired,
  customeHeaderClass: PropTypes.object,
};

export default ModalHeader;
