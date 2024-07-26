"use client";

import { z } from "zod";

export const ProvincesEnum = {
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NS: "Nova Scotia",
  NT: "Northwest Territories",
  NU: "Nunavut",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Quebec",
  SK: "Saskatchewan",
  YT: "Yukon",
};

export const PropertyTypeEnum = {
  House: "House",
  Apartment: "Apartment",
  Basement: "Basement",
};

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
