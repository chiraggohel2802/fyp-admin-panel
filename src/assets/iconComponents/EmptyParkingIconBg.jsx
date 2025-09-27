import React from 'react';

const SvgEmptyParkingIconBg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 181 179"
    {...props}
  >
    <circle
      cx={93.083}
      cy={87.899}
      r={87.649}
      fill="url(#empty_parking_icon_bg_svg__a)"
    />
    <circle
      cx={169.672}
      cy={41.172}
      r={4.365}
      stroke="#A5B4FC"
      strokeWidth={1.762}
    />
    <circle
      cx={5.609}
      cy={93.145}
      r={5.246}
      fill="url(#empty_parking_icon_bg_svg__b)"
    />
    <circle
      cx={78.281}
      cy={172.866}
      r={4.365}
      stroke="#A5B4FC"
      strokeWidth={1.762}
    />
    <circle
      cx={89.123}
      cy={146.271}
      r={3.316}
      stroke="#A5B4FC"
      strokeWidth={1.762}
    />
    <g filter="url(#empty_parking_icon_bg_svg__c)">
      <path
        fill="#A5B4FC"
        d="m29.658 94.065 1.487 4.019 4.019 1.487-4.019 1.487-1.487 4.019-1.487-4.019-4.019-1.487 4.019-1.487 1.487-4.019Z"
      />
    </g>
    <g filter="url(#empty_parking_icon_bg_svg__d)">
      <path
        fill="#A5B4FC"
        d="m34.894 19.189 2.663 7.199 7.2 2.663-7.2 2.664-2.663 7.199-2.664-7.199-7.199-2.664 7.199-2.663 2.664-7.199Z"
      />
    </g>
    <path
      fill="#A5B4FC"
      d="m172.61 120.492 2.21 5.973 5.973 2.21-5.973 2.211-2.21 5.973-2.211-5.973-5.973-2.211 5.973-2.21 2.211-5.973Z"
    />
    <defs>
      <linearGradient
        id="empty_parking_icon_bg_svg__a"
        x1={93.083}
        x2={93.083}
        y1={0.25}
        y2={175.548}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#E0E7FF" />
      </linearGradient>
      <linearGradient
        id="empty_parking_icon_bg_svg__b"
        x1={5.609}
        x2={5.609}
        y1={87.899}
        y2={98.391}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3EAFF" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <filter
        id="empty_parking_icon_bg_svg__c"
        width={14.535}
        height={14.535}
        x={22.39}
        y={92.304}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_2141_100384"
          stdDeviation={0.881}
        />
      </filter>
      <filter
        id="empty_parking_icon_bg_svg__d"
        width={23.25}
        height={23.249}
        x={23.27}
        y={17.427}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_2141_100384"
          stdDeviation={0.881}
        />
      </filter>
    </defs>
  </svg>
);
export default SvgEmptyParkingIconBg;
