const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const { email } = req.body;

    // Verifica se o email já existe
    const usuarioExistente = await prisma.usuario.findUnique({
        where: { email },
    });

    if (usuarioExistente) {
        return res.status(400).json({ error: 'Usuário já existe com esse email' });
    }
    
    try {
        const usuario = await prisma.usuario.create({
            data: req.body,
        });
        res.status(201).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

const read = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
};

module.exports = { create, read };

