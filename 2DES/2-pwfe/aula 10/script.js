// function playMusic(musicPath) {
//     var audioPlayer = document.getElementById('playerAudio');
//     audioPlayer.src = musicPath;
//     audioPlayer.play();
//   }


  // Obtenha a referência para o elemento de áudio
  const playerAudio = document.getElementById('playerAudio');

  // Botão Play/Pause
  const playPauseButton = document.getElementById('playPauseButton');
  playPauseButton.addEventListener('click', () => {
    if (playerAudio.paused) {
      playerAudio.play();
    } else {
      playerAudio.pause();
    }
  });

  // Botão Preview
  const previewButton = document.getElementById('previewButton');
  previewButton.addEventListener('click', () => {
    // Implemente a lógica para ir para a faixa anterior
  });

  // Botão Next
  const nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', () => {
    // Implemente a lógica para ir para a próxima faixa
  });

  // Botão de Reprodução Aleatória (Opcional)
  const randomButton = document.getElementById('randomButton');
  randomButton.addEventListener('click', () => {
    // Implemente a lógica para reprodução aleatória
  });

