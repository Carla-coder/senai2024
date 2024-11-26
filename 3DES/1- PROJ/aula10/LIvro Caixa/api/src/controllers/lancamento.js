
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Criação de Lançamento
  create: async (req, res) => {
    const { usuarioId, descricao, tipo, valor, data } = req.body;
    try {
      const novoLancamento = await prisma.lancamento.create({
        data: { usuarioId, descricao, tipo, valor, data: new Date(data) },
      });
      res.status(201).json(novoLancamento);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar lançamento', details: err.message });
    }
  },

  // Leitura de Lançamentos
  read: async (req, res) => {
    try {
      const lancamentos = await prisma.lancamento.findMany();
      res.status(200).json(lancamentos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar lançamentos', details: err.message });
    }
  },

  // Leitura por Dia
  readDia: async (req, res) => {
    const { dia } = req.params;
    try {
      const lancamentos = await prisma.lancamento.findMany({
        where: {
          data: {
            equals: new Date(dia),
          },
        },
      });
      res.status(200).json(lancamentos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar lançamentos do dia', details: err.message });
    }
  },

  // Atualização de Lançamento
  update: async (req, res) => {
    const { id, descricao, tipo, valor, data } = req.body;
    try {
      const lancamentoAtualizado = await prisma.lancamento.update({
        where: { id },
        data: { descricao, tipo, valor, data: new Date(data) },
      });
      res.status(200).json(lancamentoAtualizado);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar lançamento', details: err.message });
    }
  },

  // Exclusão de Lançamento
  del: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.lancamento.delete({ where: { id: parseInt(id) } });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Erro ao deletar lançamento', details: err.message });
    }
  },
};
