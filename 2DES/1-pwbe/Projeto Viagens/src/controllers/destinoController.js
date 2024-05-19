const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const destinoController = {
  create: async (req, res) => {
    try {
      const { nome, valor, data, hoteisId } = req.body;
      const destino = await prisma.destino.create({
        data: {
          nome,
          valor,
          data,
          hoteisId
        }
      });
      res.json(destino);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar destino' });
    }
  },

  read: async (req, res) => {
    try {
      const destinos = await prisma.destino.findMany();
      res.json(destinos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar destinos' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, valor, data, hoteisId } = req.body;
      const destino = await prisma.destino.update({
        where: { id: Number(id) },
        data: {
          nome,
          valor,
          data,
          hoteisId
        }
      });
      res.json(destino);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar destino' });
    }
  },

  del: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.destino.delete({ where: { id: Number(id) } });
      res.json({ message: 'Destino excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir destino' });
    }
  }
};

module.exports = destinoController;