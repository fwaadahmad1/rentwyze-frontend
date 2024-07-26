"use client";

import { Amenities, PropertyTypeEnum, ProvincesEnum } from "@/lib/constants";
import { z } from "zod";

export const propertyCreateFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 character(s)")
    .max(50, "Name must contain at most 50 character(s)"),
  address: z
    .string()
    .min(3, "Address must contain at least 3 character(s)")
    .max(50, "Address must contain at most 50 character(s)"),
  price: z.preprocess((val) => {
    const parsedValue = parseFloat(val);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }, z.number().positive()),
  bedrooms: z.preprocess((val) => {
    const parsedValue = parseFloat(val);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }, z.number().int("Cannot be decimal").positive()),
  bathrooms: z.preprocess((val) => {
    const parsedValue = parseFloat(val);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }, z.number().int("Cannot be decimal").positive()),
  location: z.enum(Object.keys(ProvincesEnum)),
  type: z.enum(Object.values(PropertyTypeEnum)),
  size: z.preprocess((val) => {
    const parsedValue = parseFloat(val);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }, z.number().positive()),
  landlord: z.string().min(1, "Required").email(),
  amenities: z.array(z.enum(Amenities)),
});
