"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface DeleteAccordionItemFormState {
  errors: {
    _form?: string[];
  };
}

export async function deleteAccordionItem(
  formState: DeleteAccordionItemFormState,
  formData: FormData
): Promise<DeleteAccordionItemFormState> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("Что-то пошло не так. Id не найден.");
  }

  if (typeof id !== "string") {
    throw new Error("Что-то пошло не так. Id нeверный.");
  }

  try {
    await db.accordionItem.delete({
      where: {
        id: id,
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

  revalidatePath("/admin/accordionItems");
  revalidatePath("/");

  redirect("/admin/accordionItems");
}
