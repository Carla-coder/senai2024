const con = require('../connect/mysql');

// CRUD - CREATE

const addTelefone = (req, res) => {
    
    const { cpf, numero } = req.body;
    if (cpf && numero) {
        con.query('INSERT INTO Telefone (cpf, numero) VALUES (?, ?)',
            [cpf, numero],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar telefone:', err);
                    res.status(500).json({ error: 'Erro ao adicionar telefone' });
                } else {
                    const newPhone = { cpf, numero };
                    res.status(201).json(newPhone);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getTelefone = (req, res) => {

    con.query('SELECT * FROM Telefone', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar telefones' });
        } else {
            res.json(result);
        }
    });

}

// CRUD - UPDATE

const updateTelefone = (req, res) => {

    const { cpf, numero } = req.body;
    if (cpf && numero) {
        con.query('UPDATE Telefone SET numero = ? WHERE cpf = ?', 
        [cpf, numero], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json({ message: 'Telefone atualizado com sucesso' });
            }
        });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }

}

// CRUD - DELETE

const deleteTelefone = (req, res) => {
    
    const {cpf } = req.body;
    if (cpf) {
        con.query('DELETE FROM Telefone WHERE cpf = ?', [cpf], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Telefone não encontrado' });
                } else {
                    res.status(200).json({ message: 'Telefone removido com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
    
}

module.exports = {
    addTelefone,
    getTelefone,
    updateTelefone,
    deleteTelefone
}