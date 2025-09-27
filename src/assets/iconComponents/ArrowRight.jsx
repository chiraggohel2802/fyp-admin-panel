/* eslint-disable react/prop-types */
import React from 'react';
const SvgArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      stroke={props.fill || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    >
      <path d="M9.621 3.953 13.668 8 9.62 12.046M2.332 8h11.22" />
    </g>
  </svg>
);
export default SvgArrowRight;
