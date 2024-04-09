const con = require('../connect/mysql');

// CRUD - CREATE

const addCliente = (req, res) => {
    
    const {CPF_Cliente, Telefone } = req.body;
    if (CPF_Cliente && Telefone) {
        con.query('INSERT INTO Clientes (CPF_Cliente, Telefone) VALUES (?, ?)',
            [CPF_Cliente, Telefone],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar Cliente:', err);
                    res.status(500).json({ error: 'Erro ao adicionar Cliente' });
                } else {
                    const newCliente = { CPF_Cliente, Telefone };
                    res.status(201).json(newCliente);
                }
            });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getCliente = (req, res) => {
    con.query('SELECT * FROM Clientes', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar clientes' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Nenhum cliente encontrado' });
            } else {
                res.json(result);
            }
        }
    });
}


const updateCliente = (req, res) => {

    const { CPF_Cliente } = req.params;
    const { Telefone } = req.body;
    if (CPF_Cliente && Telefone) {
        con.query('UPDATE Clientes SET Telefone = ? WHERE CPF_Cliente = ?', 
        [CPF_Cliente, Telefone], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json({ CPF_Cliente, Telefone });
            }
        });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }

}

const deleteCliente = (req, res) => {
    
    const { CPF_Cliente } = req.params;
    if (CPF_Cliente) {
        con.query('DELETE FROM Clientes WHERE CPF_Cliente = ?', [CPF_Cliente], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Cliente não encontrado' });
                } else {
                    res.status(200).json({ message: 'Cliente removido com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Por favor, forneça o CPF do cliente' });
    }
    
}

module.exports = {
    addCliente,
    getCliente,
    updateCliente,
    deleteCliente
}