/*
  Warnings:

  - The primary key for the `Certificate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageFileName` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `Certificate` table. All the data in the column will be lost.
  - Added the required column `fileNamesArr` to the `Certificate` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Certificate` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_pkey",
DROP COLUMN "imageFileName",
DROP COLUMN "order",
ADD COLUMN     "fileNamesArr" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id");
