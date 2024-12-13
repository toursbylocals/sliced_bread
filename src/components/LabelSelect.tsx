import type { FC, SelectHTMLAttributes } from 'react';

export type LabelSelectProps = {
  inputType?: string;
  labelFor: string;
  labelText: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const LabelSelect: FC<React.PropsWithChildren<LabelSelectProps>> = ({
  children,
  inputType = 'text',
  labelFor,
  labelText,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label
        data-testid={`LabelSelectLabel-${labelFor}`}
        htmlFor={labelFor}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {labelText}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          data-testid={`LabelSelectSelect-${labelFor}`}
          id={labelFor}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          {...rest}
        >
          {children}
        </select>
      </div>
    </div>
  );
};
