const track = document.getElementById('progressTrack');
const progress = document.getElementById('progress');
const valueInput = document.getElementById('progressValue');
const animateToggle = document.getElementById('animateToggle');
const hideToggle = document.getElementById('hideToggle');
const style = getComputedStyle(document.documentElement);

const circumference = parseFloat(style.getPropertyValue('--circumference'));

function updateProgress() {
  const value = Math.min(100, Math.max(0, parseInt(valueInput.value) || 0));
  const offset = circumference - (circumference * value) / 100;
  track.setAttribute('stroke-dashoffset', offset);
}
valueInput.addEventListener('input', updateProgress);
updateProgress();

animateToggle.addEventListener('change', () => {
  if (animateToggle.checked) {
    progress.classList.add('progress--animated');
  } else {
    progress.classList.remove('progress--animated');
  }
});

hideToggle.addEventListener('change', () => {
  if (hideToggle.checked) {
    progress.classList.add('progress--hidden');
  } else {
    progress.classList.remove('progress--hidden');
  }
});

const Progress = {
  setValue(value) {
    valueInput.value = value;
    updateProgress();
  },

  setAnimated(bool) {
    animateToggle.checked = bool;
    animateToggle.dispatchEvent(new Event('change'));
  },

  setHidden(bool) {
    hideToggle.checked = bool;
    hideToggle.dispatchEvent(new Event('change'));
  }
}

