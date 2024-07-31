"use server";

import { db } from "@/db";

import { revalidatePath } from "next/cache";

interface EditMainTextFormState {
  errors?: {
    text?: string[];
    _form?: string[];
  };
  success?: {
    message?: string;
  };
}

export async function editMainText(
  formState: EditMainTextFormState,
  formData: FormData
): Promise<EditMainTextFormState> {
  const text = formData.get("text");

  if (!text || typeof text !== "string") {
    return {
      errors: {
        _form: ["Error updating the main text. String must not be null."],
      },
    };
  }

  try {
    await db.settings.upsert({
      where: {
        field: "mainText",
      },
      update: {
        value: text,
      },
      create: {
        field: "mainText",
        value: text,
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
