// Lista de músicas com suas respectivas capas de álbuns
const allMusicas = Array.from(document.querySelectorAll('.song-item')).map(
  song => ({
    src: song.dataset.src,
    cover: song.dataset.cover
  })
)

// Obtenha a referência para o elemento de áudio
const playerAudio = document.getElementById('playerAudio')

// Índice da música atual
let currentIndex = 0

// Botão Play/Pause
const playPauseButton = document.getElementById('playPauseButton')
playPauseButton.addEventListener('click', () => {
  if (playerAudio.paused) {
    playerAudio.play()
    playPauseButton.textContent = 'Pause' // Altera o texto para Pause
  } else {
    playerAudio.pause()
    playPauseButton.textContent = 'Play' // Altera o texto para Play
  }
})

// Botão Preview
const previewButton = document.getElementById('previewButton')
previewButton.addEventListener('click', () => {
  // Diminui o índice da música atual
  currentIndex = (currentIndex - 1 + allMusicas.length) % allMusicas.length

  // Carrega a música correspondente ao novo índice
  playerAudio.src = allMusicas[currentIndex].src
  playerAudio.play()

  // Atualiza a capa do álbum
  updateAlbumCover(allMusicas[currentIndex].cover)
})

// Botão Next
const nextButton = document.getElementById('nextButton')
nextButton.addEventListener('click', () => {
  // Aumenta o índice da música atual
  currentIndex = (currentIndex + 1) % allMusicas.length

  // Carrega a música correspondente ao novo índice
  playerAudio.src = allMusicas[currentIndex].src
  playerAudio.play()

  // Atualiza a capa do álbum
  updateAlbumCover(allMusicas[currentIndex].cover)

  // Atualiza o texto do botão Play/Pause conforme necessário
  playPauseButton.textContent = 'Pause'
})

// Função para atualizar a capa do álbum
function updateAlbumCover (coverSrc) {
  const albumImg = document.getElementById('albumImg')
  albumImg.src = coverSrc
}

// Botão de Reprodução Aleatória (Opcional)
const randomButton = document.getElementById('randomButton')
randomButton.addEventListener('click', () => {
  // Embaralha todas as músicas sem reatribuir a variável global allMusicas
  const shuffledMusicas = shuffleArray(allMusicas)

  // Inicia a reprodução da primeira música embaralhada
  currentIndex = 0
  playerAudio.src = shuffledMusicas[currentIndex].src
  playerAudio.play()

  // Função para embaralhar um array
  function shuffleArray (array) {
    const shuffledArray = [...array] // Cria uma cópia do array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i]
      ] // Troca os elementos de posição aleatoriamente
    }
    return shuffledArray
  }

  // Atualiza a capa do álbum
  updateAlbumCover(shuffledMusicas[currentIndex].cover)
})
