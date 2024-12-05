import { roboto } from '@/app/fonts';
import { JSX } from 'react';

export default function Heading3({
  color,
  className,
  children,
}: JSX.IntrinsicElements['h4']) {
  return (
    <h4
      className={`
        text-[2.25rem] leading-[2.7rem] -tracking-[0.06em] 
        max-md:text-[1rem] max-md:leading-[1rem] 
        ${color} 
        ${className} 
        ${roboto.className}
      `}
    >
      {children}
    </h4>
  );
}
