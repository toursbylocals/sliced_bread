import type { FC, InputHTMLAttributes } from 'react';

export type LabelInputProps = {
  inputType?: string;
  labelFor: string;
  labelText: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const LabelInput: FC<LabelInputProps> = ({
  inputType = 'text',
  labelFor,
  labelText,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label
        data-testid={`LabelInputLabel-${labelFor}`}
        htmlFor={labelFor}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {labelText}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            {...rest}
            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            data-testid={`LabelInputInput-${labelFor}`}
            id={labelFor}
            type={inputType}
          />
        </div>
      </div>
    </div>
  );
};
