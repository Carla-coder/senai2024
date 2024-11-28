/*
  Warnings:

  - The values [BAIXA,MEDIA,ALTA] on the enum `Tarefa_prioridade` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `tarefa` MODIFY `prioridade` ENUM('baixa', 'media', 'alta') NOT NULL;
