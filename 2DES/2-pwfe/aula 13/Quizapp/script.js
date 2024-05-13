const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    const selectedAnswer = e.target;
    const isCorrect = selectedAnswer.getAttribute("data-correct") === "true";

    if (isCorrect) {
        selectedAnswer.classList.add('correct');
        questionsCorrect++;

        // Avança para a próxima pergunta
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            finish();
        }
    } else {
        selectedAnswer.classList.add('incorrect');
        // Desabilita os botões de resposta para evitar que o usuário responda novamente
        document.querySelectorAll(".answer").forEach(item => {
            item.disabled = true;
        });

        // Exibe uma mensagem de feedback para o usuário
        const feedback = document.createElement('p');
        feedback.textContent = 'Você errou!';
        feedback.classList.add('incorrect');
        questionContainer.appendChild(feedback);

        // Aguarda um curto período antes de carregar a próxima pergunta
        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                currentIndex++;
                loadQuestion();
            } else {
                finish();
            }
        }, 1000);
    }
}

function finish() {
    textFinish.innerHTML = `Você Acertou ${questionsCorrect} de ${questions.length} questões`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `<button class="answer" data-correct="${answer.correct}">
        ${answer.text}</button>
        <button class="next">Próximo</button>`;

        answers.appendChild(div);
    });
    document.querySelectorAll(".next").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion(); 