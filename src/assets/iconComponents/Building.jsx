/* eslint-disable react/prop-types */
import React from 'react';
const SvgBuilding = ({ className, ...props }) => (
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
      d="M10.5 6h.75a.75.75 0 1 0 0-1.5h-.75a.75.75 0 1 0 0 1.5Zm0 3h.75a.75.75 0 1 0 0-1.5h-.75a.75.75 0 1 0 0 1.5ZM6.75 6h.75a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5Zm0 3h.75a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5Zm9 6H15V2.25a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75V15h-.75a.75.75 0 1 0 0 1.5h13.5a.75.75 0 1 0 0-1.5Zm-6 0h-1.5v-3h1.5v3Zm3.75 0h-2.25v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V15H4.5V3h9v12Z"
    />
  </svg>
);
export default SvgBuilding;
