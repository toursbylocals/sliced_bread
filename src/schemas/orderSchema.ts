import { z } from "zod";
import { MAX_ORDER_AMOUNT } from "@/app/consts";

export const OrderSchema = z.object({
  username: z.string(),
  quantity: z.coerce.number().gte(1).lte(MAX_ORDER_AMOUNT),
  city: z.string().min(1),
  region: z.string().min(1),
  country: z.string().min(1)
});
