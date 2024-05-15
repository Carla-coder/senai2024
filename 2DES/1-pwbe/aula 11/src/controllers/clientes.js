const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body;

    const clientes = await prisma.clientes.create({
        data
    })

    res.status(201).json(clientes).end();
}

const read = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.status(200).json(clientes).end();
}

//localhost:3000/clientes/1
const remove = async (req, res) => {

    const clientes = await prisma.clientes.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(clientes).end();
}

//param id
//body info
const update = async (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    const clientes = await prisma.clientes.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(clientes).end();
}


module.exports = {
    create,
    read,
    remove,
    update
}
