import { z } from "zod";

export const createConnectSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Пожалуйста напишите как к вам можно обращаться" }),
  contacts: z
    .string()
    .min(1, { message: "Пожалуйста укажите хотя бы один способ контакта" }),
  message: z.string(),
});
