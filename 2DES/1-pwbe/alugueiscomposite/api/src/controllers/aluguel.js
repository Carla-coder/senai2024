const e = require('express');
const con = require('../connect/mysql');

const createAluguel = (req, res) => {
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    if (!placa || !cpf || !reserva) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (placa, cpf, reserva)",
            "exemplo1": {
                "placa": "ABC1234",
                "cpf": "12345678901",
                "reserva": "2021-12-31"
            },
            "exemplo2": {
                "placa": "ABC1234",
                "cpf": "12345678901",
                "reserva": "2021-12-31",
                "retirada": "2022-01-01"
            },
            "exemplo3": {
                "placa": "ABC1234",
                "cpf": "12345678901",
                "reserva": "2021-12-31",
                "retirada": "2022-01-01",
                "devolucao": "2022-01-02"
            },
            "exemplo4": {
                "placa": "ABC1234",
                "cpf": "12345678901",
                "reserva": "2021-12-31",
                "retirada": "2022-01-01",
                "devolucao": "2022-01-02",
                "subtotal": 500.00
            }
        }
        res.status(400).json(erro);
        return;
    }
    const sql = "INSERT INTO aluguel (placa, cpf, reserva, retirada, devolucao, subtotal) VALUES (?,?,?,?,?,?)";
    if (!subtotal) {
        con.query(sql, [placa, cpf, reserva, retirada, devolucao, 0], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY") {
                    res.status(400).json({ "erro": "Aluguel já cadastrado" }).end();
                    return;
                } else if(err.code == "ER_NO_REFERENCED_ROW_2"){
                    res.status(400).json({ "erro": "CPF do cliente ou placa do veículo não cadastrada" }).end();
                }else{
                    res.status(500).json(err).end();
                }
            } else {
                res.status(201).json(req.body).end();
            }
        });
    } else {
        con.query(sql, [placa, cpf, reserva, retirada, devolucao, subtotal], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY") {
                    res.status(400).json({ "erro": "Aluguel já cadastrado" }).end();
                    return;
                } else {
                    res.status(500).json(err).end();
                }
            } else {
                res.status(201).json(req.body).end();
            }
        });
    }
}

const readAlugueis = (req, res) => {
    if (!req.params.id && !req.params.cpf && !req.params.placa) {
        const sql = "SELECT * FROM vw_todos_os_alugueis";
        con.query(sql, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    } else if (req.params.id) {
        const sql = "SELECT * FROM vw_todos_os_alugueis WHERE id = ?";
        con.query(sql, [req.params.id], (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    } else if (req.params.cpf) {
        const sql = "SELECT * FROM vw_todos_os_alugueis WHERE cpf = ?";
        con.query(sql, [req.params.cpf], (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    } else {
        const sql = "SELECT * FROM vw_todos_os_alugueis WHERE placa = ?";
        con.query(sql, [req.params.placa], (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}

const updateAluguel = (req, res) => {
    const { id, placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    if (!id) {
        res.status(400).json({ message: "Informe o id do aluguel" }).end();
        return;
    }
    if (!subtotal) {
        const sql = "UPDATE aluguel SET placa = ?, cpf = ?, reserva = ?, retirada = ?, devolucao = ? WHERE id = ?";
        con.query(sql, [placa, cpf, reserva, retirada, devolucao, id], (err, result) => {
            if (err) {
                res.status(500).json(err).end();
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json({ message: "Aluguel não encontrado" }).end();
                } else {
                    res.status(200).json(req.body).end();
                }
            }
        });
    } else {
        const sql = "UPDATE aluguel SET placa = ?, cpf = ?, reserva = ?, retirada = ?, devolucao = ?, subtotal = ? WHERE id = ?";
        con.query(sql, [placa, cpf, reserva, retirada, devolucao, subtotal, id], (err, result) => {
            if (err) {
                res.status(500).json(err).end();
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json({ message: "Aluguel não encontrado" }).end();
                } else {
                    res.status(200).json(req.body).end();
                }
            }
        });
    }
}

const deleteAluguel = (req, res) => {
    const sql = "DELETE FROM aluguel WHERE id = ?";
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            if (result.affectedRows == 0) {
                res.status(404).json({ message: "Aluguel não encontrado" }).end();
            } else {
                res.status(204).json({ message: "Aluguel excluído com sucesso" }).end();
            }
        }
    });
}

const readReservas = (req, res) => {
    const sql = "SELECT * FROM vw_alugueis_reservados";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

const readAlugados = (req, res) => {
    const sql = "SELECT * FROM vw_alugueis_em_andamento";
    con.query(sql,(err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    createAluguel,
    readAlugueis,
    readReservas,
    readAlugados,
    updateAluguel,
    deleteAluguel
}