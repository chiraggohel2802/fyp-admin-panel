/* eslint-disable react/prop-types */
import React from 'react';
const SvgMegaphone = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      className={className}
      fill="#374151"
      d="M14.992 1.5a.75.75 0 0 0-.75.75v.478a6.778 6.778 0 0 1-5.25 2.522h-4.5a2.252 2.252 0 0 0-2.25 2.25V9a2.252 2.252 0 0 0 2.25 2.25h.363l-1.802 4.205a.75.75 0 0 0 .69 1.045h3a.75.75 0 0 0 .688-.455l2.043-4.767a6.772 6.772 0 0 1 4.768 2.494v.478a.75.75 0 1 0 1.5 0v-12a.75.75 0 0 0-.75-.75Zm-10.5 8.25a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75h.75v3h-.75ZM6.248 15H4.88l1.607-3.75h1.368L6.248 15Zm7.994-3.359a8.29 8.29 0 0 0-5.25-1.891h-2.25v-3h2.25a8.29 8.29 0 0 0 5.25-1.892v6.783Z"
    />
  </svg>
);
export default SvgMegaphone;
