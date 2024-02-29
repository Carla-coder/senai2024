//Dependências - Frameworks

const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let origem = req.body.origem;
    let destino = req.body.destino;
    let distancia = req.body.distancia;
    let query = `INSERT INTO Rotas(origem, destino, distancia) VALUE`;
    query += `(
    '${origem}', 
    '${destino}', 
    '${distancia}' 
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
    con.query("SELECT * FROM Rotas ORDER BY id DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update

const update = (req, res) => {
    let id = req.params.id;
    let origem = req.body.origem;
    let destino = req.body.destino;
    let distancia = req.body.distancia;
    let query = `UPDATE Rotas SET 
    id = '${id}', 
    origem = '${origem}', 
    destino = '${destino}', 
    distancia = '${distancia}'  
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
    con.query(`DELETE FROM Rotas WHERE id = ${id}`, (err, result) => {
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