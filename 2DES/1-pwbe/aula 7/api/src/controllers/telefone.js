const e = require('express');
const con = require('../connection/mysql');

//  CRUD CREATE - Adicionar Telefone a um Funcionário
const addTelefone = (req, res) => {
    const { id } = req.params;
    const { numero } = req.body;
    if (!numero) {
        return res.status(400).json({ message: 'Favor fornecer o número do telefone.' });
    }
    con.query('INSERT INTO telefone (idFuncionario, numero) VALUES (?, ?)', [id, numero], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao adicionar telefone.' });
        } else {
            res.status(201).json({ message: 'Telefone adicionado com sucesso.' });
        }
    });
};

// CRUD READ - Atualizar Telefone de um Funcionário
const getTelefonesByFuncionarioId = (req, res) => {
    const { id } = req.params;
    con.query('SELECT * FROM telefone WHERE idFuncionario = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao obter telefones.' });
        } else {
            res.status(200).json(result);
        }
    });
};

// CRUD UPDATE - Atualizar Telefone de um Funcionário
const updateTelefone = (req, res) => {
    const { id, idTelefone } = req.params;
    const { numero } = req.body;
    if (!numero) {
        return res.status(400).json({ message: 'Favor fornecer o número do telefone.' });
    }
    con.query('UPDATE telefone SET numero = ? WHERE idTelefone = ? AND idFuncionario = ?', [numero, idTelefone, id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao atualizar telefone.' });
        } else {
            res.status(200).json({ message: 'Telefone atualizado com sucesso.' });
        }
    });
};

// CRUD DELETE - Excluir Telefone de um Funcionário
const deleteTelefone = (req, res) => {
    const { idTelefone } = req.params;
    con.query('DELETE FROM telefone WHERE idTelefone = ?', [idTelefone], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao excluir telefone.' });
        } else {
            res.status(200).json({ message: 'Telefone excluído com sucesso.' });
        }
    });
};

module.exports = {
    addTelefone,
    getTelefonesByFuncionarioId,
    updateTelefone,
    deleteTelefone
}

//CRUD - CREATE - Adicionar Telefone
// const addTelefone = (req, res) => {
//     if (req.body != null && req.body.matricula != null && req.body.numero != null) {
//         const { matricula, numero } = req.body;
//         con.query('INSERT INTO telefone (matricula, numero) VALUES (?, ?)', [matricula, numero], (err, result) => {
//             if (err) {
//                 res.status(500).json('Erro ao adicionar telefone');
//             } else {
//                 req.body.id = result.insertId;
//                 res.status(201).json(req.body);
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar todos os campos obrigatórios');
//     }
// }

//CRUD - READ - Obter Telefone por ID
// const getTelefonesByFuncionarioId = (req, res) => {
//     if (req.params.id != null) {
//         const { id } = req.params;
//         con.query('SELECT * FROM telefone WHERE idTelefone = ?', [id], (err, result) => {
//             if (err) {
//                 res.status(500).send('Erro ao obter telefone');
//             } else {
//                 if (result.length > 0) {
//                     res.json(result[0]); // Retorna o primeiro (e único) resultado encontrado
//                 } else {
//                     res.status(404).json('telefone não encontrado');
//                 }
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar o ID do telefone');
//     }
// }

//CRUD - UPDATE - Atualizar telefone por ID
// const updateTelefone = (req, res) => {
//     if (req.body != null && req.body.id != null && req.body.matricula != null && req.body.numero != null) {
//         const { id, matricula, numero} = req.body;
//         con.query('UPDATE telefone SET matricula = ?, numero = ? WHERE idTelefone = ?', [matricula, numero, id], (err, result) => {
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

//CRUD - DELETE - Remover Telefone por ID
// const deleteTelefone = (req, res) => {
//     if (req.params != null && req.params.id != null) {
//         const { id } = req.params;
//         con.query('DELETE FROM telefone WHERE idTelefone = ?', [id], (err, result) => {
//             if (err) {
//                 res.status(500).json(err);
//             } else {
//                 if (result.affectedRows == 0) {
//                     res.status(404).json('Telefone não encontrado');
//                 } else {
//                     res.status(200).json('Telefone removido com sucesso');
//                 }
//             }
//         });
//     } else {
//         res.status(400).json('Favor enviar todos os campos obrigatórios');
//     }
// }