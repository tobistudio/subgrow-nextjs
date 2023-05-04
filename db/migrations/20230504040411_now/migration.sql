/*
  Warnings:

  - You are about to alter the column `show_feed` on the `Apps` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `TinyInt`.
  - You are about to alter the column `show_share` on the `Apps` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `TinyInt`.
  - You are about to alter the column `show_sub` on the `Apps` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(5))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Apps` MODIFY `show_feed` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `show_share` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `show_sub` BOOLEAN NOT NULL DEFAULT false;
