import React from 'react';
const SvgVaadinPackage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#vaadin_package_svg__a)">
      <path
        fill="#B88DBF"
        d="M8 0 0 2v10l8 4 8-4V2L8 0Zm0 1 2.1.5-5.9 1.9-2.3-.8L8 1Zm0 13.9-7-3.5V3.3l3 1v3.4L5 8V4.7l3 1v9.2Zm.5-10.1-2.7-.9L12 2l2.4.6-5.9 2.2Z"
      />
    </g>
    <defs>
      <clipPath id="vaadin_package_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVaadinPackage;
