const MIN_MINUTES = 1;
const MAX_MINUTES = 60;

function saveSettings() {
  const minutesInput = document.getElementById('timer-minutes');
  const rawValue = minutesInput.value.trim();

  if (rawValue === '') {
    alert('타이머 시간을 입력해주세요.');
    return;
  }

  const minutes = Number(rawValue);

  if (!Number.isInteger(minutes) || minutes < MIN_MINUTES || minutes > MAX_MINUTES) {
    alert(`타이머 시간은 ${MIN_MINUTES}분 이상, ${MAX_MINUTES}분 이하로 설정해주세요.`);
    return;
  }

  localStorage.setItem('pomodoroMinutes', minutes);
  location.href = 'index.html';
}
