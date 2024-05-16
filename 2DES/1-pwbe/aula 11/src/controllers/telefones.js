// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// const create = async (req, res) => {
//     const { telefone, clienteId } = req.body;

//     try {
//         const createdTelefone = await prisma.telefones.create({
//             data: {
//                 telefone,
//                 cliente: {
//                     connect: { id: clienteId }
//                 }
//             }
//         });

//         res.status(201).json(createdTelefone);
//     } catch (error) {
//         console.error("Erro ao criar telefone:", error);
//         res.status(500).json({ error: "Erro ao criar telefone", details: error });
//     }
// };

// const read = async (req, res) => {
//     try {
//         const telefones = await prisma.telefones.findMany();

//         res.status(200).json(telefones);
//     } catch (error) {
//         console.error("Erro ao recuperar telefones:", error);
//         res.status(500).json({ error: "Erro ao recuperar telefones", details: error });
//     }
// };

// const remove = async (req, res) => {
//     const telefoneId = Number(req.params.id);

//     try {
//         const deletedTelefone = await prisma.telefones.delete({
//             where: { id: telefoneId }
//         });

//         res.status(200).json(deletedTelefone);
//     } catch (error) {
//         console.error("Erro ao remover telefone:", error);
//         res.status(500).json({ error: "Erro ao remover telefone", details: error });
//     }
// };

// const update = async (req, res) => {
//     const telefoneId = Number(req.params.id);
//     const { telefone } = req.body;

//     try {
//         const updatedTelefone = await prisma.telefones.update({
//             where: { id: telefoneId },
//             data: { telefone }
//         });

//         res.status(200).json(updatedTelefone);
//     } catch (error) {
//         console.error("Erro ao atualizar telefone:", error);
//         res.status(500).json({ error: "Erro ao atualizar telefone", details: error });
//     }
// };

// module.exports = {
//     create,
//     read,
//     remove,
//     update
// };

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

//CREATE
const create = async (req, res) => {
    const data = req.body;

    const telefones = await prisma.telefones.create({
        data
    })

    res.status(201).json(telefones).end();
}

//READ
const read = async (req, res) => {
    const telefones = await prisma.telefones.findMany();

    res.status(200).json(telefones).end();
}

//DELETE
//localhost:3000/clientes/1
const remove = async (req, res) => {

    const telefones = await prisma.telefones.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(telefones).end();
}

//UPDATE
//param id
//body info
const update = async (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    const telefones = await prisma.telefones.update({
        where: {
            id
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


