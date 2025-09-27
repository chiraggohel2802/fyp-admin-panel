/* eslint-disable react/prop-types */
import React from 'react';
const SvgEditPencil = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill={props.fill || 'var(--default-theme-color)'}
      d="m14.474 5.414-3.726-3.682L11.975.504A1.684 1.684 0 0 1 13.215 0c.489 0 .902.168 1.237.504l1.228 1.228c.336.336.51.741.526 1.216.014.476-.147.88-.483 1.216l-1.249 1.25Zm-1.271 1.293L3.91 16H.184v-3.726l9.293-9.293 3.726 3.726Z"
    />
  </svg>
);
export default SvgEditPencil;
