import { leagureSpartan, roboto } from '@/app/fonts';
import { JSX } from 'react';

export type TypographyVariant =
  | 'display1'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'description'
  | 'description2'
  | 'link';

const defaultColor = 'text-primary-400';

export const Typography = ({
  variant,
  color,
  className = '',
  children,
}: { variant: TypographyVariant } & (
  | JSX.IntrinsicElements['h1']
  | JSX.IntrinsicElements['h2']
  | JSX.IntrinsicElements['h3']
  | JSX.IntrinsicElements['h4']
  | JSX.IntrinsicElements['h5']
  | JSX.IntrinsicElements['p']
  | JSX.IntrinsicElements['span']
)) => {
  return (
    <>
      {variant === 'display1' && (
        <h1
          className={
            `text-[25rem] font-bold leading-[25rem] -tracking-[0.08em] max-xl:text-[31.25vw] max-xl:leading-[31.25vw] ${color ? color : defaultColor} ${className} ` +
            leagureSpartan.className
          }
        >
          {children}
        </h1>
      )}

      {variant === 'heading1' && (
        <h2
          className={
            `text-[12rem] leading-[12rem] -tracking-[0.06em] max-xl:text-[10rem] max-xl:leading-[10rem] max-md:text-[4.75rem] max-md:font-semibold max-md:leading-[4.75rem] ${color ? color : defaultColor} ${className} ` +
            leagureSpartan.className
          }
        >
          {children}
        </h2>
      )}

      {variant === 'heading2' && (
        <h3
          className={
            `text-[6rem] leading-[6rem] -tracking-[0.04em] max-xl:text-[4.5rem] max-xl:leading-[4.5rem] max-md:text-[2rem] max-md:leading-[2rem] ${color ? color : defaultColor} ${className} ` +
            roboto.className
          }
        >
          {children}
        </h3>
      )}

      {variant === 'heading3' && (
        <h3
          className={
            `text-[2.25rem] leading-[2.7rem] -tracking-[0.06em] max-md:text-[1rem] max-md:leading-[1rem] ${color ? color : defaultColor} ${className} ` +
            roboto.className
          }
        >
          {children}
        </h3>
      )}

      {variant === 'heading4' && (
        <h4
          className={
            `text-[2rem] leading-[2.5rem] -tracking-[0.06em] max-md:text-[1rem] max-md:leading-[1rem] ${color ? color : defaultColor} ${className} ` +
            roboto.className
          }
        >
          {children}
        </h4>
      )}

      {variant === 'description' && (
        <p
          className={
            `text-[1.5rem] leading-[1.95rem] -tracking-[0.06em] max-md:text-[1rem] max-md:leading-[1rem] ${color ? color : defaultColor} ${className} ` +
            roboto.className
          }
        >
          {children}
        </p>
      )}

      {variant === 'description2' && (
        <p
          className={
            `text-[1rem] leading-[1.5rem] -tracking-[0.06em] max-md:text-[0.8rem] max-md:leading-[0.8rem] ${color ? color : defaultColor} ${className} ` +
            roboto.className
          }
        >
          {children}
        </p>
      )}

      {variant === 'link' && (
        <span
          className={
            `text-[1.5rem] leading-[1.95rem] -tracking-[0.06em] underline max-md:text-[1rem] max-md:leading-[1rem] ${color ? color : defaultColor} ${className} ` +
            roboto.className
          }
        >
          {children}
        </span>
      )}
    </>
  );
};
