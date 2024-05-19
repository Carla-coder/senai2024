/*
  Warnings:

  - Made the column `avaliacao` on table `hoteis` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `destino` MODIFY `valor` DECIMAL(10, 2) NULL,
    MODIFY `data` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `hoteis` MODIFY `valor` DECIMAL(10, 2) NULL,
    MODIFY `avaliacao` INTEGER NOT NULL DEFAULT 0,
    MODIFY `site` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `ponto` MODIFY `valor` DECIMAL(10, 2) NULL DEFAULT 0;
