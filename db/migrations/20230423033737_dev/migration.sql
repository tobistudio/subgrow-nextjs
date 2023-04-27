/*
  Warnings:

  - You are about to drop the column `api_key` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `api_secret` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `show_feed` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `show_share` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `show_sub` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the `Blah` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Site` DROP COLUMN `api_key`,
    DROP COLUMN `api_secret`,
    DROP COLUMN `name`,
    DROP COLUMN `show_feed`,
    DROP COLUMN `show_share`,
    DROP COLUMN `show_sub`,
    ADD COLUMN `icon` VARCHAR(191) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `order` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `Blah`;

-- CreateTable
CREATE TABLE `Services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `admin_name` VARCHAR(191) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `api_key` VARCHAR(191) NULL,
    `api_secret` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `site_name` VARCHAR(191) NULL,
    `show_feed` ENUM('yes', 'no') NOT NULL DEFAULT 'no',
    `show_share` ENUM('yes', 'no') NOT NULL DEFAULT 'no',
    `show_sub` ENUM('yes', 'no') NOT NULL DEFAULT 'no',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
