//Dependências - Frameworks

const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let query = `INSERT INTO Clientes(nome, telefone, email, endereco) VALUE`;
    query += `(
    '${nome}', 
    '${telefone}', 
    '${email}', 
    '${endereco}'
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
    con.query("SELECT * FROM Clientes", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update

const update = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let query = `UPDATE Clientes SET 
    nome = '${nome}', 
    telefone = '${telefone}', 
    email = '${email}', 
    endereco = '${endereco}' 
    WHERE idCliente = ${id}`;

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
    con.query(`DELETE FROM Clientes WHERE idCliente = ${id}`, (err, result) => {
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