/*
  Warnings:

  - You are about to drop the column `youTubeLink` on the `Webinar` table. All the data in the column will be lost.
  - Added the required column `youTubeCode` to the `Webinar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Webinar" DROP COLUMN "youTubeLink",
ADD COLUMN     "youTubeCode" TEXT NOT NULL;
