import React from 'react';

const SvgUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default SvgUp;
