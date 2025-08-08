import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const ArrowRightIcon: React.FC<IconProps> = ({ className = '', style = {} }) => {
  return (

<svg className={`opacity-50 group-hover:opacity-100 transition-opacity ${className}`} style={style} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.5L4.5 5L1 1.5" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>



  );
};


export default ArrowRightIcon; 