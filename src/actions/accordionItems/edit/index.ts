"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { editAccordionItemSchema } from "@/zod/accordionItem";
import { revalidatePath } from "next/cache";

interface EditAcoordionItemFormState {
  errors: {
    header?: string[];
    description?: string[];
    text?: string[];
    id?: string[];
    imageFileName?: string[];
    _form?: string[];
  };
}

export async function editAccordionItem(
  formState: EditAcoordionItemFormState,
  formData: FormData
): Promise<EditAcoordionItemFormState> {
  // console.log("formData ", formData);

  const result = editAccordionItemSchema.safeParse({
    id: formData.get("id"),
    header: formData.get("header"),
    text: formData.get("text"),
  });

  // console.log(result.error);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // console.log(result);

  try {
    await db.accordionItem.update({
      where: {
        id: result.data.id,
      },
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
      errors: {
        _form: ["Something went wrong"];
      }
    }
  }

  revalidatePath("/admin/accordionItems");
  revalidatePath("/");

  redirect("/admin/accordionItems");
}
