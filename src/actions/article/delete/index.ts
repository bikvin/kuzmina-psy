"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface DeleteArticleFormState {
  errors: {
    _form?: string[];
  };
}

export async function deleteArticle(
  formState: DeleteArticleFormState,
  formData: FormData
): Promise<DeleteArticleFormState> {
  const id = formData.get("id");

  console.log(id);

  if (!id) {
    throw new Error("Что-то пошло не так. Id статьи не найден.");
  }

  if (typeof id !== "string") {
    throw new Error("Что-то пошло не так. Id статьи нeверный.");
  }

  try {
    const deletedArticle = await db.article.delete({
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

  revalidatePath("/admin/articles");
  revalidatePath("/articles");

  redirect("/admin/articles");
}
