/*
  Warnings:

  - You are about to drop the `_destinotoponto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_destinotoponto` DROP FOREIGN KEY `_DestinoToPonto_A_fkey`;

-- DropForeignKey
ALTER TABLE `_destinotoponto` DROP FOREIGN KEY `_DestinoToPonto_B_fkey`;

-- AlterTable
ALTER TABLE `destino` ADD COLUMN `hoteisId` INTEGER NULL;

-- AlterTable
ALTER TABLE `hoteis` ADD COLUMN `destinoId` INTEGER NULL;

-- AlterTable
ALTER TABLE `ponto` ADD COLUMN `destinoId` INTEGER NULL,
    MODIFY `telefone` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_destinotoponto`;

-- AddForeignKey
ALTER TABLE `Ponto` ADD CONSTRAINT `Ponto_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
