//Dependências - Frameworks

const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let inicio = req.body.inicio;
    let fim = req.body.fim;
    let status = req.body.status;
    let motorista = req.body.motorista;
    let idVeiculo = req.body.idVeiculo;
    let idRota = req.body.idRota;
    let query = `INSERT INTO Entregas(inicio, fim, status , motorista, idVeiculo, idRota) VALUE`;
    query += `(
    '${inicio}', 
    '${fim}', 
    '${status}', 
    '${motorista}'
    '${idVeiculo},
    '${idRota}'
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
    con.query("SELECT * FROM Entregas", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update

const update = (req, res) => {
    let id = req.params.id;
    let inicio = req.body.inicio;
    let fim = req.body.fim;
    let status = req.body.status;
    let motorista = req.body.motorista;
    let idVeiculo = req.body.idVeiculo;
    let idRota = req.body.idRota;
    let query = `UPDATE Entregas SET 
    id = '${id}', 
    inicio = '${inicio}', 
    fim = '${fim}', 
    status = '${status}', 
    motorista = '${motorista}',
    idVeiculo = '${idVeiculo}',
    idRota = '${idRota}' 
    WHERE id = ${id}`;

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
    let id = req.params.id;
    con.query(`DELETE FROM Entregas WHERE id = ${id}`, (err, result) => {
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