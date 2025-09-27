import { useState } from 'react';

/**
 * Custom hook to manage the state and actions for a modal.
 *
 * @returns {Object} - An object containing modal state and handlers.
 * @property {boolean} isOpen - Indicates if the modal is open.
 * @property {any} userId - The ID of the user being viewed in the modal.
 * @property {Function} openModal - Function to open the modal.
 * @property {Function} closeModal - Function to close the modal.
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);

  const openModal = (id) => {
    setIsOpen(true);
    setId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setId(null);
  };

  return {
    isOpen,
    id,
    openModal,
    closeModal,
  };
};

export default useModal;
