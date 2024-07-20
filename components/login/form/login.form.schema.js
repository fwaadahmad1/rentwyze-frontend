"use client";

import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .min(1, "Password is required"),
});
