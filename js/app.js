let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  if (running) {
    timer = setInterval(updateTimer, 1000);
    running = true;
  }
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}
