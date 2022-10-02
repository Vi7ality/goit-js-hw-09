const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(event) {
    event.preventDefault();
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
}

function onStopBtnClick() {
    clearInterval(timerId);
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
