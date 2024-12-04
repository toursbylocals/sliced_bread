import { roboto } from '@/app/fonts';
import { JSX } from 'react';

export default function Description2({
  color,
  className,
  children,
}: JSX.IntrinsicElements['p']) {
  return (
    <p
      className={`
        text-[1rem] leading-[1.5rem] -tracking-[0.06em] 
        max-md:text-[0.8rem] max-md:leading-[0.8rem] 
        ${color} 
        ${className} 
        ${roboto.className}
      `}
    >
      {children}
    </p>
  );
}
