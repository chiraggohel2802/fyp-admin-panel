/* eslint-disable react/prop-types */
import React from 'react';
const SvgGrowthGraph = ({ className, ...props }) => (
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
      d="M5.25 12a1.125 1.125 0 0 0 1.125-1.125.578.578 0 0 0 0-.113L8.467 8.67h.345l1.208 1.207v.06a1.125 1.125 0 1 0 2.25 0v-.06L15 7.125A1.125 1.125 0 1 0 13.875 6a.571.571 0 0 0 0 .112L11.168 8.82h-.12L9.75 7.5a1.125 1.125 0 0 0-2.25 0L5.25 9.75a1.125 1.125 0 0 0 0 2.25Zm10.125 3H2.625V2.25a.75.75 0 0 0-1.5 0v13.5a.75.75 0 0 0 .75.75h13.5a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
export default SvgGrowthGraph;
