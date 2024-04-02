import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Введите корректный адрес почты" }),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(6, { message: "Минимум 6 символов" }),
    repeatPassword: z.string().min(6, { message: "Минимум 6 символов" }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Пароли не совпадают",
    path: ["repeatPassword"], // path of error
  });

export const resetPasswordTokenSchema = z.object({
  token: z.string().uuid({ message: "Неверный формат токена" }),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, { message: "Минимум 6 символов" }),
    repeatPassword: z.string().min(6, { message: "Минимум 6 символов" }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Пароли не совпадают",
    path: ["repeatPassword"], // path of error
  });
