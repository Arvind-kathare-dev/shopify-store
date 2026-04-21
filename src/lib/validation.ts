// lib/validation.ts
import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  
  workEmail: z.string().email("Enter a valid email"),

  phone: z
    .string()
    .regex(/^[0-9+\-\s()]*$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),

  storeName: z.string().min(2, "Store name is required"),

  storeUrl: z.string().url("Enter a valid URL (https://...)"),

  whatDoYouSell: z.string().min(1, "Please select an option"),

  achieve: z.string().min(1, "Select a goal"),

  launchSoon: z.string().min(1, "Select timeline"),

  features: z.string().optional(),

  monthlyRevenue: z.string().optional(),
});




export type FormSchemaType = z.infer<typeof formSchema>;