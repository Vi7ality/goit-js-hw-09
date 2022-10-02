const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.disabled = true;

function onStartBtnClick(event) {
    event.preventDefault();
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopBtnClick() {
    clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
