"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { editArticleSchema } from "@/zod/article";
import { revalidatePath } from "next/cache";

interface EditArticleFormState {
  errors: {
    header?: string[];
    description?: string[];
    text?: string[];
    id?: string[];
    imageFileName?: string[];
    _form?: string[];
  };
}

export async function editArticle(
  formState: EditArticleFormState,
  formData: FormData
): Promise<EditArticleFormState> {
  // console.log("formData ", formData);

  const result = editArticleSchema.safeParse({
    id: formData.get("id"),
    header: formData.get("header"),
    description: formData.get("description"),
    text: formData.get("text"),
    imageFileName: formData.get("imageFileName") as string | null,
  });

  // console.log(result.error);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // console.log(result);

  try {
    const updatedArticle = await db.article.update({
      where: {
        id: result.data.id,
      },
      data: {
        header: result.data.header,
        description: result.data.description,
        text: result.data.text,
        imageFileName: result.data.imageFileName,
      },
    });

    revalidatePath("/admin/articles");
    revalidatePath("/articles");
    revalidatePath(`/articles/${result.data.id}`);
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

  redirect("/admin/articles");
}
