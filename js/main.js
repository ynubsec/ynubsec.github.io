const readMoreButton = document.querySelector('.read-more');
const letterContent = document.querySelector('.letter-content');

readMoreButton?.addEventListener('click', () => {
  const isOpen = letterContent.classList.toggle('is-open');
  readMoreButton.textContent = isOpen ? 'Close the note' : readMoreButton.dataset.btnText;
});

const viewer = document.getElementById('photo-viewer');
const viewerImg = document.getElementById('viewer-img');

document.querySelectorAll('.photo').forEach((photo) => {
  photo.addEventListener('click', () => {
    viewerImg.src = photo.src;
    viewerImg.alt = photo.alt;
    viewer.classList.remove('hidden');
  });
});

viewer?.addEventListener('click', () => {
  viewer.classList.add('hidden');
  viewerImg.src = '';
});

let currentAudio;
let currentButton;

document.querySelectorAll('.play-btn').forEach((button) => {
  const audio = button.closest('.song-card').querySelector('audio');

  button.addEventListener('click', async () => {
    if (audio === currentAudio && !audio.paused) {
      audio.pause();
      button.innerHTML = 'Play <span aria-hidden="true">▶</span>';
      button.closest('.song-card').classList.remove('playing');
      return;
    }

    if (currentAudio) {
      currentAudio.pause();
      currentButton.innerHTML = 'Play <span aria-hidden="true">▶</span>';
      currentButton.closest('.song-card').classList.remove('playing');
    }

    try {
      await audio.play();
      button.innerHTML = 'Pause <span aria-hidden="true">Ⅱ</span>';
      button.closest('.song-card').classList.add('playing');
      currentAudio = audio;
      currentButton = button;
    } catch (error) {
      button.textContent = 'Audio unavailable';
    }
  });

  audio.addEventListener('ended', () => {
    button.innerHTML = 'Play <span aria-hidden="true">▶</span>';
    button.closest('.song-card').classList.remove('playing');
    currentAudio = undefined;
    currentButton = undefined;
  });
});
