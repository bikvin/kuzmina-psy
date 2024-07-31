import { z } from "zod";

export const editPricesSchema = z.object({
  oneConsultation: z.number({
    required_error: "Укажите цену",
    invalid_type_error: "Цена должна быть числом",
  }),
  fiveConsultations: z.number({
    required_error: "Укажите цену",
    invalid_type_error: "Цена должна быть числом",
  }),
});
