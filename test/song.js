const playButton = document.querySelector('.play');
const progressBar = document.querySelector('.progress-bar');

let durationInMinutes = 3; // Ganti sesuai kebutuhan
let startTime = null;
let animationId;

playButton.addEventListener('click', () => {
  progressBar.style.width = '0%'; // reset progress
  startTime = null;
  cancelAnimationFrame(animationId);

  const durationInSeconds = durationInMinutes * 60;

  function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1000;
    const progress = Math.min(elapsed / durationInSeconds, 1);
    progressBar.style.width = progress * 100 + '%';

    if (progress < 1) {
      animationId = requestAnimationFrame(animateProgress);
    }
  }

  requestAnimationFrame(animateProgress);
});
