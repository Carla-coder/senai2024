const con = require('../connect/mysql');

// CRUD - CREATE

const addTelefone = (req, res) => {
    
    const { CPF_Cliente, Telefone } = req.body;
    if (CPF_Cliente && Telefone) {
        con.query('INSERT INTO Telefones (CPF_Cliente, Telefone) VALUES (?, ?)',
            [CPF_Cliente, Telefone],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar telefone:', err);
                    res.status(500).json({ error: 'Erro ao adicionar telefone' });
                } else {
                    const newPhone = { CPF_Cliente, Telefone };
                    res.status(201).json(newPhone);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getTelefones = (req, res) => {

    con.query('SELECT * FROM Telefones', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar telefones' });
        } else {
            res.json(result);
        }
    });

}

// CRUD - UPDATE

const updateTelefone = (req, res) => {

    const { CPF_Cliente, Telefone } = req.body;
    if (CPF_Cliente && Telefone) {
        con.query('UPDATE Telefones SET Telefone = ? WHERE CPF_Cliente = ?', 
        [Telefone, CPF_Cliente], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }

}

// CRUD - DELETE

const deleteTelefone = (req, res) => {
    
    const {CPF_Cliente } = req.params;
    if (CPF_Cliente) {
        con.query('DELETE FROM Telefones WHERE CPF_Cliente = ?', [CPF_Cliente], (err, result) => {
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
    getTelefones,
    updateTelefone,
    deleteTelefone
}