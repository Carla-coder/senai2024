const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

//CREATE
const create = async (req, res) => {
    const data = req.body;

    const hoteis = await prisma.hoteis.create({
        data
    })

    res.status(201).json(hoteis).end();
}

//READ

const read = async (req, res) => {
    const hoteis = await prisma.hoteis.findMany();

    res.status(200).json(hoteis).end();
}

//UPDATE
const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const hoteis = await prisma.hoteis.update({
        where: {
            id
        },
        data
    })

    res.status(200).json(hoteis).end();
}

//DELETE
const del = async (req, res) => {
    const id = req.params.id;

    const hoteis = await prisma.hoteis.delete({
        where: {
            id
        }
    })

    res.status(200).json(hoteis).end();
}
   
module.exports = {
    create,
    read,
    update,
    del 
}
