import { OrderFormData } from "./OrderFormData";

export interface Order extends OrderFormData {
  id: string;
  confirmationNumber: string;
  createdAt: string;
  generatedName?: string;
  generatedQuantity?: number;
}
