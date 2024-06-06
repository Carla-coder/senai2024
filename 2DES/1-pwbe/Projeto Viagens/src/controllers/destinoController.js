const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const destinoController = {
  create: async (req, res) => {
    try {
      const { nome, valor, data, hoteisId } = req.body;

      // Validar os dados de entrada
      if (!nome || !valor || !data || !hoteisId) {
        return res.status(400).json({ error: 'Nome, valor, data e hoteisId são obrigatórios' });
      }

      const destino = await prisma.destino.create({
        data: {
          nome,
          valor: Number(valor), // Convertendo o valor para número
          data: new Date(data), // Convertendo a data para objeto Date
          hoteisId: Number(hoteisId) // Convertendo hoteisId para número
        }
      });

      res.status(201).json(destino);
    } catch (error) {
      console.error('Erro ao criar destino:', error);
      res.status(500).json({ error: 'Erro ao criar destino' });
    }
  },

  read: async (req, res) => {
    try {
      const destinos = await prisma.destino.findMany();
      res.json(destinos);
    } catch (error) {
      console.error('Erro ao buscar destinos:', error);
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
          valor: Number(valor), // Convertendo o valor para número
          data: new Date(data), // Convertendo a data para objeto Date
          hoteisId: Number(hoteisId) // Convertendo hoteisId para número
        }
      });

      res.json(destino);
    } catch (error) {
      console.error('Erro ao atualizar destino:', error);
      res.status(500).json({ error: 'Erro ao atualizar destino' });
    }
  },

  del: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.destino.delete({ where: { id: Number(id) } });
      res.json({ message: 'Destino excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir destino:', error);
      res.status(500).json({ error: 'Erro ao excluir destino' });
    }
  }
};

module.exports = destinoController;


