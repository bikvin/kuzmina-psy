import { z } from "zod";

export const createArticleSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  description: z.string().min(1, { message: "Описание не может быть пустым" }),
  text: z
    .string()
    .min(1, { message: "Содержание статьи не может быть пустым" }),
  imageFileName: z
    .string()
    .min(1, { message: "Пожалуйста добавьте файл для обложки" }),
});

export const editArticleSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  description: z.string().min(1, { message: "Описание не может быть пустым" }),
  text: z
    .string()
    .min(1, { message: "Содержание статьи не может быть пустым" }),
  id: z.string().cuid({ message: "Неверный id статьи" }),
  imageFileName: z
    .string()
    .min(1, { message: "Пожалуйста добавьте файл для обложки" }),
});
