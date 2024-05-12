"use server";

import { db } from "@/db";
import { createWebinarSchema } from "@/zod/webinar";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateWebinarFormState {
  errors: {
    header?: string[];
    description?: string[];
    youTubeLink?: string[];
    _form?: string[];
  };
}

export async function createWebinar(
  formState: CreateWebinarFormState,
  formData: FormData
): Promise<CreateWebinarFormState> {
  try {
    const header = formData.get("header");
    const description = formData.get("description");
    const youTubeCode = formData.get("youTubeCode");

    const result = createWebinarSchema.safeParse({
      header: header,
      description: description,
      youTubeCode: youTubeCode,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const webinar = await db.webinar.create({
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
      return {
        errors: { _form: ["Что-то пошло не так"] },
      };
    }
  }

  revalidatePath("/admin/webinars");
  revalidatePath("/webinars");

  redirect("/admin/webinars");
}
