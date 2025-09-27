/* eslint-disable react/prop-types */
import React from 'react';
const SvgCarParking = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      fill={props.fill || '#6F6F6F'}
      d="M15.403 1.652a.55.55 0 0 1 .55-.55h4.4a.55.55 0 0 1 .55.55v5.5a.55.55 0 0 1-.55.55h-1.65v12.65a.55.55 0 0 1-1.1 0V7.702h-1.65a.55.55 0 0 1-.55-.55v-5.5Zm-1.1 1.65H6.757a2.75 2.75 0 0 0-2.697 2.21l-.218 1.09h-.814a.825.825 0 0 0 0 1.65h.484l-.122.616a1.65 1.65 0 0 0-1.187 1.584v4.4a1.65 1.65 0 0 0 1.65 1.65h12.65v-7.7H4.524l.615-3.074a1.65 1.65 0 0 1 1.617-1.326h7.547v-1.1Zm2.2 9.35a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Zm0 7.15a1.1 1.1 0 0 1-1.1-1.1v-1.1h1.1v2.2Zm-9.9-1.1v-1.1h-2.2v1.1a1.1 1.1 0 0 0 2.2 0Zm-1.1-6.05a1.1 1.1 0 1 1 2.2 0 1.1 1.1 0 0 1-2.2 0Z"
    />
  </svg>
);
export default SvgCarParking;
