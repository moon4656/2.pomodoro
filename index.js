const savedMinutes = Number(localStorage.getItem('pomodoroMinutes'));
const INITIAL_SECONDS = (savedMinutes > 0 ? savedMinutes : 25) * 60;

let remainingSeconds = INITIAL_SECONDS;
let timerId = null;

const timeDisplay = document.getElementById('time-display');
updateDisplay();

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    if (remainingSeconds <= 0) {
      stopTimer();
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = INITIAL_SECONDS;
  updateDisplay();
}
