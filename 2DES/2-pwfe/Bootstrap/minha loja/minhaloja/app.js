const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Escolha a porta desejada

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para o formulário
app.post('/enviar-email', (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Configurações do transporte de email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Configurações do email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'cmartezanato@yahoo.com.br', // Substitua pelo seu endereço de email
        subject: `Nova mensagem de contato de ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`
    };

    // Adicione este console.log para verificar o valor da variável de ambiente
    console.log('Valor da variável EMAIL_USER:', process.env.EMAIL_USER);

    // Envia o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro ao enviar o email.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Email enviado com sucesso!');
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
