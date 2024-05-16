const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

//CREATE
const create = async (req, res) => {
    const data = req.body;
    
const destinos = await prisma.destinos.create({
        data
    })

    res.status(201).json(destinos).end();
}

//READ
const read = async (req, res) => {
    const destinos = await prisma.destinos.findMany();

    res.status(200).json(destinos).end();
}

//UPDATE
const update = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const destinos = await prisma.destinos.update({
        where: {
            id
        },
        data
    })

    res.status(200).json(destinos).end();
}

//DELETE
const del = async (req, res) => {
    const { id } = req.params;

    const destinos = await prisma.destinos.delete({
        where: {
            id
        }
    })

    res.status(200).json(destinos).end();
}

module.exports = {
    create,
    read,
    update,
    del 
}