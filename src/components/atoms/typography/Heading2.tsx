import { roboto } from '@/app/fonts';
import { JSX } from 'react';

export default function Heading2({
  color,
  className,
  children,
}: JSX.IntrinsicElements['h3']) {
  return (
    <h3
      className={`
        text-[6rem] leading-[6rem] -tracking-[0.04em] 
        max-xl:text-[4.5rem] max-xl:leading-[4.5rem] 
        max-md:text-[2rem] max-md:leading-[2rem] 
        ${color} 
        ${className} 
        ${roboto.className}
      `}
    >
      {children}
    </h3>
  );
}
