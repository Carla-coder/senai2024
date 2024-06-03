const revampDifficulty = (toIncrease) => {
    if (toIncrease) {
        difficulty++;
        intervalDecrease = (intervalDecrease < 800) ? intervalDecrease + 10 : intervalDecrease;
    } else {
        difficulty = 4;
        intervalDecrease = 0;
    }
};

const updateScore = () => {
    scoreElement.innerHTML = score;
    highScoreElement.innerHTML = (highScore > 0) ? highScore : '-';
};

const processAnswers = () => {
    waitingPlayerAnswer = false;

    toggleButtonsCursorStyle();

    let allCorrect = true;

    for (let i in roundAnswers) {
        const properAnswer = roundAnswers[i];
        const playerAnswer = playerAnswers[i];

        if (properAnswer !== playerAnswer) {
            allCorrect = false;
        }
    }

    if (allCorrect) {
        controlElement.style.cursor = 'pointer';
        controlElement.style.backgroundColor = 'green';

        controlStatusElement.innerHTML = 'ACERTOU';

        setTimeout(() => {
            callRound()
        }, 1500);
    } else {
        controlElement.style.cursor = 'pointer';
        controlElement.style.backgroundColor = 'red';

        controlStatusElement.innerHTML = 'RECOMEÇAR';

        highScore = (score > highScore) ? score : highScore;

        canStartRound = true;
    }

    score = (allCorrect) ? score + 1 : score;
    score = (allCorrect) ? score : 0;

    updateScore();
    revampDifficulty(allCorrect);
};

const processClick = (element) => {
    if (!waitingPlayerAnswer) {
        return;
    }

    playerAnswers.push(element);
    element.classList.add('active');

    setTimeout(() => {
        element.classList.remove('active');
    }, 750);

    const i = playerAnswers.length - 1;

    if (playerAnswers[i] !== roundAnswers[i] || playerAnswers.length === roundAnswers.length) {
        processAnswers();
    }
};

controlElement.onclick = () => {
    if (canStartRound) {
        callRound();

        canStartRound = false;
    }
};

nightModeButton.onclick = () => {
    container.classList.toggle('night-mode');
    container.classList.toggle('day-mode');
};

for (let element of buttonElements) {
    element.onclick = () => {
        processClick(element);
    };

    element.onmouseenter = () => {
        if (waitingPlayerAnswer && !element.classList.contains('active')) {
            element.classList.add('hover');
        }
    };

    element.onmouseleave = () => {
        if (waitingPlayerAnswer && !element.classList.contains('active')) {
            element.classList.remove('hover');
        }
    }
}