/* eslint-disable react/prop-types */
import React from 'react';
const SvgParking = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    {...props}
  >
    <path
      fill={props.fill || '#FBDA85'}
      d="M7.556 9.833h1a2.333 2.333 0 1 0 0-4.666H6.223v6.666h1.333v-2ZM2.889 2.5h10.667a.667.667 0 0 1 .667.667v10.666a.667.667 0 0 1-.667.667H2.889a.666.666 0 0 1-.666-.667V3.167a.667.667 0 0 1 .666-.667Zm4.667 4h1a1 1 0 0 1 0 2h-1v-2Z"
    />
  </svg>
);
export default SvgParking;
