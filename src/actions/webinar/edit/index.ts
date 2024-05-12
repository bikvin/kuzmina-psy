"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { editWebinarSchema } from "@/zod/webinar";
import { revalidatePath } from "next/cache";

interface EditWebinarFormState {
  errors: {
    header?: string[];
    description?: string[];
    youTubeCode?: string[];
    id?: string[];
    _form?: string[];
  };
}

export async function editWebinar(
  formState: EditWebinarFormState,
  formData: FormData
): Promise<EditWebinarFormState> {
  const result = editWebinarSchema.safeParse({
    id: formData.get("id"),
    header: formData.get("header"),
    description: formData.get("description"),
    youTubeCode: formData.get("youTubeCode"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const updatedWebinar = await db.webinar.update({
      where: {
        id: result.data.id,
      },
      data: {
        header: result.data.header,
        description: result.data.description,
        youTubeCode: result.data.youTubeCode,
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
