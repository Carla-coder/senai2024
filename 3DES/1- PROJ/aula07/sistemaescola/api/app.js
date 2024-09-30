const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Inicialização do Express
const app = express();

// Configuração do CORS
app.use(cors());

// Configuração do Body-Parser para aceitar JSON e dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração da sessão
app.use(session({
    secret: 'chave-secreta',
    resave: false,
    saveUninitialized: true
}));

// Configuração para servir os arquivos da pasta 'front'
app.use(express.static(path.join(__dirname, '../front')));

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sua senha de root
    database: 'SistemaEscola'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

// Middleware de autenticação
function autenticar(req, res, next) {
    if (!req.session.professor) {
        return res.redirect('/login.html');
    }
    next();
}

// Rota de Login (via POST)
app.post('/login.html', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM Professor WHERE email = ? AND senha = ?';

    db.query(query, [email, senha], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            // Armazenando o professor na sessão
            req.session.professor = result[0];

            // Enviando uma resposta JSON para o frontend fazer o redirecionamento
            res.json({ success: true, message: 'Login bem-sucedido', redirect: '/professor.html' });
        } else {
            // Enviando status 401 e mensagem de erro
            res.status(401).json({ success: false, message: 'E-mail ou senha incorretos' });
        }
    });
});

// Rota para obter dados do professor e suas turmas (para preencher professor.html)
app.get('/professor', autenticar, (req, res) => {
    const professorId = req.session.professor.id_professor;
    const query = 'SELECT * FROM Turma WHERE id_professor = ?';
    db.query(query, [professorId], (err, turmas) => {
        if (err) throw err;
        res.json({ professor: req.session.professor, turmas });
    });
});

// Rota para Cadastro de Turma
app.post('/cadastrar-turma', autenticar, (req, res) => {
    const { nome_turma } = req.body;
    const professorId = req.session.professor.id_professor;
    const query = 'INSERT INTO Turma (nome_turma, ano, id_professor) VALUES (?, YEAR(NOW()), ?)';
    db.query(query, [nome_turma, professorId], (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

// Rota para Excluir Turma
app.post('/excluir-turma', autenticar, (req, res) => {
    const { id_turma } = req.body;
    const query = 'SELECT COUNT(*) AS atividades FROM Atividade WHERE id_turma = ?';
    db.query(query, [id_turma], (err, result) => {
        if (err) throw err;
        if (result[0].atividades > 0) {
            return res.status(400).send("Você não pode excluir uma turma com atividades cadastradas.");
        }
        const deleteQuery = 'DELETE FROM Turma WHERE id_turma = ?';
        db.query(deleteQuery, [id_turma], (err) => {
            if (err) throw err;
            res.sendStatus(200);
        });
    });
});

// Rota de Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});

// Servidor rodando
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
