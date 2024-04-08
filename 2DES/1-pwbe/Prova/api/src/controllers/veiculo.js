const con = require('../connect/mysql');

//CRUD - CREATE

const addVeiculo = (req, res) => {
    const { placa, modelo, marca, tipo, diaria } = req.body;

    if (placa && modelo && marca && tipo && diaria) {
        con.query('insert into Veiculo (placa, modelo, marca, tipo, diaria) values (?, ?, ?, ?, ?)',
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
        res.status(400).json({ error: 'Preencha todos os campos' });
    }
};

//CRUD - READ

const getVeiculo = (req, res) => {
    con.query('select * from Veiculo', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao lisdtar Veículo' });
        } else {
            res.json(result);
        }
    });
}

//CRUD - UPDATE

const updateVeiculo = (req, res) => {
    const { placa, modelo, marca, tipo, diaria } = req.body;
    if (placa && modelo && marca && tipo && diaria) {
        con.query('update Veiculo set placa =?, modelo =?, marca =?, tipo =?, diaria =? where placa =?',
            [placa, modelo, marca, tipo, diaria, placa], (err, result) => {
                if (err) {
                    res.status(500).json({ error: 'Erro ao atualizar Veiculo' });
                } else {
                    res.json(result);
                }
            });
    } else {
        res.status(400).json({ error: 'Preencha todos os campos' });

    }
};

//CRUD - DELETE

const { placa } = req.params;



module.exports = {
    addVeiculo,
    getVeiculo,
    updateVeiculo,
}