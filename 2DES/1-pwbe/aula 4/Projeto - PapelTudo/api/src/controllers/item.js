//Dependências - Frameworks
const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let acao = req.body.acao;
    let query = `INSERT INTO item(cpf, nome, sobrenome, nascimento) VALUE`;
    query += `('${nome}', 
    '${descricao}', 
    '${valor}', 
    '${acao}');`;
    
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
    con.query("SELECT * FROM item ORDER BY id DESC", (err, result) => {
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
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let acao = req.body.acao;
    let query = `UPDATE item SET id = '${id}', 
    nome = '${nome}', 
    descricao = '${descricao}', 
    valor = '${valor}', 
    acao = '${acao}' 
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
    con.query(`DELETE FROM item WHERE id = ${id}`, (err, result) => {
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