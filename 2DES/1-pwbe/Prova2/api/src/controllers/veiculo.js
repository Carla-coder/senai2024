const con = require('../connect/mysql');

//CRUD - CREATE

const addVeiculo = (req, res) => {
    const { placa, modelo, marca, tipo, diaria} = req.body;

    if (placa && modelo && marca && tipo && diaria) {
        con.query('insert into Veiculo (placa, modelo, marca, tipo, diaria) VALUES (?, ?, ?, ?, ?)',
            [placa, modelo, marca, tipo, diaria], (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar Veiculo', err);
                    res.status(500).json({ error: 'Erro ao adicionar Veículo' });

                } else {
                    const newVeiculo = { placa, modelo, marca, tipo, diaria };
                    res.status(201).json(newVeiculo);
                }
            });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
};

//CRUD - READ

const getVeiculo = (req, res) => {
    con.query('select * from Veiculo', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar Veículo' });
        } else {
            res.json(result);
        }
    });
}

//CRUD - UPDATE

const updateVeiculo = (req, res) => {
    const { placa, modelo, marca, tipo, diaria } = req.body;
    if (placa && modelo && marca && tipo && diaria) {
        con.query('update Veiculo set modelo =?, marca =?, tipo =?, diaria =? WHERE placa =?',
            [modelo, marca, tipo, diaria, placa], (err, result) => {
                if (err) {
                    res.status(500).json({ error: 'Erro ao atualizar Veículo' });
                } else {
                    res.json(result);
                }
            });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });

    }
};

//CRUD - DELETE

const deleteVeiculo = (req, res) => {
const { placa } = req.body;
if (placa) {
    con.query('DELETE FROM Veiculo WHERE placa = ?', [placa], (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Veículo não encontrado' });
            } else {
                res.status(200).json({ message: 'Veículo removido com sucesso' });
            }
        }
    });
} else {
    res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
}

}

module.exports = {
    addVeiculo,
    getVeiculo,
    updateVeiculo,
    deleteVeiculo
}