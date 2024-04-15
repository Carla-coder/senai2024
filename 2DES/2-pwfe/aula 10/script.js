// Obtenha a referência para o elemento de áudio
const playerAudio = document.getElementById('playerAudio');

// Lista de músicas com suas respectivas capas de álbuns
const musicas = [
  {
    src: './musica/Queen - I want to break free.mp3',
    cover: './album/imagem1.jpg'
  },
  {
    src: './musica/Queen - We Are The Champions (Live Aid 1985).mp3',
    cover: './album/imagem2.jpg'
  },
  {
    src: './musica/Queen - Bohemian Rhapsody (Official Video Remastered).mp3',
    cover: './album/imagem3.jpg'
  }
];

// Índice da música atual
let currentIndex = 0;

// Botão Play/Pause
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', () => {
  if (playerAudio.paused) {
    playerAudio.play();
    playPauseButton.textContent = 'Pause'; // Altera o texto para Pause
  } else {
    playerAudio.pause();
    playPauseButton.textContent = 'Play'; // Altera o texto para Play
  }
});

// Botão Preview
const previewButton = document.getElementById('previewButton');
previewButton.addEventListener('click', () => {
 // Diminui o índice da música atual
 currentIndex = (currentIndex - 1 + musicas.length) % musicas.length;
  
 // Carrega a música correspondente ao novo índice
 playerAudio.src = musicas[currentIndex].src;
 playerAudio.play();

 // Atualiza a capa do álbum
 updateAlbumCover(musicas[currentIndex].cover);
});

// Botão Next
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', () => {
   // Aumenta o índice da música atual
   currentIndex = (currentIndex + 1) % musicas.length;
  
   // Carrega a música correspondente ao novo índice
   playerAudio.src = musicas[currentIndex].src;
   playerAudio.play();

   // Atualiza a capa do álbum
   updateAlbumCover(musicas[currentIndex].cover);
 });

// Botão de Reprodução Aleatória (Opcional)
const randomButton = document.getElementById('randomButton');
let isShuffled = false; // Flag para verificar se a lista está embaralhada
let shuffledMusicas = []; // Lista de músicas embaralhadas

randomButton.addEventListener('click', () => {
  // Se a lista não estiver embaralhada, embaralhe-a
  if (!isShuffled) {
    shuffledMusicas = shuffleArray(musicas);
    isShuffled = true;
  }

   // Inicia a reprodução da primeira música da lista embaralhada
   currentIndex = 0;
   playerAudio.src = shuffledMusicas[currentIndex].src;
   playerAudio.play();

   // Atualiza a capa do álbum
   updateAlbumCover(shuffledMusicas[currentIndex].cover);
 });
 
 // Função para embaralhar um array
 function shuffleArray(array) {
   const shuffledArray = [...array]; // Cria uma cópia do array original
   for (let i = shuffledArray.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troca os elementos de posição aleatoriamente
   }
   return shuffledArray;
 }

// Função para atualizar a capa do álbum
function updateAlbumCover(coverSrc) {
  const albumImg = document.getElementById('albumImg');
  albumImg.src = coverSrc;
}
