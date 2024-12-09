import React, { useState } from "react";
import { initialFormData, initialErrors } from "@/constants/formConstants";
import { validateField, prepareFormData } from "@/utils/formUtils";

interface OrderFormProps {
  onSubmit: (formData: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce(
      (acc, fieldName) => {
        const error = validateField(
          fieldName,
          formData[fieldName as keyof typeof formData]
        );
        if (error) acc[fieldName as keyof typeof errors] = error;
        return acc;
      },
      {} as typeof errors
    );

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    const finalFormData = prepareFormData(formData);
    onSubmit(finalFormData);
  };

  return (
    <form
      className="bg-gray-50 p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      {Object.keys(initialFormData).map((key) => (
        <div className="mb-6" key={key}>
          <label
            htmlFor={key}
            className="block text-lg font-medium capitalize mb-2"
          >
            {key === "name" || key === "quantity" ? `${key} (Optional)` : key}
          </label>
          <input
            id={key}
            type={key === "quantity" ? "number" : "text"}
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            className={`mt-1 w-full border-gray-300 rounded-lg shadow-md text-lg p-3 ${
              errors[key as keyof typeof errors] ? "border-red-500" : ""
            }`}
          />
          {errors[key as keyof typeof errors] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[key as keyof typeof errors]}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className={`w-full py-4 px-6 text-xl rounded-lg ${
          Object.values(errors).some((error) => error)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        disabled={Object.values(errors).some((error) => error)}
      >
        Place My Order
      </button>
    </form>
  );
};

export default OrderForm;
