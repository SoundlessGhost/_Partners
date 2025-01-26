/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "profile" (
    "Id" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "ExpectedPA" TEXT NOT NULL,
    "EmailAddress" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "TypeBiodata" TEXT NOT NULL,
    "DateOfBirth" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Occupation" TEXT NOT NULL,
    "FatherName" TEXT NOT NULL,
    "MotherName" TEXT NOT NULL,
    "Height" TEXT NOT NULL,
    "Weight" TEXT NOT NULL,
    "Face" TEXT NOT NULL,
    "PresentDivision" TEXT NOT NULL,
    "PermanentDivision" TEXT NOT NULL,
    "ExpectedPH" TEXT NOT NULL,
    "ExpectedPW" TEXT NOT NULL,
    "Permanent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("Id")
);
