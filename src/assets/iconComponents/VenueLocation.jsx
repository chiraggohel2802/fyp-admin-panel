import React from 'react';
const SvgVenueLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <g stroke="#FD5139" strokeWidth={1.5}>
      <path
        d="M9.5 10.673a2.34 2.34 0 1 0 0-4.68 2.34 2.34 0 0 0 0 4.68Z"
        opacity={0.4}
      />
      <path d="M3.215 6.968c1.478-6.495 11.1-6.488 12.57.007.863 3.81-1.507 7.035-3.585 9.03a3.895 3.895 0 0 1-5.407 0c-2.07-1.995-4.44-5.227-3.578-9.037Z" />
    </g>
  </svg>
);
export default SvgVenueLocation;
