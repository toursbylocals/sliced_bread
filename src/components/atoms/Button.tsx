import React, { JSX } from 'react';
import { roboto } from '@/app/fonts';

export default function Button({
  className,
  children,
  ...rest
}: JSX.IntrinsicElements['button']) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border-primary-400 bg-primary-400 px-4 py-2 text-white transition-colors hover:bg-primary-400/70 ${className} ${roboto.className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
