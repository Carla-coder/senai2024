const e = require('express');
const con = require('../connection/mysql');

//  CRUD CREATE - Adicionar Manutenção
const addManutencao = (req, res) => {
    const { inicio, fim, descricao, placa } = req.body;
    if (!inicio || !fim || !descricao || !placa) {
        return res.status(400).json({ message: 'Favor fornecer todos os campos obrigatórios.' });
    }
    con.query('INSERT INTO manutencao (inicio, fim, descricao, placa) VALUES (?, ?, ?, ?)', [inicio, fim, descricao, placa], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao adicionar manutenção.' });
        } else {
            res.status(201).json({ message: 'Manutenção adicionada com sucesso.' });
        }
    });
};

// CRUD READ - Obter Todas as Manutenções ou Somente as Em Andamento
const getManutencoes = (req, res) => {
    const { emAndamento } = req.query;
    let query = 'SELECT * FROM manutencao';
    if (emAndamento === 'true') {
        query += ' WHERE fim IS NULL'; // Filtrar por manutenções em andamento (fim é NULL)
    }
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao obter manutenções.' });
        } else {
            res.status(200).json(result);
        }
    });
};

// CRUD READ - Obter Manutenção por ID
const getManutencaoById = (req, res) => {
    const { id } = req.params;
    con.query('SELECT * FROM manutencao WHERE idManutencao = ?', [id], (err, result) => {
        if (err) {
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

// CRUD UPDATE - Atualizar Manutenção por ID
const updateManutencao = (req, res) => {
    const { id } = req.params;
    const { inicio, fim, descricao, placa } = req.body;
    if (!inicio || !fim || !descricao || !placa) {
        return res.status(400).json({ message: 'Favor fornecer todos os campos obrigatórios.' });
    }
    con.query('UPDATE manutencao SET inicio = ?, fim = ?, descricao = ?, placa = ? WHERE id_manutencao = ?', [inicio, fim, descricao, placa, id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao atualizar manutenção.' });
        } else {
            res.status(200).json({ message: 'Manutenção atualizada com sucesso.' });
        }
    });
};

// CRUD DELETE - Remover Manutenção por ID
const deleteManutencao = (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM manutencao WHERE id_manutencao = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao excluir manutenção.' });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Manutenção não encontrada.' });
            } else {
                res.status(200).json({ message: 'Manutenção excluída com sucesso.' });
            }
        }
    });
};

module.exports = {
    addManutencao,
    getManutencoes,
    getManutencaoById,
    updateManutencao,
    deleteManutencao
};

// const e = require('express');
// const con = require('../connection/mysql');

//CRUD - CREATE - Adicionar Manutenção
// const addManutencao = (req, res) => {
//     if (req.body != null && req.body.inicio != null && req.body.fim != null && req.body.descricao != null && req.body.placa != null) {
//         const { inicio, fim, descricao, placa } = req.body;
//         con.query('INSERT INTO manutencao (inicio, fim, descricao, placa) VALUES (?, ?, ?, ?)', [inicio, fim, descricao, placa], (err, result) => {
//             if (err) {
//                 res.status(500).json('Erro ao adicionar manutencao');
//             } else {
//                 req.body.id = result.insertId;
//                 res.status(201).json(req.body);
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar todos os campos obrigatórios');
//     }
// }

///CRUD - READ - Listar todas as Manutenções
// const getManutencoes = (req, res) => {
//     if (req.params.id != null) {
//         con.query('SELECT * FROM manutencao WHERE idManutencao ='+req.params.id, (err, result) => {
//             if (err) {
//                 res.status(500).send('Erro ao listar manutencoes');
//             }
//             res.json(result);
//         });
//     } else {
//         con.query('SELECT * FROM manutencao', (err, result) => {
//             if (err) {
//                 res.status(500).send('Erro ao listar manutencoes');
//             }
//             res.json(result);
//         });
//     }
// }

//CRUD - READ - Obeter Manuyenção por ID de Funcionario
// const getManutencaoById = (req, res) => {
//     if (req.params.id != null) {
//         const { id } = req.params;
//         con.query('SELECT * FROM manutencao WHERE idManutencao = ?', [id], (err, result) => {
//             if (err) {
//                 res.status(500).send('Erro ao obter manutencao');
//             } else {
//                 if (result.length > 0) {
//                     res.json(result[0]); // Retorna o primeiro (e único) resultado encontrado
//                 } else {
//                     res.status(404).json('manutencao não encontrado');
//                 }
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar o ID da manutencao');
//     }
// }

//CRUD - UPDATE - Atualizar Manutenção por ID
// const updateManutencao = (req, res) => {
//     if (req.body != null && req.body.id != null && req.body.inicio != null && req.body.fim != null && req.body.descricao != null && req.body.placa != null) {
//         const { id, inicio, fim, descricao, placa} = req.body;
//         con.query('UPDATE manutencao SET inicio = ?, fim = ?, descricao = ?, placa = ? WHERE idManutencao = ?', [inicio, fim, descricao, placa, id], (err, result) => {
//             if (err) {
//                 res.status(500).json(err);
//             } else {
//                 res.status(200).json(req.body);
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar todos os campos obrigatórios');
//     }
// }

///CRUD - DELETE - Remover Manutenção por ID
// const deleteManutencao = (req, res) => {
//     if (req.params != null && req.params.id != null) {
//         const { id } = req.params;
//         con.query('DELETE FROM manutencao WHERE idManutencao = ?', [id], (err, result) => {
//             if (err) {
//                 res.status(500).json(err);
//             } else {
//                 if (result.affectedRows == 0) {
//                     res.status(404).json('Manutencao não encontrada');
//                 } else {
//                     res.status(200).json('Manutencao removida com sucesso');
//                 }
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar todos os campos obrigatórios');
//     }
// }

// module.exports = {
//     addManutencao,
//     getManutencoes,
//     getManutencaoById,
//     updateManutencao,
//     deleteManutencao
// }
