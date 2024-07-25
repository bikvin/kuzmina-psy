"use server";

import { db } from "@/db";
import { createAccordionItemSchema } from "@/zod/accordionItem";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateAccordionItemsFormState {
  errors: {
    header?: string[];
    text?: string[];
    _form?: string[];
  };
}

export async function createAccordionItem(
  formState: CreateAccordionItemsFormState,
  formData: FormData
): Promise<CreateAccordionItemsFormState> {
  try {
    const header = formData.get("header");

    const text = formData.get("text");

    const result = createAccordionItemSchema.safeParse({
      header: header,
      text: text,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    await db.accordionItem.create({
      data: {
        header: result.data.header,
        text: result.data.text,
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
      return {
        errors: { _form: ["Что-то пошло не так"] },
      };
    }
  }

  revalidatePath("/admin/accordionItems");
  revalidatePath("/");

  redirect("/admin/accordionItems");
}
