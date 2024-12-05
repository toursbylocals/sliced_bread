import { leagureSpartan } from '@/app/fonts';
import { JSX } from 'react';

export default function Heading1({
  color,
  className,
  children,
}: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      className={`
        text-[12rem] leading-[12rem] -tracking-[0.06em] 
        max-xl:text-[10rem] max-xl:leading-[10rem] 
        max-md:text-[4.75rem] max-md:font-semibold max-md:leading-[4.75rem] 
        ${color} 
        ${className} 
        ${leagureSpartan.className}
      `}
    >
      {children}
    </h2>
  );
}
