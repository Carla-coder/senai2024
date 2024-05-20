const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Definição do controlador
const hoteisController = {
  // Método para criar um novo hotel
  create: async (req, res) => {
    try {
      const { nome, valor, avaliacao, email, site, destinoId } = req.body;

      // Validar os dados de entrada (opcional, mas recomendado)
      if (!nome || !valor || !avaliacao) {
        return res.status(400).json({ error: 'Nome, valor e avaliacao são obrigatórios' });
      }

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
      res.status(201).json(hotel); // Usar status 201 para criação bem-sucedida
    } catch (error) {
      console.error('Erro ao criar hotel:', error); // Log de erro para depuração
      res.status(500).json({ error: 'Erro ao criar hotel' });
    }
  },

  // Método para listar todos os hotéis
  read: async (req, res) => {
    try {
      const hoteis = await prisma.hoteis.findMany();
      res.json(hoteis);
    } catch (error) {
      console.error('Erro ao buscar hoteis:', error); // Log de erro para depuração
      res.status(500).json({ error: 'Erro ao buscar hoteis' });
    }
  },

  // Método para atualizar um hotel existente
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, valor, avaliacao, email, site, destinoId } = req.body;

      // Verificar se o hotel existe antes de tentar atualizar
      const existingHotel = await prisma.hoteis.findUnique({ where: { id: Number(id) } });
      if (!existingHotel) {
        return res.status(404).json({ error: 'Hotel não encontrado' });
      }

      // Validar os dados de entrada (opcional, mas recomendado)
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
      console.error('Erro ao atualizar hotel:', error); // Log de erro para depuração
      res.status(500).json({ error: 'Erro ao atualizar hotel' });
    }
  },

  // Método para excluir um hotel existente
  del: async (req, res) => {
    try {
      const { id } = req.params;

      // Verificar se o hotel existe antes de tentar deletar
      const existingHotel = await prisma.hoteis.findUnique({ where: { id: Number(id) } });
      if (!existingHotel) {
        return res.status(404).json({ error: 'Hotel não encontrado' });
      }

      await prisma.hoteis.delete({ where: { id: Number(id) } });
      res.json({ message: 'Hotel excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir hotel:', error); // Log de erro para depuração
      res.status(500).json({ error: 'Erro ao excluir hotel' });
    }
  }
};

module.exports = hoteisController;
