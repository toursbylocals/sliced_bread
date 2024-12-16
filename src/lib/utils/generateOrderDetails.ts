/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Order } from "../interfaces/Order";
import { OrderFormData } from "../interfaces/OrderFormData";
import { generateConfirmationNumber } from "./generateConfirmationNumber";

const RANDOM_NAMES = [
  "John Doe",
  "Mary Sloan",
  "Christopher Wood",
  "Marian Webster",
  "Arnold Anderson",
];

const DEFAULT_QUANTITIES = [2, 4, 6, 10, 12];

export const generateOrderDetails = (formData: OrderFormData): Order => {
  const id = crypto.randomUUID();
  const confirmationNumber = generateConfirmationNumber();
  const generatedName =
    formData.name ||
    RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
  const generatedQuantity =
    formData.quantity ||
    DEFAULT_QUANTITIES[Math.floor(Math.random() * DEFAULT_QUANTITIES.length)];

  return {
    ...formData,
    id,
    confirmationNumber,
    createdAt: new Date().toISOString(),
    generatedName: formData.name ? undefined : generatedName,
    generatedQuantity: formData.quantity ? undefined : generatedQuantity,
  };
};
