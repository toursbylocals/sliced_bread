/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { roboto } from '@/app/fonts';
import { ErrorMessage } from '@hookform/error-message';

interface InputFieldProps {
  placeholder?: string;
  errors: FieldErrors<any>;
}

export const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] &
    InputFieldProps &
    ReturnType<UseFormRegister<any>>
>(({ className, name, placeholder, errors, ...rest }, ref) => (
  <div className={`flex w-full flex-col gap-y-2 ${className ?? ''}`} {...rest}>
    <div className={`text-red-400 ${roboto.className}`}>
      <ErrorMessage errors={errors} name={name} />
    </div>

    <input
      id={name}
      ref={ref}
      name={name}
      className={`
        rounded border-[1px] border-white bg-transparent 
        bg-white px-3 py-2 text-primary-300 
        placeholder-primary-300/50 !outline-none 
        transition-all focus:border-[2px] focus:border-primary-300 
        ${roboto.className}
      `}
      placeholder={placeholder}
    />
  </div>
));
