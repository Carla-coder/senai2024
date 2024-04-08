const audioPlayer = document.getElementById('audioPlayer');
const PlayPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const playlist  = document.getElementById('playlist');
const coverImage = document.getElementById('coverImage');
let currentSongIndex = 0;

function playPause() {
    if (audioPlayer.paused){
        audioPlayer.play();
        PlayPauseButton.src = "Pause";
    }else{
        audioPlayer.pause();
        PlayPauseButton.src = "Play";
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.children.length;
    loadSong();
}

function playPrev() {
    currentSongIndex = (currentSongIndex + playlist.children.length - 1) % playlist.children.length;
    loadSong();
}

function loadSong() {
    const songItem = playlist.children[currentSongIndex];
    const songSrc = songItem.dataset.src;
    const coverSrc = coverItem.dataset.cover;

        audioPlayer.src = songSrc;
        coverImage.src = coverSrc;
        audioPlayer.play();
}

PlayPauseButton.addEventListener('click', playPause);

nextButton.addEventListener('click', playNext);

prevButton.addEventListener('click', playPrev);

playlist.addEventListener('click', (event) => {
    const clikedIndex = Array.from(playlist.children).indexOf(event.target);
    if (clikedIndex!== -1) {
        currentSongIndex = clikedIndex;
        loadSong();
    }
});

loadSong();
