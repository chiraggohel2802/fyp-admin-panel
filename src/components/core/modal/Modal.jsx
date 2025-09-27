import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';
import PageLoader from '../page-loader/PageLoader';
import PropTypes from 'prop-types';

const ModalComponent = (props) => {
  const { isOpen, handleClose, children, hideFooterCloseBtn, isLoading } =
    props;

  return (
    <Modal
      size="lg"
      show={isOpen}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <ModalHeader {...props} />
      {isLoading ? <PageLoader /> : <ModalBody>{children}</ModalBody>}

      {!hideFooterCloseBtn && <ModalFooter {...props} />}
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  hideFooterCloseBtn: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default ModalComponent;
