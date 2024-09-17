/*
  Warnings:

  - You are about to drop the column `youTubeCode` on the `Webinar` table. All the data in the column will be lost.
  - Added the required column `vimeoId` to the `Webinar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Webinar" DROP COLUMN "youTubeCode",
ADD COLUMN     "vimeoId" TEXT NOT NULL;
