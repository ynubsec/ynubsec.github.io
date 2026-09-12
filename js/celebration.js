const body = document.body;
const progress = document.getElementById('progress');
const message = document.getElementById('revealMessage');
const balloonRow = document.getElementById('balloonRow');
const cakeWrap = document.getElementById('cakeWrap');
const candle = document.querySelector('.candle');
const note = document.getElementById('birthdayNote');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
const buttons = [...document.querySelectorAll('.control')];

const setMusicState = (isPlaying) => {
  musicToggle.classList.toggle('is-playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicLabel.textContent = isPlaying ? 'Pause the soundtrack' : 'Play the birthday soundtrack';
};

const startMusic = async () => {
  try {
    await backgroundMusic.play();
    setMusicState(true);
  } catch (error) {
    setMusicState(false);
  }
};

musicToggle.addEventListener('click', async () => {
  if (backgroundMusic.paused) {
    await startMusic();
  } else {
    backgroundMusic.pause();
    setMusicState(false);
  }
});

backgroundMusic.addEventListener('play', () => setMusicState(true));
backgroundMusic.addEventListener('pause', () => setMusicState(false));

const updateProgress = (step, text) => {
  progress.style.width = `${step * 20}%`;
  message.textContent = text;
};

document.getElementById('lightsButton').addEventListener('click', (event) => {
  startMusic();
  body.classList.add('lights-on');
  event.currentTarget.disabled = true;
  event.currentTarget.classList.remove('active');
  updateProgress(1, 'The room is ready.');
});

document.getElementById('balloonsButton').addEventListener('click', (event) => {
  balloonRow.classList.add('visible');
  event.currentTarget.disabled = true;
  event.currentTarget.classList.remove('active');
  updateProgress(2, 'A name worth spelling out.');
});

document.getElementById('cakeButton').addEventListener('click', (event) => {
  cakeWrap.classList.add('visible');
  event.currentTarget.disabled = true;
  event.currentTarget.classList.remove('active');
  updateProgress(3, 'A cake for the 15th chapter.');
});

document.getElementById('candleButton').addEventListener('click', (event) => {
  candle.classList.add('lit');
  event.currentTarget.disabled = true;
  event.currentTarget.classList.remove('active');
  updateProgress(4, 'Make a wish for what comes next.');
});

document.getElementById('messageButton').addEventListener('click', (event) => {
  note.hidden = false;
  event.currentTarget.disabled = true;
  event.currentTarget.classList.remove('active');
  updateProgress(5, 'The birthday note is yours.');
  note.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttons.forEach((button, index) => {
  if (index > 0) button.classList.remove('active');
});