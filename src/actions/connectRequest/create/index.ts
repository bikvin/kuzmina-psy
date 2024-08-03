"use server";

import { db } from "@/db";
import { sendContactRequestEmail } from "@/utils/resend/mail";

import { createConnectSchema } from "@/zod/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateConnectRequestFormState {
  errors?: {
    name?: string[];
    contacts?: string[];
    message?: string[];
    _form?: string[];
  };
  success?: {
    message: string;
  };
}

export async function createConnectRequest(
  formState: CreateConnectRequestFormState,
  formData: FormData
): Promise<CreateConnectRequestFormState> {
  try {
    const name = formData.get("name");
    const contacts = formData.get("contacts");
    const message = formData.get("message");

    const result = createConnectSchema.safeParse({
      name: name,
      contacts: contacts,
      message: message,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    await db.connectRequest.create({
      data: {
        name: result.data.name,
        contacts: result.data.contacts,
        message: result.data.message,
      },
    });

    await sendContactRequestEmail(
      result.data.name,
      result.data.contacts,
      result.data.message
    );

    return {
      success: {
        message:
          "Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.",
      },
    };
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

  revalidatePath("/admin");
  // revalidatePath("/articles");

  // redirect("/admin/articles");
}
