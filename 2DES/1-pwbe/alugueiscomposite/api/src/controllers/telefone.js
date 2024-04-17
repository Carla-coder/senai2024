const con = require('../connect/mysql');

const createTelefone = (req, res) => {
    const { cpf, telefone } = req.body;
    if (!cpf || !telefone) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (cpf, telefone)",
            "exemplo": {
                "cpf": "12345678901",
                "telefone": "123456789"
            }
        }
        res.json(erro);
        return;
    }
    const sql = "INSERT INTO telefone (cpf, numero) VALUES (?,?)";
    con.query(sql, [cpf, telefone], (err, result) => {
        if (err) {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(400).json({ "erro": "Telefone já cadastrado" }).end();
                return;
            }
            if (err.code == "ER_NO_REFERENCED_ROW_2") {
                res.status(404).json({ "erro": "CPF não encontrado" }).end();
                return;
            }
            res.status(500).json(err).end();
        } else {
            res.status(201).json(req.body).end();
        }
    });
}

const readTelefones = (req, res) => {
    if (!req.params.cpf) {
        const sql = "SELECT * FROM telefone";
        con.query(sql, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    } else {
        const sql = "SELECT * FROM telefone WHERE cpf LIKE ?";
        con.query(sql, `%${[req.params.cpf]}%`, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}

const updateTelefone = (req, res) => {
    const { numero, novo_numero } = req.body;
    if (!numero || !novo_numero) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (numero_antigo, novo_numero)",
            "exemplo": {
                "numero": "12345678901",
                "novo_numero": "123456789"
            }
        }
        res.json(erro);
        return;
    }
    const sql = "UPDATE telefone SET numero = ? WHERE numero = ?";
    con.query(sql, [novo_numero, numero], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            if (result.affectedRows == 0) {
                res.status(404).json({ "erro": "Telefone não encontrado" }).end();
                return;
            }
            res.status(202).json(req.body);
        }
    });
}

const deleteTelefone = (req, res) => {
    const sql = "DELETE FROM telefone WHERE numero = ?";
    con.query(sql, [req.params.numero], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            if (result.affectedRows == 0) {
                res.status(404).json({ "erro": "Telefone não encontrado" }).end();
                return;
            }
            res.status(204).json(req.body);
        }
    });
}

module.exports = {
    createTelefone,
    readTelefones,
    updateTelefone,
    deleteTelefone
}