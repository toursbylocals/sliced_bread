import { roboto } from '@/app/fonts';
import { JSX } from 'react';

export default function Description({
  color,
  className,
  children,
}: JSX.IntrinsicElements['p']) {
  return (
    <p
      className={`
        text-[1.5rem] leading-[1.95rem] -tracking-[0.06em] 
        max-md:text-[1rem] max-md:leading-[1rem] 
        ${color} 
        ${className} 
        ${roboto.className}
      `}
    >
      {children}
    </p>
  );
}
