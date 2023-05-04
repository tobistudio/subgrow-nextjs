/*
  Warnings:

  - You are about to drop the column `delivery_terms` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Customer` DROP COLUMN `delivery_terms`,
    ADD COLUMN `stripe_results` JSON NULL,
    ADD COLUMN `term` VARCHAR(191) NULL;
