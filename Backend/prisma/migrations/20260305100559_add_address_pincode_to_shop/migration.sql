/*
  Warnings:

  - Added the required column `Address` to the `shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pincode` to the `shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shop` ADD COLUMN `Address` VARCHAR(191) NOT NULL,
    ADD COLUMN `Pincode` INTEGER NOT NULL;
