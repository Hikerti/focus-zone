/*
  Warnings:

  - You are about to drop the `CardsCafe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CardsCafe";

-- CreateTable
CREATE TABLE "card_cafe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "card_cafe_pkey" PRIMARY KEY ("id")
);
