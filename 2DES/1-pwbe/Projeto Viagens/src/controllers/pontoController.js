const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const pontoController = {
  create: async (req, res) => {
    try {
      const { nome, endereco, telefone, valor, destinoId } = req.body;
      
      // Verifica se o telefone já existe
      const telefoneExistente = await prisma.ponto.findUnique({
        where: { telefone }
      });

      if (telefoneExistente) {
        return res.status(400).json({ error: 'Telefone já cadastrado' });
      }

      const ponto = await prisma.ponto.create({
        data: {
          nome,
          endereco,
          telefone,
          valor: parseFloat(valor), // Certifique-se de que o valor é um número
          destinoId
        }
      });
      res.json(ponto);
    } catch (error) {
      console.error('Erro ao criar ponto:', error);
      res.status(500).json({ error: 'Erro ao criar ponto' });
    }
  },

  read: async (req, res) => {
    try {
      const pontos = await prisma.ponto.findMany();
      res.json(pontos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pontos' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, endereco, telefone, valor, destinoId } = req.body;
      const ponto = await prisma.ponto.update({
        where: { id: Number(id) },
        data: {
          nome,
          endereco,
          telefone,
          valor: parseFloat(valor), // Certifique-se de que o valor é um número
          destinoId
        }
      });
      res.json(ponto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar ponto' });
    }
  },

  del: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.ponto.delete({ where: { id: Number(id) } });
      res.json({ message: 'Ponto excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir ponto' });
    }
  }
};

module.exports = pontoController;
