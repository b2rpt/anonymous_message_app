import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(2, "at least 2 char")
    .max(300, "not execced 300 chars"),
});
