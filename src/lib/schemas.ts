import * as z from "zod";

export const formSchema = z.object({
  name: z.string().optional(),
  quantity: z.string().optional(),
  city: z.string().min(1, "City is required"),
  stateProvince: z.string().min(1, "State/Province is required"),
  country: z.string().min(1, "Country is required"),
});
