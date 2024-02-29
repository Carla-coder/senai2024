//Dependências - Frameworks

const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let idVeiculo = req.body.idVeiculo;
    let idCliente = req.body.idCliente;
    let idEntrega = req.body.idEntrega;
    let idFuncionario = req.body.idFuncionario;
    let datapedido = req.body.datapedido;
    let valor = req.body.valor;
    let query = `INSERT INTO Pedidos(idVeiculo, idCliente, idEntrega, idFuncionario, datapedido, valor) VALUE`;
    query += `(
    '${idVeiculo}', 
    '${idCliente}', 
    '${idEntrega}', 
    '${idFuncionario}',
    '${datapedido}', 
    '${valor}'
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
    con.query("SELECT * FROM Pedidos ORDER BY id DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update

const update = (req, res) => {
    let id = req.params.id;
    let idVeiculo = req.body.idVeiculo;
    let idCliente = req.body.idCliente;
    let idEntrega = req.body.idEntrega;
    let idFuncionario = req.body.idFuncionario;
    let datapedido = req.body.datapedido;
    let valor = req.body.valor;
    let query = `UPDATE Pedidos SET 
    id = '${id}', 
    idVeiculo = '${idVeiculo}', 
    idCliente = '${idCliente}', 
    idEntrega = '${idEntrega}', 
    idFuncionario = '${idFuncionario}',
    datapedido = '${datapedido}', 
    valor = '${valor}' 
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
    con.query(`DELETE FROM Pedidos WHERE id = ${id}`, (err, result) => {
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