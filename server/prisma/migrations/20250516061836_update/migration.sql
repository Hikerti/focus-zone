-- CreateTable
CREATE TABLE "discounts" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "cafeId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievement" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "cafeId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);
