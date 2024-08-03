"use server";

import { db } from "@/db";
import { editSettingsSchema } from "@/zod/settings";

import { revalidatePath } from "next/cache";

interface EditPricesFormState {
  errors?: {
    oneConsultation?: string[];
    fiveConsultations?: string[];
    notificationsEmail?: string[];
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
  let oneConsultation = formData.get("oneConsultation");
  let fiveConsultations = formData.get("fiveConsultations");
  const notificationsEmail = formData.get("notificationsEmail");

  // this is for typescript to be happy with the possible null value
  if (!oneConsultation) oneConsultation = "";
  if (!fiveConsultations) fiveConsultations = "";

  const result = editSettingsSchema.safeParse({
    oneConsultation: +oneConsultation,
    fiveConsultations: +fiveConsultations,
    notificationsEmail: notificationsEmail,
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

    await db.settings.upsert({
      where: {
        field: "notificationsEmail",
      },
      update: {
        value: result.data.notificationsEmail.toString(),
      },
      create: {
        field: "notificationsEmail",
        value: result.data.notificationsEmail.toString(),
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
