import React from 'react';

const SvgDropUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M7 14l5-5 5 5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default SvgDropUp;
