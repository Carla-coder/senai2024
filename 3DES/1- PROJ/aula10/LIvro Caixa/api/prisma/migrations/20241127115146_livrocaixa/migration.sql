/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `lancamento` table. All the data in the column will be lost.
  - You are about to alter the column `tipo` on the `lancamento` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.
  - You are about to alter the column `data` on the `lancamento` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `nome` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `usuario` to the `Lancamento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `lancamento` DROP FOREIGN KEY `Lancamento_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `lancamento` DROP COLUMN `usuarioId`,
    ADD COLUMN `usuario` INTEGER NOT NULL,
    MODIFY `descricao` TEXT NOT NULL,
    MODIFY `tipo` ENUM('entrada', 'saida') NOT NULL DEFAULT 'entrada',
    MODIFY `data` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `usuario` MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Lancamento` ADD CONSTRAINT `Lancamento_usuario_fkey` FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
