import { z } from "zod";

// ✅ Create User Validation
export const createUserValidation = z.object({
  body: z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["super_admin", "admin", "guest", "customer", "libraian"]).optional(),
    profileImage: z.string().url("Invalid image URL").optional(),
  }),
});

// ✅ Login User Validation
export const loginUserValidation = z.object({
  body: z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password is required"),
  }),
});

// ✅ Update User Validation
export const updateUserValidation = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    role: z.enum(["super_admin", "admin", "guest", "customer", "libraian"]).optional(),
    profileImage: z.string().url().optional(),
    isDeleted: z.boolean().optional(),
  }),
});
