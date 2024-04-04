const con = require('../connection/mysql');

// CREATE - Adicionar Telefone para um Funcionário
const addTelefone = (req, res) => {
    const { matricula } = req.params;
    const { numero } = req.body;
    if (!numero) {
        return res.status(400).json({ message: 'Favor fornecer o número do telefone.' });
    }
    con.query('INSERT INTO telefone (matricula, numero) VALUES (?, ?)', [matricula, numero], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao adicionar telefone.' });
        } else {
            res.status(201).json({ message: 'Telefone adicionado com sucesso.' });
        }
    });
};

// READ - Obter Telefones de um Funcionário
const getTelefones = (req, res) => {
    const { matricula } = req.params;
    con.query('SELECT * FROM telefone WHERE matricula = ?', [matricula], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter telefones.' });
        } else {
            res.status(200).json(result);
        }
    });
};

// UPDATE - Atualizar Telefone de um Funcionário
const updateTelefone = (req, res) => {
    const { matricula } = req.params;
    const { numero } = req.body;
    if (!numero) {
        return res.status(400).json({ message: 'Favor fornecer o número do telefone.' });
    }
    con.query('UPDATE telefone SET numero = ? WHERE matricula = ?', [numero, matricula], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao atualizar telefone.' });
        } else {
            res.status(200).json({ message: 'Telefone atualizado com sucesso.' });
        }
    });
};

// DELETE - Excluir Telefone de um Funcionário
const deleteTelefone = (req, res) => {
    const { matricula } = req.params;
    con.query('DELETE FROM telefone WHERE matricula = ?', [matricula], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao excluir telefone.' });
        } else {
            res.status(200).json({ message: 'Telefone excluído com sucesso.' });
        }
    });
};

module.exports = {
    addTelefone,
    getTelefones,
    updateTelefone,
    deleteTelefone
};
