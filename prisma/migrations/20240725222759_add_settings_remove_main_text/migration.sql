/*
  Warnings:

  - You are about to drop the `MainText` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MainText";

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_field_key" ON "Settings"("field");
