"use server";

import { db } from "@/db";
import bcrypt from "bcrypt";
import { resetPasswordSchema } from "@/zod/login";

import { redirect } from "next/navigation";
import type { User } from "@prisma/client";

interface ForgotPaswordFormState {
  errors?: {
    password?: string[];
    repeatPassword?: string[];
    _form?: string[];
  };
  success?: string | null;
}

export async function newPassword(
  formState: ForgotPaswordFormState,
  formData: FormData
): Promise<ForgotPaswordFormState> {
  const result = resetPasswordSchema.safeParse({
    password: formData.get("password"),
    repeatPassword: formData.get("repeatPassword"),
  });

  console.log(formData.get("email"));

  // check if passwords ok
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);

    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  //get the user and check if he is in the db
  const email = formData.get("email");

  if (!email) {
    return { errors: { _form: ["Ошибка. Почта не указана."] } };
  }

  let user: User | null;

  try {
    user = await db.user.findFirst({ where: { email: email as string } });
  } catch (err) {
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    } else {
      return {
        errors: { _form: ["Ошибка. Вероятно нет подключения к базе данных."] },
      };
    }
  }

  if (!user) {
    return {
      errors: { _form: ["Ошибка. Пользователь не найден."] },
    };
  }

  // here we have the user

  const newPasswordHashed = await bcrypt.hash(result.data.password, 10);

  try {
    await db.user.update({
      where: { id: user.id },
      data: { password: newPasswordHashed },
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
        _form: ["Ошибка. Не удалось обновить пароль."];
      }
    }
  }

  return { success: "Пароль изменен" };
}
