const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', startRandomBodyColorChange);
refs.stopBtn.addEventListener('click', stopRandomBodyColorChange);

function startRandomBodyColorChange() {
  refs.startBtn.setAttribute('disabled', true);

  timerId = setInterval(() => {
    const colorToSet = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[colorToSet];
  }, 1000);
}

function stopRandomBodyColorChange() {
  if (timerId) {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
  }
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
