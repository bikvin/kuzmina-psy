import { z } from "zod";

export const createAccordionItemSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  text: z.string().min(1, { message: "Содержание не может быть пустым" }),
});

export const editAccordionItemSchema = z.object({
  header: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  text: z.string().min(1, { message: "Содержание не может быть пустым" }),
  id: z.string().cuid({ message: "Неверный id статьи" }),
});
