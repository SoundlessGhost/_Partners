/*
  Warnings:

  - The primary key for the `profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `EmailAddress` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `ExpectedPA` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `ExpectedPH` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `ExpectedPW` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `Permanent` on the `profile` table. All the data in the column will be lost.
  - Added the required column `Email` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ExpectedPartnerAge` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ExpectedPartnerHeight` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ExpectedPartnerWeight` to the `profile` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `profile` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "profile" DROP CONSTRAINT "profile_pkey",
DROP COLUMN "Description",
DROP COLUMN "EmailAddress",
DROP COLUMN "ExpectedPA",
DROP COLUMN "ExpectedPH",
DROP COLUMN "ExpectedPW",
DROP COLUMN "Id",
DROP COLUMN "Permanent",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "ExpectedPartnerAge" TEXT NOT NULL,
ADD COLUMN     "ExpectedPartnerHeight" TEXT NOT NULL,
ADD COLUMN     "ExpectedPartnerWeight" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "profile_pkey" PRIMARY KEY ("id");
