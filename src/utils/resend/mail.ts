import { Resend } from "resend";
const domain = process.env.NEXT_PUBLIC_APP_URL;
import DOMPurify from "isomorphic-dompurify";
const resend = new Resend(process.env.RESEND_API_KEY);
import { db } from "@/db";

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

export const sendContactRequestEmail = async (
  name: string,
  contacts: string,
  message: string
) => {
  try {
    const email = await db.settings.findUnique({
      where: { field: "notificationsEmail" },
    });

    if (!email) {
      throw new Error("Notifications Email not found");
    }

    const html = `<p>Имя клиента: ${name}</p>
  <p>Контакты: ${contacts}</p>
  <p>Сообщение: ${message}</p>`;

    const cleanHtml = DOMPurify.sanitize(html);

    await resend.emails.send({
      from: "mail@kuzmina-psy.ru",
      to: email.value,
      subject: "Пришел новый запрос",
      html: cleanHtml,
    });
  } catch (err) {
    console.log(err);
  }
};
