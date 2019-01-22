import React from 'react';

const SvgCheckboxChecked = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.58 7.59z" />
  </svg>
);

export default SvgCheckboxChecked;
