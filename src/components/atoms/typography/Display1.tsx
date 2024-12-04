import { leagureSpartan } from '@/app/fonts';
import { JSX } from 'react';

export default function Display1({
  color,
  className,
  children,
}: JSX.IntrinsicElements['h1']) {
  return (
    <h1
        className={`
            text-[25rem] font-bold leading-[25rem] 
            -tracking-[0.08em] max-xl:text-[31.25vw] 
            max-xl:leading-[31.25vw] 
            ${color} 
            ${className} 
            ${leagureSpartan.className}
        `}
    >
      {children}
    </h1>
  );
}
