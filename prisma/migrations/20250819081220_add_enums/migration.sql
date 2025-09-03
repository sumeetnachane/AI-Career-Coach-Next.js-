/*
  Warnings:

  - You are about to drop the column `quizeScore` on the `Assessment` table. All the data in the column will be lost.
  - Added the required column `quizScore` to the `Assessment` table without a default value. This is not possible if the table is not empty.
  - Made the column `jobTitle` on table `CoverLetter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Assessment" DROP COLUMN "quizeScore",
ADD COLUMN     "quizScore" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "public"."CoverLetter" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'draft',
ALTER COLUMN "jobTitle" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "atsScore" DOUBLE PRECISION,
ADD COLUMN     "feedback" TEXT;
