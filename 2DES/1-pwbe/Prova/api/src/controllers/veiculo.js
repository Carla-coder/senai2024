const con = require('../connect/mysql');

//CRUD - CREATE

const addVeiculo = (req, res) => {
    const { Placa, Modelo, Marca, Tipo, Diaria} = req.body;

    if (Placa && Modelo && Marca && Tipo && Diaria) {
        con.query('insert into Veiculos (Placa, Modelo, Marca, Tipo, Diaria) VALUES (?, ?, ?, ?, ?)',
            [Placa, Modelo, Marca, Tipo, Diaria], (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar Veiculo', err);
                    res.status(500).json({ error: 'Erro ao adicionar Veículo' });

                } else {
                    const newVeiculo = { Placa, Modelo, Marca, Tipo, Diaria };
                    res.status(201).json(newVeiculo);
                }
            });
    } else {
        res.status(400).json({ error: 'Por favor, envie todos os campos obrigatórios' });
    }
};

//CRUD - READ

const getVeiculo = (req, res) => {
    con.query('select * from Veiculos', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar Veículo' });
        } else {
            res.json(result);
        }
    });
}

//CRUD - UPDATE

const updateVeiculo = (req, res) => {
    const { Placa, Modelo, Marca, Tipo, Diaria } = req.body;
    if (Placa && Modelo && Marca && Tipo && Diaria) {
        con.query('update Veiculos set Placa =?, Modelo =?, Marca =?, Tipo =?, Diaria =? WHERE Placa =?',
            [Placa, Modelo, Marca, Tipo, Diaria], (err, result) => {
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
const { Placa } = req.params;
if (Placa) {
    con.query('DELETE FROM Veiculos WHERE Placa = ?', [Placa], (err, result) => {
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