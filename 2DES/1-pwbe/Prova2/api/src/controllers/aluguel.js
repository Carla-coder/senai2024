
const con = require('../connect/mysql');

// CRUD - CREATE

const addAluguel = (req, res) => {
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    if (placa && cpf && reserva && retirada && devolucao && subtotal) {
        con.query('INSERT INTO Aluguel (placa, cpf, reserva, retirada, devolucao, subtotal) VALUES (?, ?, ?, ?, ?, ?)',
            [placa, cpf, reserva, retirada, devolucao, subtotal],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar alugueis:', err);
                    res.status(500).json({ error: 'Erro ao adicionar alugueis' });
                } else {
                    const newAluguel = { placa, cpf, reserva, retirada, devolucao, subtotal };
                    res.status(201).json(newAluguel);
                }
            });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
};


// CRUD - READ

const getAluguel = (req, res) => {
    con.query('SELECT * FROM Aluguel', (err, result) => {
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
const updateAluguel = (req, res) => {
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;

    if (placa && cpf && reserva && retirada && devolucao && subtotal) {
        con.query(
            'update Aluguel set retirada = ?, devolucao = ?, subtotal = ? WHERE placa = ? AND cpf = ? AND reserva = ?', 
            [placa, cpf, reserva, retirada, devolucao, subtotal], 
            (err, result) => {
                if (err) {
                    res.status(500).json({ error: 'Erro ao atualizar Aluguéis' });
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
const deleteAluguel = (req, res) => {    
    const { id } = req.body; 
    
    if (id) {
        con.query(
            'DELETE FROM Aluguel WHERE id = ?', // Alterado para deletar pelo ID
            [id], 
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

const getAlugueisReservados = (req, res) => {
    con.query('SELECT * FROM vw_alugueis_reservados', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar aluguéis reservados' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ error: 'Nenhum aluguel reservado encontrado' });
            }
        }
    });
};

// Rota para buscar aluguéis alugados
const getAlugueisAlugados = (req, res) => {
    con.query('SELECT * FROM vw_alugueis_em_andamento', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar aluguéis alugados' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ error: 'Nenhum aluguel alugado encontrado' });
            }
        }
    });
};

// Rota para buscar o relatório completo de todos os aluguéis
const getRelatorioCompleto = (req, res) => {
    con.query('SELECT * FROM vw_todos_os_alugueis_com_status', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar o relatório completo de aluguéis' });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ error: 'Nenhum aluguel encontrado no relatório completo' });
            }
        }
    });
};

module.exports = {
    addAluguel,
    getAluguel,
    updateAluguel,
    deleteAluguel,
    getAlugueisReservados,
    getAlugueisAlugados,
    getRelatorioCompleto
}
