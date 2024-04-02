-- CreateTable
CREATE TABLE "PassworsResetToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "PassworsResetToken_pkey" PRIMARY KEY ("id")
);
