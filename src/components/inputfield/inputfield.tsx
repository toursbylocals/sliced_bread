import React from "react";
import { FieldError, UseFormRegister, FieldValues, Path } from "react-hook-form";

// Ensure name is a key of T (form data)
interface InputFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>; // Use Path<T> here to ensure the name is a valid key of T
    type: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    placeholder?: string;
    className?: string;
    [x: string]: any; // To allow additional props
}

const InputField = <T extends FieldValues>({
    label,
    name,
    type,
    register,
    error,
    placeholder = "",
    className = "",
    ...rest
}: InputFieldProps<T>) => (
    <div className="mb-4">
        <label className="block text-lg font-medium">{label}:</label>
        <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className={`mt-2 p-2 w-full border rounded-md shadow-sm ${error ? "border-red-500" : ""} ${className}`}
            {...rest}
        />
        {error && <span className="text-red-500">{error.message}</span>}
    </div>
);

export default InputField;
