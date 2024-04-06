const con = require('../connection/mysql');

// CREATE - Adicionar Funcionário
const addFuncionario = (req, res) => {
    const { matricula, nome } = req.body;
    if (!matricula || !nome) {
        return res.status(400).json({ message: 'Favor fornecer a matrícula e o nome do funcionário.' });
    }
    con.query('INSERT INTO funcionario (matricula, nome) VALUES (?, ?)', [matricula, nome], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao adicionar funcionário.' });
        } else {
            res.status(201).json({ message: 'Funcionário adicionado com sucesso.' });
        }
    });
};

// READ - Obter Funcionário por Matrícula
const getFuncionarios = (req, res) => {
    // const { matricula } = req.params;
    con.query('SELECT * FROM funcionario', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter funcionário.' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Funcionário não encontrado.' });
            }
        }
    });
};

// READ - Obter Funcionário por Matrícula individual
 const getFuncionario = (req, res) => {
     con.query('SELECT * FROM funcionario WHERE nome like ?',`%${[req.params.nome]}%`, (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao obter funcionário.' });
        } else {
            if (result.length > 0) {
            res.status(200).json(result);
            } else {
            res.status(404).json({ message: 'Funcionário não encontrado.' });
            }
        }
    });
};

// UPDATE - Atualizar Funcionário por Matrícula
const updateFuncionario = (req, res) => {
    const { matricula } = req.params;
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ message: 'Favor fornecer o novo nome do funcionário.' });
    }
    con.query('UPDATE funcionario SET nome = ? WHERE matricula = ?', [nome, matricula], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao atualizar funcionário.' });
        } else {
            res.status(200).json({ message: 'Funcionário atualizado com sucesso.' });
        }
    });
};

// DELETE - Excluir Funcionário por Matrícula
const deleteFuncionario = (req, res) => {
    const { matricula } = req.params;
    con.query('DELETE FROM funcionario WHERE matricula = ?', [matricula], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao excluir funcionário.' });
        } else {
            res.status(200).json({ message: 'Funcionário excluído com sucesso.' });
        }
    });
};

module.exports = {
    addFuncionario,
    getFuncionarios,
    getFuncionario,
    updateFuncionario,
    deleteFuncionario
};

