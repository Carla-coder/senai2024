const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Criação de Usuário
  create: async (req, res) => {
    const { nome, email } = req.body;
    try {
      const novoUsuario = await prisma.usuario.create({
        data: { nome, email },
      });
      res.status(201).json(novoUsuario);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário', details: err.message });
    }
  },

  // Leitura de Usuários
  read: async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany();
      res.status(200).json(usuarios);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar usuários', details: err.message });
    }
  },
};


