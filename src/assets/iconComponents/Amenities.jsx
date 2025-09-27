import React from 'react';
const SvgAmenities = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <g clipPath="url(#amenities_svg__a)">
      <path
        fill="#6F6F6F"
        d="M16.552 21.085h1.522c.77 0 1.403-.596 1.494-1.348L21.081 4.63h-4.584V.918h-1.805V4.63h-4.556l.275 2.145c1.567.431 3.034 1.21 3.914 2.072 1.32 1.302 2.227 2.65 2.227 4.85v7.388ZM.914 20.168v-.917h13.778v.917a.931.931 0 0 1-.945.917H1.831a.925.925 0 0 1-.917-.917Zm13.778-6.417c0-7.333-13.778-7.333-13.778 0h13.778ZM.914 15.585h13.75v1.833H.914v-1.833Z"
      />
    </g>
    <defs>
      <clipPath id="amenities_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAmenities;
