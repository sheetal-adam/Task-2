// script.js

const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const skipBtn = document.getElementById('skipBtn');
const player = document.getElementById('player');

playBtn.addEventListener('click', () => {
  player.play();
});

pauseBtn.addEventListener('click', () => {
  player.pause();
});

skipBtn.addEventListener('click', () => {
  player.currentTime += 10;
});
