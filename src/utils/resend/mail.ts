import { Resend } from "resend";
const domain = process.env.NEXT_PUBLIC_APP_URL;

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/login/new-password?token=${token}`;

  const html = `<p>Нажмите <a href="${resetLink}">здесь</a> для восстановления пароля.</p>`;

  await resend.emails.send({
    from: "mail@kuzmina-psy.ru",
    to: email,
    subject: "Восстановление пароля",
    html: html,
  });
};
