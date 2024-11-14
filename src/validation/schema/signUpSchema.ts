import { z } from "zod";

export const userNamevalidation = z
  .string()
  .min(2, "user name must be atleast 2 characters")
  .max(20, "user name must not be execced 20 characters")
  .regex(/^[a-zA-Z0-9_]/, "special chars are not allowed except '_'");

export const signUpSchema = z.object({
  userName: userNamevalidation,
  email: z.string().email({ message: "inavlid email address" }),
  password: z
    .string()
    .min(6, { message: "must not less than 6" })
    .max(20, { message: "must not exceed 20" }),
});
