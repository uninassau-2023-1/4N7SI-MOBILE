/*
  Warnings:

  - Added the required column `code` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "code" TEXT NOT NULL;
