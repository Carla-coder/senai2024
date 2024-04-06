const con = require('../connection/mysql');

// CREATE - Adicionar Veículo
const addVeiculo = (req, res) => {
    const { placa, modelo, marca, ano } = req.body;
    if (!placa || !modelo || !marca || !ano) {
        return res.status(400).json({ message: 'Favor fornecer placa, modelo, marca e ano do veículo.' });
    }
    con.query('INSERT INTO veiculo (placa, modelo, marca, ano) VALUES (?, ?, ?, ?)', [placa, modelo, marca, ano], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao adicionar veículo.' });
        } else {
            res.status(201).json({ message: 'Veículo adicionado com sucesso.' });
        }
    });
};

// READ - Obter Veículo por Placa
const getVeiculos = (req, res) => {
    con.query('SELECT * FROM veiculo', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter veículo.' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Veículo não encontrado.' });
            }
        }
    });
};

// READ - Obter Veículo por placa individual
const getVeiculo = (req, res) => {
    con.query('SELECT * FROM veiculo WHERE placa like ?',`%${[req.params.placa]}%`, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter placa do veículo.' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Placa do veículo não encontrada.' });
            }
        }
    });
};


// UPDATE - Atualizar Veículo por Placa
const updateVeiculo = (req, res) => {
    const { placa } = req.params;
    const { modelo, marca, ano } = req.body;
    if (!modelo || !marca || !ano) {
        return res.status(400).json({ message: 'Favor fornecer o novo modelo, marca e ano do veículo.' });
    }
    con.query('UPDATE veiculo SET modelo = ?, marca = ?, ano = ? WHERE placa = ?', [modelo, marca, ano, placa], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao atualizar veículo.' });
        } else {
            res.status(200).json({ message: 'Veículo atualizado com sucesso.' });
        }
    });
};

// DELETE - Excluir Veículo por Placa
const deleteVeiculo = (req, res) => {
    const { placa } = req.params;
    con.query('DELETE FROM veiculo WHERE placa = ?', [placa], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao excluir veículo.' });
        } else {
            res.status(200).json({ message: 'Veículo excluído com sucesso.' });
        }
    });
};

module.exports = {
    addVeiculo,
    getVeiculos,
    getVeiculo,
    updateVeiculo,
    deleteVeiculo
};
