import React from 'react';
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <g stroke="#FD5139" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M6.5 2.1v2.25M12.5 2.1v2.25"
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M3.125 7.417h12.75"
        opacity={0.4}
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M16.25 6.975v6.375c0 2.25-1.125 3.75-3.75 3.75h-6c-2.625 0-3.75-1.5-3.75-3.75V6.975c0-2.25 1.125-3.75 3.75-3.75h6c2.625 0 3.75 1.5 3.75 3.75Z"
      />
      <path
        strokeWidth={2}
        d="M12.271 10.875h.007M12.271 13.125h.007M9.496 10.875h.007M9.496 13.125h.007M6.72 10.875h.007M6.72 13.125h.007"
        opacity={0.4}
      />
    </g>
  </svg>
);
export default SvgCalendar;
