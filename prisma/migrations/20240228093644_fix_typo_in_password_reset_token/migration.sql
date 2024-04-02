/*
  Warnings:

  - You are about to drop the `PassworsResetToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PassworsResetToken";

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);
