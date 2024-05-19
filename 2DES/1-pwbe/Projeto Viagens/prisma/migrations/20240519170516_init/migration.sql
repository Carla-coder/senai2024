/*
  Warnings:

  - You are about to drop the column `data` on the `hoteis` table. All the data in the column will be lost.
  - You are about to drop the `destinos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pontos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `idx_nome_hotel` ON `hoteis`;

-- AlterTable
ALTER TABLE `hoteis` DROP COLUMN `data`,
    ADD COLUMN `avaliacao` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(255) NULL,
    ADD COLUMN `site` VARCHAR(191) NULL,
    MODIFY `nome` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `destinos`;

-- DropTable
DROP TABLE `pontos`;

-- CreateTable
CREATE TABLE `Destino` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ponto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `valor` DOUBLE NOT NULL,

    UNIQUE INDEX `Ponto_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HotelDestino` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_HotelDestino_AB_unique`(`A`, `B`),
    INDEX `_HotelDestino_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DestinoToPonto` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DestinoToPonto_AB_unique`(`A`, `B`),
    INDEX `_DestinoToPonto_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_HotelDestino` ADD CONSTRAINT `_HotelDestino_A_fkey` FOREIGN KEY (`A`) REFERENCES `Destino`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelDestino` ADD CONSTRAINT `_HotelDestino_B_fkey` FOREIGN KEY (`B`) REFERENCES `Hoteis`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DestinoToPonto` ADD CONSTRAINT `_DestinoToPonto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Destino`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DestinoToPonto` ADD CONSTRAINT `_DestinoToPonto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Ponto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
