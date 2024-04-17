const con = require('../connect/mysql');

const createVeiculo = (req, res) => {
    const { placa, marca, modelo, tipo, diaria } = req.body;
    if (!placa || !marca || !modelo || !tipo || !diaria) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (placa, marca, modelo, tipo, diaria)",
            "exemplo": {
                "placa": "ABC1234",
                "marca": "Chevrolet",
                "modelo": "Onix",
                "tipo": "standart",
                "diaria": 100.00
            }
        }
        res.status(400).json(erro);
        return;
    }
    const sql = "INSERT INTO veiculo (placa, marca, modelo, tipo, diaria) VALUES (?,?,?,?,?)";
    con.query(sql, [placa, marca, modelo, tipo, diaria], (err, result) => {
        if (err) {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(400).json({ "erro": "Veículo já cadastrado" }).end();
                return;
            }
            res.status(500).json(err).end();
        } else {
            res.status(201).json(req.body).end();
        }
    });
}

const readVeiculos = (req, res) => {
    const sql = "SELECT * FROM veiculo";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

const readVeiculo = (req, res) => {
    const sql = "SELECT * FROM veiculo WHERE placa LIKE ?";
    con.query(sql, `%${[req.params.placa]}%`, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

const updateVeiculo = (req, res) => {
    const { placa, marca, modelo, tipo, diaria } = req.body;
    if (!placa || !marca || !modelo || !tipo || !diaria) {
        const erro = {
            "erro": "Preencha todos os campos obrigatórios (placa, marca, modelo, tipo, diaria)",
            "exemplo": {
                "placa": "ABC1234",
                "marca": "Chevrolet",
                "modelo": "Onix",
                "tipo": "standart",
                "diaria": 100.00
            }
        }
        res.json(erro);
        return;
    }
    const sql = "UPDATE veiculo SET marca = ?, modelo = ?, tipo = ?, diaria = ? WHERE placa = ?";
    con.query(sql, [marca, modelo, tipo, diaria, placa], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            if(result.affectedRows == 0){
                res.status(404).json({"erro":"Veículo não encontrado"}).end();
                return;
            }
            res.status(202).json(req.body);
        }
    });
}

const deleteVeiculo = (req, res) => {
    const sql = "DELETE FROM veiculo WHERE placa = ?";
    con.query(sql, [req.params.placa], (err, result) => {
        if (err) {
            if(err.code == "ER_ROW_IS_REFERENCED_2"){
                res.status(400).json({"erro":"Veículo não pode ser excluído, pois está associado a um aluguel"}).end();
                return;
            }
            res.json(err);
        } else {
            if(result.affectedRows == 0){
                res.status(404).json({"erro":"Veículo não encontrado"}).end();
                return;
            }
            res.status(204).json({"mensagem":"Veículo excluído com sucesso"});
        }
    });
}

module.exports = {
    createVeiculo,
    readVeiculos,
    readVeiculo,
    updateVeiculo,
    deleteVeiculo
}