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

// READ - Obter todos os telefones
const getTelefone = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter telefone.' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Telefone não encontrado.' });
            }
        }
    });
};

// READ - Obter Telefones de um Funcionário por vez
const getTelefones = (req, res) => {
    con.query('SELECT * FROM telefone WHERE matricula like ?',`%${[req.params.matricula]}%`, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter telefone.' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Telefone não encontrado.' });
            }
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
    getTelefone,
    getTelefones,
    updateTelefone,
    deleteTelefone
};
