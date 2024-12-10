
let audio = new Audio('./audio.mp3');
audio.addEventListener('timeupdate', updateProgress);

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function prevTrack() {
  audio.currentTime = 0; // Example function
}

function nextTrack() {
  audio.currentTime = audio.duration; // Example function
}

function seek(event) {
  const progressBar = event.currentTarget;
  const rect = progressBar.getBoundingClientRect();
  const seekTime = (event.clientX - rect.left) / rect.width * audio.duration;
  audio.currentTime = seekTime;
}

function updateProgress() {
  const progressCurrent = document.querySelector('.progress__current');
  const progressBar = document.querySelector('.progress');
  const percentage = (audio.currentTime / audio.duration) * 100;
  progressCurrent.style.width = percentage + '%';
}
