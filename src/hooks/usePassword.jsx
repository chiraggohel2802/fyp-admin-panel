import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function usePassword() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  // Function to toggle confirmation password visibility
  const toggleHideConfirmPassword = () =>
    setHideConfirmPassword((prev) => !prev);

  // Function to toggle password visibility
  const toggleHidePassword = () => setHidePassword((prev) => !prev);

  // Determine the input type based on password visibility state
  const passwordSuffixIcon = hidePassword ? (
    <FiEyeOff color="#A3A3A3" />
  ) : (
    <FiEye color="#A3A3A3" />
  );

  // Determine the input type based on confirmation password visibility state
  const confirmPasswordSuffixIcon = hideConfirmPassword ? (
    <FiEyeOff color="#A3A3A3" />
  ) : (
    <FiEye color="#A3A3A3" />
  );

  // Password field text type
  const passwordFieldType = hidePassword ? 'password' : 'text';
  const confirmPasswordFieldType = hideConfirmPassword ? 'password' : 'text';

  return {
    passwordFieldType, // Password field text type
    confirmPasswordFieldType, // Confirm Password field text type
    passwordSuffixIcon, // Icon component for toggling password visibility
    confirmPasswordSuffixIcon, // Icon component for toggling confirm password visibility
    toggleHidePassword, // Function to toggle password visibility state
    toggleHideConfirmPassword, // Function to toggle confirm password visibility state
  };
}
