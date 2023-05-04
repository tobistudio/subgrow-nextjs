/*
  Warnings:

  - You are about to drop the column `companyId` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `level` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Customer_companyId_key` ON `Customer`;

-- AlterTable
ALTER TABLE `Customer` DROP COLUMN `companyId`,
    ADD COLUMN `level` VARCHAR(191) NOT NULL,
    ADD COLUMN `sub_create` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `sub_end` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
