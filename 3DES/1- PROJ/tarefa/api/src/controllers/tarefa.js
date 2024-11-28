const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// console.log('Dados enviados para a API:', JSON.stringify(dados));

const create = async (req, res) => {
    const { prioridade, status, descricao, usuarioId } = req.body;
    const prioridadesValidas = ["baixa", "media", "alta"];
    const statusValidos = ["A_FAZER", "FAZENDO", "PRONTO"];

    if (!prioridadesValidas.includes(prioridade)) {
        return res.status(400).json({ error: "Prioridade inválida. Valor esperado: 'baixa', 'media' ou 'alta'" });
    }

    if (!statusValidos.includes(status)) {
        return res.status(400).json({ error: "Status inválido. Valor esperado: 'A_FAZER', 'FAZENDO' ou 'PRONTO'" });
    }

    try {
        const tarefa = await prisma.tarefa.create({
            data: { prioridade, status, descricao, usuarioId },
        });
        res.status(201).json(tarefa);
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
        res.status(500).json({ error: "Erro ao criar tarefa" });
    }
};

const read = async (req, res) => {
    try {
        const tarefas = await prisma.tarefa.findMany();
        res.json(tarefas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar tarefas' });
    }
};

const update = async (req, res) => {
    try {
        const tarefa = await prisma.tarefa.update({
            where: { id: req.body.id },
            data: req.body,
        });
        res.json(tarefa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
};

const del = async (req, res) => {
    try {
        const tarefa = await prisma.tarefa.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.json(tarefa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir tarefa' });
    }
};

module.exports = { create, read, update, del };

