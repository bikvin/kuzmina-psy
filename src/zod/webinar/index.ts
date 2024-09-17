import { z } from "zod";

export const createWebinarSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  description: z.string().min(1, { message: "Описание не может быть пустым" }),
  vimeoId: z
    .string()
    .min(1, { message: "Пожалуйста вставьте ID видео с Vimeo" }),
});

export const editWebinarSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  description: z.string().min(1, { message: "Описание не может быть пустым" }),
  vimeoId: z
    .string()
    .min(1, { message: "Пожалуйста вставьте ID видео с Vimeo" }),
  id: z.string().cuid({ message: "Неверный id вебинара" }),
});
