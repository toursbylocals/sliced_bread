import React, { JSX } from 'react';
import { roboto } from '@/app/fonts';

export default function Button({
  className,
  children,
  loading,
  ...rest
}: JSX.IntrinsicElements['button'] & { loading: boolean }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border-primary-400 bg-primary-400 px-4 py-2 text-white transition-colors hover:bg-primary-400/70 ${className} ${roboto.className} ${loading ? 'pointer-events-none cursor-not-allowed opacity-30' : ''}`}
      disabled={loading}
      {...rest}
    >
      {!loading && children}
      {loading && <span>Loading...</span>}
    </button>
  );
}
