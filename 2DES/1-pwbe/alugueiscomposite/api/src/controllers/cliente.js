const con = require('../connect/mysql');
const composite = require('../patterns/composite');

const createCliente = (req, res) => {
    const { cpf, nome, telefone } = req.body;
    if (!cpf || !nome) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (cpf, nome)",
            "exemplo1": {
                "cpf": "12345678901",
                "nome": "Fulano de Tal"
            },
            "exemplo2": {
                "cpf": "12345678901",
                "nome": "Fulano de Tal",
                "telefone": "123456789"
            }
        }
        res.status(400).json(erro);
        return;
    }
    if (!telefone) {
        const sql = "INSERT INTO cliente (cpf, nome_cliente) VALUES (?,?)";
        con.query(sql, [cpf, nome], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY")
                    res.status(400).json("Este cliente já possui o CPF cadastrado");
                else
                    res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        const sql = "INSERT INTO cliente (cpf, nome_cliente) VALUES (?,?)";
        con.query(sql, [cpf, nome], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY") {
                    res.status(400).json("Este cliente já possui o CPF cadastrado").end();
                    return;
                } else
                    res.status(500).json(err);
            } else {
                const sql2 = "INSERT INTO telefone (cpf, numero) VALUES (?,?)";
                con.query(sql2, [cpf, telefone], (err, result) => {
                    if (err) {
                        if (err.code == "ER_DUP_ENTRY") {
                            const sql3 = "DELETE FROM cliente WHERE cpf = ?";
                            con.query(sql3, [cpf], (err, result) => {
                                if (err) {
                                    res.status(500).json(err).end();
                                } else {
                                    res.status(400).json("Este telefone já está cadastrado para outro cliente").end();
                                }
                            });
                        } else
                            res.status(500).json(err).end();
                    } else {
                        res.status(201).json(req.body).end();
                    }
                });
            }
        });
    }
}

const readClientes = (req, res) => {
    if (!req.params.cpf) {
        const sql = "SELECT * FROM vw_cliente";
        con.query(sql, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(composite.compositeClientes(result));
            }
        });
    } else {
        const sql = "SELECT * FROM vw_cliente WHERE cpf LIKE ?";
        con.query(sql, `%${[req.params.cpf]}%`, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(composite.compositeClientes(result));
            }
        });
    }
}

const updateCliente = (req, res) => {
    const { cpf, nome } = req.body;
    if (!cpf || !nome) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (cpf, nome)",
            "exemplo": {
                "cpf": "12345678901",
                "nome": "Fulano de Tal"
            }
        }
        res.status(400).json(erro);
        return;
    }
    const sql = "UPDATE cliente SET nome_cliente = ? WHERE cpf = ?";
    con.query(sql, [nome, cpf], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            if (result.affectedRows == 0) {
                res.status(404).json({ "erro": "Cliente não encontrado" }).end();
                return;
            }
            res.status(202).json(req.body);
        }
    });
}

const deleteCliente = (req, res) => {
    const sql = "DELETE FROM cliente WHERE cpf = ?";
    con.query(sql, [req.params.cpf], (err, result) => {
        if (err) {
            if (err.code == "ER_ROW_IS_REFERENCED_2") {
                res.status(400).json({ "erro": "Cliente não pode ser excluído, pois está associado a um aluguel" }).end();
                return;
            }
            res.json(err);
        } else {
            if (result.affectedRows == 0) {
                res.status(404).json({ "erro": "Cliente não encontrado" }).end();
                return;
            }
            res.status(204).json({ "mensagem": "Cliente excluído com sucesso" });
        }
    });
}

module.exports = {
    createCliente,
    readClientes,
    updateCliente,
    deleteCliente
}