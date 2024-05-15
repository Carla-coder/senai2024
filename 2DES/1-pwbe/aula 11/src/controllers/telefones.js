const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body;

    const telefones = await prisma.telefones.create({
        data: {
            id: data.id,
            numero: data.numero
        }
    })

    res.status(201).json(telefones).end();
}

const read = async (req, res) => {
    const telefones = await prisma.telefones.read({
        where: {
            id: Number
        }
    })

    res.status(200).json(telefones).end();
}

//localhost:3000/telefones/1
const remove = async (req, res) => {

    const telefones = await prisma.telefones.delete({
        where: {
            id: Number
        }
    });

    res.status(200).json(telefones).end();
}

//param id
//body info
const update = async (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    const telefones = await prisma.telefones.findMany({
        where: {
            select: {id: true}
        },
        data
        
    });

    res.status(200).json(telefones).end();
}


module.exports = {
    create,
    read,
    remove,
    update
}
