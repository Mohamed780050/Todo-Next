import z from "zod";
export const TodoModuleValidation = z.object({
  Title: z.string().min(1, "Feild is Empty"),
  Body: z.string(),
  Completed: z.boolean().default(false),
});
