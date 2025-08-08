import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const MoneyIcon: React.FC<IconProps> = ({ className = '', style = {} }) => {
  return (
 



<svg className={className} style={style} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2_22)">
<path d="M15.9444 1.92334H7.05556C3.98731 1.92334 1.5 4.41065 1.5 7.4789V16.3678C1.5 19.436 3.98731 21.9233 7.05556 21.9233H15.9444C19.0127 21.9233 21.5 19.436 21.5 16.3678V7.4789C21.5 4.41065 19.0127 1.92334 15.9444 1.92334Z" fill="white"/>
<path d="M15.9444 1.64557H7.0555C3.83384 1.64557 1.22217 4.25724 1.22217 7.4789V16.3678C1.22217 19.5895 3.83384 22.2012 7.0555 22.2012H15.9444C19.1661 22.2012 21.7778 19.5895 21.7778 16.3678V7.4789C21.7778 4.25724 19.1661 1.64557 15.9444 1.64557Z" stroke="#EEEEEE" strokeWidth="0.555556"/>
</g>
<path fillRule="evenodd" clipRule="evenodd" d="M5.375 9.29834C5.375 8.33184 6.1585 7.54834 7.125 7.54834H15.875C16.8415 7.54834 17.625 8.33184 17.625 9.29834V14.5483C17.625 15.5149 16.8415 16.2983 15.875 16.2983H7.125C6.1585 16.2983 5.375 15.5149 5.375 14.5483V9.29834ZM7.125 15.1317H8C8 14.3263 7.34708 13.6733 6.54167 13.6733V14.5483C6.54167 14.8705 6.80284 15.1317 7.125 15.1317ZM16.4583 14.5483V13.6733C15.6529 13.6733 15 14.3263 15 15.1317H15.875C16.1972 15.1317 16.4583 14.8705 16.4583 14.5483ZM16.4583 10.1733C15.6529 10.1733 15 9.52042 15 8.71501H15.875C16.1972 8.71501 16.4583 8.97618 16.4583 9.29834V10.1733ZM7.125 8.71501H8C8 9.52042 7.34708 10.1733 6.54167 10.1733V9.29834C6.54167 8.97618 6.80284 8.71501 7.125 8.71501ZM11.5 10.465C10.6946 10.465 10.0417 11.1179 10.0417 11.9233C10.0417 12.7287 10.6946 13.3817 11.5 13.3817C12.3054 13.3817 12.9583 12.7287 12.9583 11.9233C12.9583 11.1179 12.3054 10.465 11.5 10.465Z" fill="#1F80FF"/>
<defs>
<filter id="filter0_i_2_22" x="0.944336" y="1.3678" width="21.1112" height="21.1111" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.0941176 0 0 0 0 0.0941176 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_22"/>
</filter>
</defs>
</svg>



  );
};

export default MoneyIcon; 