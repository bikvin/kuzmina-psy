import { z } from "zod";

export const createWebinarSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  description: z.string().min(1, { message: "Описание не может быть пустым" }),
  youTubeCode: z
    .string()
    .min(1, { message: "Пожалуйста вставьте iframe код с YouTube" }),
});

export const editWebinarSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  description: z.string().min(1, { message: "Описание не может быть пустым" }),
  youTubeCode: z
    .string()
    .min(1, { message: "Пожалуйста вставьте iframe код с YouTube" }),
  id: z.string().cuid({ message: "Неверный id вебинара" }),
});
