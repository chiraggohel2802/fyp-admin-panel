export const handleNumberValue = (e) => {
  const inputTarget = e.target;

  if (inputTarget) {
    // Prevent the input value change
    inputTarget.blur?.();
  }
};

export const handleKeyDown = (event) => {
  // Prevent the default behavior if 'e' key is pressed
  if (event.key === 'e') {
    event.preventDefault();
  }
};
