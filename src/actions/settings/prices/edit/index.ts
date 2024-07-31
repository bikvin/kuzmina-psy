"use server";

import { db } from "@/db";
import { editPricesSchema } from "@/zod/prices";

import { revalidatePath } from "next/cache";

interface EditPricesFormState {
  errors?: {
    oneConsultation?: string[];
    fiveConsultations?: string[];
    _form?: string[];
  };
  success?: {
    message?: string;
  };
}

export async function editPrices(
  formState: EditPricesFormState,
  formData: FormData
): Promise<EditPricesFormState> {
  const oneConsultation = formData.get("oneConsultation");
  const fiveConsultations = formData.get("fiveConsultations");

  if (!oneConsultation || !fiveConsultations) {
    return { errors: { _form: ["Укажите цены"] } };
  }

  const result = editPricesSchema.safeParse({
    oneConsultation: +oneConsultation,
    fiveConsultations: +fiveConsultations,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.settings.upsert({
      where: {
        field: "oneConsultationPrice",
      },
      update: {
        value: result.data.oneConsultation.toString(),
      },
      create: {
        field: "oneConsultationPrice",
        value: result.data.oneConsultation.toString(),
      },
    });

    await db.settings.upsert({
      where: {
        field: "fiveConsultationsPrice",
      },
      update: {
        value: result.data.fiveConsultations.toString(),
      },
      create: {
        field: "fiveConsultationsPrice",
        value: result.data.fiveConsultations.toString(),
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      errors: {
        _form: ["Something went wrong"];
      }
    }
  }
  revalidatePath("/");
  revalidatePath("/admin/settings");
  return {
    success: { message: "Сохранено" },
  };
}
