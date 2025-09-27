/* eslint-disable react/prop-types */
import React from 'react';
const SvgTicket = ({ className, ...props }) => (
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
      d="M6.754 7.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Zm9 .75a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-13.5a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75.75.75 0 0 1 0 1.5.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75.75.75 0 1 1 0-1.5Zm-.75-1.365a2.25 2.25 0 0 0 0 4.23v1.635h-7.5a.75.75 0 1 0-1.5 0h-3v-1.635a2.25 2.25 0 0 0 0-4.23V5.25h3a.75.75 0 1 0 1.5 0h7.5v1.635Z"
    />
  </svg>
);
export default SvgTicket;
