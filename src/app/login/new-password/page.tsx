import NewPasswordForm from "@/components/login/newPasswordForm";
import classes from "../loginPage.module.css";
import { resetPasswordTokenSchema } from "@/zod/login";
import { redirect } from "next/navigation";
import { db } from "@/db";

interface pageParams {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ForgotPasswordPage({
  params,
  searchParams,
}: pageParams) {
  const token = searchParams.token;

  // check if token exists
  if (!token) {
    redirect("/login/incorrect-token");
  }

  //check if token is valid
  const result = resetPasswordTokenSchema.safeParse({
    token: token,
  });

  if (!result.success) {
    redirect("/login/incorrect-token");
  }

  //check if token is in db
  let tokenInDb;
  try {
    tokenInDb = await db.passwordResetToken.findFirst({
      where: { token: result.data.token },
    });
  } catch {
    console.log(
      "Не получилось проверить наличие токена в базе. Вероятно база недоступна."
    );
  }

  if (!tokenInDb) {
    redirect("/login/incorrect-token");
  }

  // check if the token is expired

  const now = new Date();

  const tokenExpired = now.getTime() > tokenInDb.expiresAt.getTime();

  if (tokenExpired) {
    redirect("/login/incorrect-token");
  }

  return (
    <>
      <div className={classes.container}>
        <h1>Укажите новый пароль</h1>
        <NewPasswordForm email={tokenInDb.email} />
      </div>
    </>
  );
}
