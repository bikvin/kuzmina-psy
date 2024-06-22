"use server";

import { db } from "@/db";
import { createArticleSchema } from "@/zod/article";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateArticleFormState {
  errors: {
    header?: string[];
    description?: string[];
    text?: string[];
    imageFileName?: string[];
    _form?: string[];
  };
}

export async function createArticle(
  formState: CreateArticleFormState,
  formData: FormData
): Promise<CreateArticleFormState> {
  try {
    const header = formData.get("header");
    const description = formData.get("description");
    const text = formData.get("text");
    const imageFileName = formData.get("imageFileName");

    const result = createArticleSchema.safeParse({
      header: header,
      description: description,
      text: text,
      imageFileName: imageFileName,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const article = await db.article.create({
      data: {
        header: result.data.header,
        description: result.data.description,
        text: result.data.text,
        imageFileName: result.data.imageFileName,
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

  revalidatePath("/admin/articles");
  revalidatePath("/articles");

  redirect("/admin/articles");
}
