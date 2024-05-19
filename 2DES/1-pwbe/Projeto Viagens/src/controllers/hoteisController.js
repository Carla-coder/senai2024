const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const hoteisController = {
  create: async (req, res) => {
    try {
      const { nome, valor, avaliacao, email, site, destinoId } = req.body;
      const hotel = await prisma.hoteis.create({
        data: {
          nome,
          valor,
          avaliacao,
          email,
          site,
          destinoId
        }
      });
      res.json(hotel);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar hotel' });
    }
  },

  read: async (req, res) => {
    try {
      const hoteis = await prisma.hoteis.findMany();
      res.json(hoteis);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar hoteis' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, valor, avaliacao, email, site, destinoId } = req.body;
      const hotel = await prisma.hoteis.update({
        where: { id: Number(id) },
        data: {
          nome,
          valor,
          avaliacao,
          email,
          site,
          destinoId
        }
      });
      res.json(hotel);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar hotel' });
    }
  },

  del: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.hoteis.delete({ where: { id: Number(id) } });
      res.json({ message: 'Hotel excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir hotel' });
    }
  }
};

module.exports = hoteisController;
