"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface DeleteWebinarFormState {
  errors: {
    _form?: string[];
  };
}

export async function deleteWebinar(
  formState: DeleteWebinarFormState,
  formData: FormData
): Promise<DeleteWebinarFormState> {
  const id = formData.get("id");

  console.log(id);

  if (!id) {
    throw new Error("Что-то пошло не так. Id вебинара не найден.");
  }

  if (typeof id !== "string") {
    throw new Error("Что-то пошло не так. Id вебинара нeверный.");
  }

  try {
    const deletedWebinar = await db.webinar.delete({
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

  revalidatePath("/admin/webinars");
  revalidatePath("/webinars");

  redirect("/admin/webinars");
}
