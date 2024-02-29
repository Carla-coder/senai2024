//Dependências - Frameworks

const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let salario = req.body.salario;
    let query = `INSERT INTO Funcionarios(nome, cargo, salario) VALUE`;
    query += `(
    '${nome}', 
    '${cargo}', 
    '${salario}' 
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
    con.query("SELECT * FROM Funcionarios", (err, result) => {
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
    let cargo = req.body.cargo;
    let salario = req.body.salario;
    let query = `UPDATE Funcionarios SET 
    id = '${id}', 
    nome = '${nome}', 
    cargo = '${cargo}', 
    salario = '${salario}'  
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
    con.query(`DELETE FROM Funcionarios WHERE id = ${id}`, (err, result) => {
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