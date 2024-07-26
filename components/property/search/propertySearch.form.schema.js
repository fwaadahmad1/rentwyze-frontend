"use client";

import { PropertyTypeEnum, ProvincesEnum } from "@/lib/constants";
import { z } from "zod";

export const PriceRangeEnum = {
  Low: { min: 0, max: 500 },
  Medium: { min: 501, max: 1000 },
  High: { min: 1000, max: 3000 },
};

export const SizeRangeEnum = {
  Small: { min: 0, max: 500 },
  Medium: { min: 501, max: 1000 },
  Large: { min: 1000, max: 1500 },
  ExtraLarge: { min: 1501, max: 3000 },
};

export const propertySearchFormSchema = z.object({
  text: z.string().optional(),
  location: z.enum(Object.keys(ProvincesEnum)).optional(),
  type: z.enum(Object.keys(PropertyTypeEnum)).optional(),
  price: z.enum(Object.keys(PriceRangeEnum)).optional(),
  size: z.enum(Object.keys(SizeRangeEnum)).optional(),
});
