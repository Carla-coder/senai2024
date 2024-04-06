const con = require('../connection/mysql');

// CREATE - Adicionar Manutenção
const addManutencao = (req, res) => {
    const { placa, matricula, inicio, fim, descricao } = req.body;
    if (!placa|| !matricula || !inicio || !fim || !descricao) {
        return res.status(400).json({ message: 'Favor fornecer placa, matricula, data de inicio, data do fim e descrição da manutenção.' });
    }
    con.query('INSERT INTO manutencao (placa, matricula, inicio, fim, descricao) VALUES (?, ?, ?, ?, ?)', [placa, matricula, inicio, fim, descricao], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao adicionar manutenção.' });
        } else {
            res.status(201).json({ message: 'Manutenção adicionada com sucesso.' });
        }
    });
};

// READ - Obter todas as Manutenção por ID
const getManutencoes = (req, res) => {
   con.query('SELECT * FROM manutencao', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao obter manutenção.' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Manutenção não encontrada.' });
            }
        }
    });
};

// READ - Obter Manutenção por ID individual
const getManutencao = (req, res) => {
    con.query('SELECT * FROM manutencao WHERE id like ?',`%${[req.params.id]}%`, (err, result) => {
         if (err) {
             console.error(err);
             res.status(500).json({ message: 'Erro ao obter manutenção.' });
         } else {
             if (result.length > 0) {
                 res.status(200).json(result[0]);
             } else {
                 res.status(404).json({ message: 'Manutenção não encontrada.' });
             }
         }
     });
 };

// UPDATE - Atualizar Manutenção por ID
const updateManutencao = (req, res) => {
    const { id } = req.params;
    const { placa, matricula, inicio, fim, descricao } = req.body;
    if (!placa || !matricula || !inicio || !fim || !descricao) {
        return res.status(400).json({ message: 'Favor fornecer placa, matricula, data de inicio, data do fim e descrição da manutenção.' });
    }
    con.query('UPDATE manutencao SET placa = ?, matricula = ?, inicio = ?, fim = ?, descricao = ? WHERE id = ?', [placa, matricula, inicio, fim, descricao, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao atualizar manutenção.' });
        } else {
            res.status(200).json({ message: 'Manutenção atualizada com sucesso.' });
        }
    });
};

// DELETE - Excluir Manutenção por ID
const deleteManutencao = (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM manutencao WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao excluir manutenção.' });
        } else {
            res.status(200).json({ message: 'Manutenção excluída com sucesso.' });
        }
    });
};

module.exports = {
    addManutencao,
    getManutencoes,
    getManutencao,
    updateManutencao,
    deleteManutencao
};

