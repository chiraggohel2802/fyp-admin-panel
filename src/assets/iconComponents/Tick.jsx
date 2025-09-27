import React from 'react';
const SvgTick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.168 10.833 3.333 3.333 8.334-8.333"
    />
  </svg>
);
export default SvgTick;
