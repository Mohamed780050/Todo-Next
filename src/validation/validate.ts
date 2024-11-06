import z from "zod";
export const TodoModuleValidation = z.object({
  title: z.string().min(1, "Feild is Empty"),
  body: z.string(),
  completed: z.boolean().default(false),
});
