//Dependências - Frameworks

const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let capacidade = req.body.capacidade;
    let query = `INSERT INTO Veiculos(placa, modelo, capacidade) VALUE`;
    query += `(
    '${placa}', 
    '${modelo}', 
    '${capacidade}'
    );`;
    
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id = result.insertId;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read

const read = (req, res) => {
    con.query("SELECT * FROM Veiculos", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update

const update = (req, res) => {
    let id = req.params.id;
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let capacidade = req.body.capacidade;
    let query = `UPDATE Veiculos SET 
    idVeiculo = '${idVeiculo}', 
    placa = '${placa}', 
    modelo = '${modelo}', 
    capacidade = '${capacidade}'
    WHERE idVeiculo = ${id}`;

    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end;
        else {
            if (result.affectedRows > 0)
                res.status(202).json(req.body).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

//CRUD - Delete

const del = (req, res) => {
    let idVeiculo = req.params.idVeiculo;
    con.query(`DELETE FROM Veiculos WHERE id = ${idVeiculo}`, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};