import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('[data-start]');

let settledTime = null;
let currentTime = Date.now();
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    settledTime = new Date(selectedDates);
    if (settledTime <= currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

const timer = {
  intervalID: null,
  refs: {
    daysRef: document.querySelector('[data-days]'),
    hoursRef: document.querySelector('[data-hours]'),
    minutesRef: document.querySelector('[data-minutes]'),
    secondsRef: document.querySelector('[data-seconds]'),
  },

  start() {
    console.log('Timer is started');

  intervalId = setInterval(() => {
      currentTime = Date.now();
      const deltaTime = settledTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      this.refs.daysRef.textContent = days;
      this.refs.hoursRef.textContent = hours;
      this.refs.minutesRef.textContent = minutes;
      this.refs.secondsRef.textContent = seconds;
    if (seconds <= 0) {
    clearInterval(intervalId);
    }


    }, 1000);
  },
};




flatpickr(inputRef, options);

startBtn.addEventListener('click', onClick);

function onClick(event) {
  console.log(settledTime);
  timer.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
