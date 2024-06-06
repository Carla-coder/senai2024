-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/06/2024 às 12:47
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `viagem`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `destino`
--

CREATE TABLE `destino` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `data` datetime(3) DEFAULT current_timestamp(3),
  `hoteisId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `destino`
--

INSERT INTO `destino` (`id`, `nome`, `valor`, `data`, `hoteisId`) VALUES
(1, 'Fortaleza', 2500.00, '2024-05-20 00:00:00.000', 1),
(2, 'Pernambuco', 3500.00, '2024-06-22 00:00:00.000', 2),
(3, 'Maragogi', 8599.65, '2025-06-11 00:00:00.000', 3),
(4, 'Porto de Galinhas', 7200.00, '2025-07-20 00:00:00.000', 2),
(5, 'Gramado', 5500.00, '2025-09-15 00:00:00.000', 1),
(6, 'Fernando de Noronha', 12000.00, '2025-08-03 00:00:00.000', 4),
(7, 'Bonito', 6500.00, '2025-10-10 00:00:00.000', 5),
(8, 'Jericoacoara', 7800.00, '2025-11-25 00:00:00.000', 6);

-- --------------------------------------------------------

--
-- Estrutura para tabela `hoteis`
--

CREATE TABLE `hoteis` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `avaliacao` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `destinoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `hoteis`
--

INSERT INTO `hoteis` (`id`, `nome`, `valor`, `avaliacao`, `email`, `site`, `destinoId`) VALUES
(1, 'Hotel Tabajara', 250.00, '4 estrelas', 'tabajara@teste.com', 'tabajara.com.br', 1),
(14, 'Hotel America', 450.00, '5 estrelas', 'america@teste.com', 'america.com.br', 2),
(15, 'Hotel Lindois', 658.95, '5 estrelas', 'Lindois@teste.com', 'Lindois.com', 1),
(16, 'Hotel Estrelar', 450.00, '4 estrelas', 'estrelar@teste.com', 'estrelar.com', 2),
(17, 'Pousada do Sol', 300.50, '4.5 estrelas', 'pousadasol@teste.com', 'pousadasol.com', 3),
(18, 'Hotel Luxor', 850.75, '5 estrelas', 'luxor@teste.com', 'luxor.com', 4),
(19, 'Pousada das Flores', 220.00, '4 estrelas', 'flores@teste.com', 'flores.com', 5),
(20, 'Resort Paradisíaco', 1200.00, '5 estrelas', 'paradisiaco@teste.com', 'paradisiaco.com', 6);

-- --------------------------------------------------------

--
-- Estrutura para tabela `ponto`
--

CREATE TABLE `ponto` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `telefone` varchar(191) NOT NULL,
  `valor` decimal(10,2) DEFAULT 0.00,
  `destinoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `ponto`
--

INSERT INTO `ponto` (`id`, `nome`, `endereco`, `telefone`, `valor`, `destinoId`) VALUES
(20, 'Praia de Iracema', 'Av. Beira Mar, Fortaleza', '(85) 99876-5432', 2500.00, 1),
(21, 'Centro Dragão do Mar de Arte e Cultura', 'Rua Dragão do Mar, 81, Fortaleza', '(85) 3456-7890', 2500.00, 2),
(22, 'Parque do Cocó', 'Av. Padre Antônio Tomás, Fortaleza', '(85) 3345-6789', 2500.00, 3),
(23, 'Mercado Central de Fortaleza', 'Av. Alberto Nepomuceno, 199, Fortaleza', '(85) 3219-6767', 2500.00, 4),
(24, 'Fortaleza de Nossa Senhora da Assunção', 'Av. Alberto Nepomuceno, s/n, Fortaleza', '(85) 3101-4596', 2500.00, 5),
(25, 'Praia do Futuro', 'Av. Zezé Diogo, Fortaleza', '(85) 3265-1234', 2500.00, 6),
(26, 'Catedral Metropolitana de Fortaleza', 'Praça Pedro II, Fortaleza', '(85) 3231-4197', 2500.00, 7),
(27, 'Jardim Japonês de Fortaleza', 'Av. Beira Mar, s/n, Fortaleza', '(85) 3242-9600', 2500.00, 8);

-- --------------------------------------------------------

--
-- Estrutura para tabela `_hoteldestino`
--

CREATE TABLE `_hoteldestino` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('386bc578-bda4-4bee-bfe6-e1bba40cee07', '05252157d09559d0823b277fd216cdb7b9aa54996468d8b5537386c22412b09a', '2024-05-20 12:21:31.023', '20240519183002_init', NULL, NULL, '2024-05-20 12:21:30.945', 1),
('3c455dad-fd39-42d8-8ed5-d76ec87d2bd2', '84a82f665afef4f40c20414782913141c04cded51fb7e9bdac5f7ac0ac6f62d5', '2024-05-20 12:21:30.944', '20240519174118_init', NULL, NULL, '2024-05-20 12:21:30.895', 1),
('8494d3f9-1fb3-4177-ba2a-6b349db8e6d3', 'ae5e87da171a536862f0d467f3c7be2c7f6c86937cebdbea00952fa94911faf8', '2024-05-20 12:21:30.894', '20240519170516_init', NULL, NULL, '2024-05-20 12:21:30.709', 1),
('ac48296d-f840-4679-85d7-1d3c9201c4e5', '60acceb7e90a4a4d5a1897b9392859912698f3dc344a6a6958de9fea12f2c349', '2024-05-20 12:25:48.051', '20240520122548_init', NULL, NULL, '2024-05-20 12:25:48.031', 1),
('ea7e8ddb-1ac7-4fd8-a222-783ae7f64f6b', '635936ce22c2c2d96789b23c213ea8419279ba69f0470f65e4b1be8262097d65', '2024-05-16 12:40:16.310', '20240516124016_init', NULL, NULL, '2024-05-16 12:40:16.248', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `destino`
--
ALTER TABLE `destino`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `hoteis`
--
ALTER TABLE `hoteis`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `ponto`
--
ALTER TABLE `ponto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Ponto_telefone_key` (`telefone`),
  ADD KEY `Ponto_destinoId_fkey` (`destinoId`);

--
-- Índices de tabela `_hoteldestino`
--
ALTER TABLE `_hoteldestino`
  ADD UNIQUE KEY `_HotelDestino_AB_unique` (`A`,`B`),
  ADD KEY `_HotelDestino_B_index` (`B`);

--
-- Índices de tabela `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `destino`
--
ALTER TABLE `destino`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `hoteis`
--
ALTER TABLE `hoteis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `ponto`
--
ALTER TABLE `ponto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `ponto`
--
ALTER TABLE `ponto`
  ADD CONSTRAINT `Ponto_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `destino` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `_hoteldestino`
--
ALTER TABLE `_hoteldestino`
  ADD CONSTRAINT `_HotelDestino_A_fkey` FOREIGN KEY (`A`) REFERENCES `destino` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_HotelDestino_B_fkey` FOREIGN KEY (`B`) REFERENCES `hoteis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
