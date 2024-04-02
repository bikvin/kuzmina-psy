"use server";

import { db } from "@/db";
import bcrypt from "bcrypt";
import { forgotPasswordSchema } from "@/zod/login";
import type { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { sendPasswordResetEmail } from "@/utils/resend/mail";

interface ForgotPaswordFormState {
  errors?: {
    email?: string[];
    _form?: string[];
  };
  success?: string | null;
}

export async function forgotPassword(
  formState: ForgotPaswordFormState,
  formData: FormData
): Promise<ForgotPaswordFormState> {
  const result = forgotPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const currentUser = await db.user.findFirst({
      where: { email: result.data.email },
    });

    if (!currentUser) {
      return {
        errors: { _form: ["Пользователь с такой почтой не найден"] },
      };
    }

    //check if there is an existing token for this email and delete it
    const existingToken = await db.passwordResetToken.findFirst({
      where: { email: result.data.email },
    });

    if (existingToken) {
      await db.passwordResetToken.delete({ where: { id: existingToken.id } });
    }

    // create token for password recovery
    const tokenString = uuidv4();
    const expiresAt = new Date(new Date().getTime() + 60 * 60 * 1000);

    const token = await db.passwordResetToken.create({
      data: {
        token: tokenString,
        expiresAt: expiresAt,
        email: result.data.email,
      },
    });

    await sendPasswordResetEmail(token.email, token.token);
  } catch (err) {
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

  return {
    success: "Отправили письмо для сброса пароля",
  };
}
