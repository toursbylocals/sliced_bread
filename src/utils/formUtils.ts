import { errorMessages } from "@/constants/formConstants";

export const validateField = (name: string, value: string): string => {
  switch (name) {
    case "name":
      if (value && value.length > 50) return errorMessages.name;
      break;
    case "quantity":
      if (value && (isNaN(Number(value)) || Number(value) <= 0))
        return errorMessages.quantity;
      break;
    case "city":
      if (!value.trim()) return errorMessages.city;
      break;
    case "state":
      if (!value.trim()) return errorMessages.state;
      break;
    case "country":
      if (!value.trim()) return errorMessages.country;
      break;
    default:
      return "";
  }
  return "";
};

export const prepareFormData = (data: Record<string, string>) => ({
  name: data.name || "Valued Customer",
  quantity: data.quantity || "1",
  city: data.city.trim(),
  state: data.state.trim(),
  country: data.country.trim(),
});
