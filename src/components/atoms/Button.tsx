import React, { JSX } from 'react';
import { roboto } from '@/app/fonts';

interface ButtonProps {
  color?: 'light' | 'dark';
  loading?: boolean;
}

const LIGHT_STYLE = `border-primary-200 bg-primary-200 hover:bg-primary-200/70 text-white`;

const DARK_STYLE = `border-primary-400 bg-primary-400 hover:bg-primary-400/70 text-white`;

export default function Button({
  color = 'dark',
  className,
  children,
  loading,
  ...rest
}: JSX.IntrinsicElements['button'] & ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white transition-colors ${className} ${roboto.className} ${color === 'dark' && DARK_STYLE} ${color === 'light' && LIGHT_STYLE} ${loading ? 'pointer-events-none cursor-not-allowed opacity-30' : ''}`}
      disabled={loading}
      {...rest}
    >
      {!loading && children}
      {loading && <span>Loading...</span>}
    </button>
  );
}
