-- AlterTable
ALTER TABLE "user" ADD COLUMN     "adress" TEXT DEFAULT '',
ADD COLUMN     "description" TEXT DEFAULT '',
ADD COLUMN     "login" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone" TEXT DEFAULT '',
ADD COLUMN     "surname" TEXT NOT NULL DEFAULT '';
