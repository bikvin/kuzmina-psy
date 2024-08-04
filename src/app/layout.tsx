import type { Metadata } from "next";
import { Lora, Carlito } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-lora",
  weight: ["400", "700"],
});

const carlito = Carlito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-carlito",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Психолог Анастасия Кузьмина",
  description:
    "Приветствую! Меня зовут Анастасия, и я психолог с преданным отношением к помощи людям. С уникальным подходом к каждому клиенту и вниманием к деталям, я стремлюсь создать поддерживающую и доверительную атмосферу. Моя цель – помочь вам разрешить эмоциональные трудности, обрести ясность и достичь личных целей. С радостью готова быть вашим проводником на пути к психологическому благополучию!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${lora.variable} ${carlito.variable}`}>{children}</body>
    </html>
  );
}
