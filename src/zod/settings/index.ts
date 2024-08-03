import { z } from "zod";

export const editSettingsSchema = z.object({
  oneConsultation: z.number({
    required_error: "Укажите цену",
    invalid_type_error: "Цена должна быть числом",
  }),
  fiveConsultations: z.number({
    required_error: "Укажите цену",
    invalid_type_error: "Цена должна быть числом",
  }),
  notificationsEmail: z
    .string()
    .email({ message: "Введите корректный адрес почты" }),
});
