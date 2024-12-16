import React from "react";
import { Input } from "@nextui-org/react";

interface Field {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  min?: number;
}

interface OrderFormFieldProps {
  fields: Field[];
}

const OrderFormFields: React.FC<OrderFormFieldProps> = ({ fields }) => (
  <div className="space-y-4">
    {fields.map((field) => (
      <Input
        key={field.name}
        label={field.label}
        name={field.name}
        type={field.type || "text"}
        placeholder={field.placeholder}
        isRequired={field.isRequired}
        min={field.min}
      />
    ))}
  </div>
);

export default OrderFormFields;
