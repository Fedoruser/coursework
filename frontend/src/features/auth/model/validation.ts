import { z } from "zod";

export const authSchema = (type: "login" | "registration") =>
  z
    .object({
      username: z
        .string()
        .min(3, "Имя пользователя должно быть не менее 3 символов"),
      password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
      confirmPassword:
        type === "registration"
          ? z.string().min(6, "Пароль должен быть не менее 6 символов")
          : z.literal("").optional(),
      remember: z.boolean().optional(),
    })
    .refine(
      (data) => data.password === data.confirmPassword || type === "login",
      {
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
      }
    );
