import React from 'react';

const SvgCallList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      className="callList_svg__st2"
      d="M10.6 9.6H3.7v1.7h6.9V9.6zM14 6.2H3.7v1.7H14V6.2zM3.7 14.8h6.9V13H3.7v1.8z"
    />
    <path d="M13.2 13.3c.7 1.4 1.8 2.5 3.1 3.1l1.1-1.1c.1-.1.3-.2.5-.1.5.2 1.1.3 1.7.3.3 0 .5.2.5.5v1.7c0 .3-.2.5-.5.5-4.5 0-8.1-3.6-8.1-8.1 0-.3.2-.5.5-.5h1.7c.3 0 .5.2.5.5 0 .6.1 1.2.3 1.7.1.2 0 .4-.1.5l-1.2 1z" />
  </svg>
);

export default SvgCallList;
