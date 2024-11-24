import { z } from "zod";

export const TodoFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "title must be at least 2 characters.",
    })
    .max(30, {
      message: "title must not be longer than 30 characters.",
    }),
  body: z
    .string({
      required_error: "Please select an email to display.",
    })
    .max(80, {
      message: "describtion must not be longer than 80 characters",
    })
    .optional(),
  completed: z.boolean(),
});

export type TodoFormValues = z.infer<typeof TodoFormSchema>;
