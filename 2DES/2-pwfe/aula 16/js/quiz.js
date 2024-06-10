let quizQuestions = [
    {
        question: "Quem é considerado o pai da computação?",
        answers: [
            { text: "Alan Turing", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false },
            { text: "Charles Babbage", correct: true }
        ]
    },
    {
        question: "Qual foi o primeiro computador eletrônico de uso geral?",
        answers: [
            { text: "ENIAC", correct: true },
            { text: "UNIVAC", correct: false },
            { text: "IBM 701", correct: false },
            { text: "Apple I", correct: false }
        ]
    },
    {
        question: "Qual linguagem de programação é conhecida como a 'linguagem da web'?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Quem inventou o World Wide Web?",
        answers: [
            { text: "Bill Gates", correct: false },
            { text: "Tim Berners-Lee", correct: true },
            { text: "Steve Jobs", correct: false },
            { text: "Mark Zuckerberg", correct: false }
        ]
    },
    {
        question: "O que é HTML?",
        answers: [
            { text: "Uma linguagem de programação", correct: false },
            { text: "Uma linguagem de marcação", correct: true },
            { text: "Um sistema operacional", correct: false },
            { text: "Um navegador", correct: false }
        ]
    },
    {
        question: "Qual empresa desenvolveu o sistema operacional Windows?",
        answers: [
            { text: "Apple", correct: false },
            { text: "IBM", correct: false },
            { text: "Microsoft", correct: true },
            { text: "Google", correct: false }
        ]
    },
    {
        question: "Qual foi o primeiro sistema operacional da Microsoft?",
        answers: [
            { text: "Windows 1.0", correct: false },
            { text: "MS-DOS", correct: true },
            { text: "Windows 95", correct: false },
            { text: "Windows NT", correct: false }
        ]
    },
    {
        question: "Qual foi o primeiro navegador web amplamente utilizado?",
        answers: [
            { text: "Internet Explorer", correct: false },
            { text: "Netscape Navigator", correct: true },
            { text: "Mozilla Firefox", correct: false },
            { text: "Google Chrome", correct: false }
        ]
    },
    {
        question: "Quem é conhecido como o co-fundador da Apple Inc.?",
        answers: [
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: true },
            { text: "Larry Page", correct: false },
            { text: "Jeff Bezos", correct: false }
        ]
    },
    {
        question: "O que é CSS usado para fazer?",
        answers: [
            { text: "Adicionar interatividade a uma página web", correct: false },
            { text: "Criar bancos de dados", correct: false },
            { text: "Estilizar uma página web", correct: true },
            { text: "Escrever aplicativos de servidor", correct: false }
        ]
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizQuestions.forEach((q, index) => {
        let questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerText = q.question;

        q.answers.forEach(answer => {
            let answerButton = document.createElement('button');
            answerButton.innerText = answer.text;
            answerButton.onclick = () => {
                if (answer.correct) {
                    alert('Correto!');
                } else {
                    alert('Errado.');
                }
            };
            questionDiv.appendChild(answerButton);
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Carrega o quiz quando a página é mostrada
document.addEventListener('DOMContentLoaded', loadQuiz);
