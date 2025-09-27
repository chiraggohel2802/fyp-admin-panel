import React from 'react';
const SvgLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 51 51"
    {...props}
  >
    <g clipPath="url(#location_svg__a)">
      <g filter="url(#location_svg__b)">
        <path
          fill="#F77"
          d="M43.761 20.608c0 8.543-9.46 18.615-15.288 22.914a5.04 5.04 0 0 1-6.005 0c-5.825-4.3-15.288-14.37-15.288-22.914C7.18 9.403 13.815.32 25.47.32c11.656 0 18.291 9.084 18.291 20.29Z"
        />
      </g>
      <path
        fill="#fff"
        d="M25.474 13.65c-3.039 0-5.507 2.385-5.507 5.332 0 2.943 2.465 5.33 5.507 5.33 3.04 0 5.507-2.387 5.507-5.33 0-2.947-2.465-5.333-5.507-5.333Zm-9.173 5.332c0-4.91 4.105-8.887 9.173-8.887s9.174 3.976 9.174 8.887c0 4.907-4.106 8.884-9.174 8.884s-9.173-3.977-9.173-8.884Z"
      />
    </g>
    <defs>
      <clipPath id="location_svg__a">
        <path fill="#fff" d="M.145.32h50.652V50.97H.145z" />
      </clipPath>
      <filter
        id="location_svg__b"
        width={54.2}
        height={61.813}
        x={-1.629}
        y={-4.085}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4.404} />
        <feGaussianBlur stdDeviation={4.404} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.627451 0 0 0 0 0.466667 0 0 0 0.63 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2141_100411"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2141_100411"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgLocation;
