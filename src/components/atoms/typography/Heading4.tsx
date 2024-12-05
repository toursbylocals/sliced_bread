import { roboto } from '@/app/fonts';
import { JSX } from 'react';

export default function Heading4({
  color,
  className,
  children,
}: JSX.IntrinsicElements['h5']) {
  return (
    <h5
      className={`
        text-[2rem] leading-[2.5rem] -tracking-[0.06em] 
        max-md:text-[1rem] max-md:leading-[1rem] 
        ${color} 
        ${className} 
        ${roboto.className}
      `}
    >
      {children}
    </h5>
  );
}
