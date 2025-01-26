/*
  Warnings:

  - You are about to drop the column `TypeBiodata` on the `profile` table. All the data in the column will be lost.
  - Added the required column `Type` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "TypeBiodata",
ADD COLUMN     "Type" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;
