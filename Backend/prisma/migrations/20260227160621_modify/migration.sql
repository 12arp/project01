/*
  Warnings:

  - Made the column `CountryId` on table `shop` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stateId` on table `shop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `shop` MODIFY `CountryId` INTEGER NOT NULL,
    MODIFY `stateId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_CountryId_fkey` FOREIGN KEY (`CountryId`) REFERENCES `countries`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
