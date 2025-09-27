import React from 'react';
const SvgInfoCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <g
      stroke="var(--default-theme-color, #4338CA)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M9.5 17.08c4.125 0 7.5-3.375 7.5-7.5s-3.375-7.5-7.5-7.5S2 5.455 2 9.58s3.375 7.5 7.5 7.5Z" />
      <path d="M9.5 6.58v3.75M9.496 12.58h.007" opacity={0.34} />
    </g>
  </svg>
);
export default SvgInfoCircle;
