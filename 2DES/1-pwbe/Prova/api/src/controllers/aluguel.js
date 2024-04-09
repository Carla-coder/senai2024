
const con = require('../connect/mysql');

// CRUD - CREATE

const addAlugueis = (req, res) => {
    const { Placa, Reserva, Retirada, Devolucao, Dias, Status, Subtotal, CPF_Cliente } = req.body;
    if (Placa && Reserva && Retirada && Devolucao && Dias && Status && Subtotal && CPF_Cliente) {
        con.query('INSERT INTO Alugueis (Placa, Reserva, Retirada, Devolucao, Dias, Status, Subtotal, CPF_Cliente) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [Placa, Reserva, Retirada, Devolucao, Dias, Status, Subtotal, CPF_Cliente],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar alugueis:', err);
                    res.status(500).json({ error: 'Erro ao adicionar alugueis' });
                } else {
                    const newAlugueis = { Placa, Reserva, Retirada, Devolucao, Dias, Status, Subtotal, CPF_Cliente };
                    res.status(201).json(newAlugueis);
                }
            });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
};


// CRUD - READ

const getAlugueis = (req, res) => {
    con.query('SELECT * FROM Alugueis', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar reservas' });
        } else {
            if (result.length > 0) { // Verifica se há pelo menos uma reserva encontrada
                res.status(200).json(result); // Retorna os resultados em formato JSON
            } else {
                res.status(404).json({ error: 'Nenhuma reserva encontrada' }); // Retorna um erro 404 se nenhum resultado for encontrado
            }
        }
    });
}

// CRUD - UPDATE
const updateAlugueis = (req, res) => {
    const { Placa, CPF_Cliente, Reserva, Retirada, Devolucao, Dias, Status, Subtotal } = req.body;

    if (Placa && CPF_Cliente && Reserva && Retirada && Devolucao && Dias && Status && Subtotal) {
        con.query(
            'UPDATE Alugueis SET Retirada = ?, Devolucao = ?, Dias = ?, Status = ?, Subtotal = ? WHERE Placa = ? AND CPF_Cliente = ? AND Reserva = ?', 
            [Retirada, Devolucao, Dias, Status, Subtotal, Placa, CPF_Cliente, Reserva], 
            (err, result) => {
                if (err) {
                    res.status(500).json({ error: err });
                } else {
                    res.status(200).json(req.body);
                }
            }
        );
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
}



// CRUD - DELETE

const deleteAlugueis = (req, res) => {    
    const { Placa, CPF_Cliente, Reserva } = req.body;
    
    if (Placa && CPF_Cliente && Reserva) {
        con.query(
            'DELETE FROM Alugueis WHERE Placa = ? AND CPF_Cliente = ? AND Reserva = ?', 
            [Placa, CPF_Cliente, Reserva], 
            (err, result) => {
                if (err) {
                    res.status(500).json({ error: err });
                } else {
                    if (result.affectedRows === 0) {
                        res.status(404).json({ error: 'Reserva não encontrada' });
                    } else {
                        res.status(200).json({ message: 'Reserva removida com sucesso' });
                    }
                }
            }
        );
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
}


const getVeiculosReservados = (req, res) => {
    con.query('SELECT * FROM Veiculos WHERE Placa IN (SELECT Placa FROM Alugueis WHERE Status = "reservado")', (err, veiculos) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar veículos reservados' });
        } else {
            res.status(200).json(veiculos);
        }
    });
};

module.exports = {
    addAlugueis,
    getAlugueis,
    updateAlugueis,
    deleteAlugueis,
    getVeiculosReservados
}
