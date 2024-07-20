"use client";

import { z } from "zod";
export const RoleEnum = {
  RENTER: "Renter",
  OWNER: "Owner",
};
export const GenderEnum = {
  MALE: "Male",
  FEMALE: "Female",
  CANNOT_SAY: "Cannot say",
};

export const registerFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Lat name is required"),
  email: z.string().email("Invalid Email").min(1, "Email is required"),
  contactNo: z
    .string()
    .regex(/^\d{10}$/, "Invalid contact number")
    .min(1, "Contact number is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .min(1, "Password is required"),
  gender: z.enum(Object.keys(GenderEnum)),
  role: z.enum(Object.keys(RoleEnum)),
});
