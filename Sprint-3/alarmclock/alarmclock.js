/*function setAlarm() {}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;*/
var audio = new Audio("alarmsound.mp3");
var timerInterval;

function setAlarm() {
  let inputSeconds = parseInt(document.getElementById("alarmSet").value, 10);
  if (isNaN(inputSeconds) || inputSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  let timeRemaining = inputSeconds;
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(timeRemaining)}`;

  let setButton = document.getElementById("set");
  setButton.classList.add("blinking"); // Мигание кнопки

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeRemaining--;
    document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(timeRemaining)}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      playAlarm();
      setButton.classList.remove("blinking"); // Останавливаем мигание кнопки
      document.body.classList.add("bg-blinking"); // Включаем мигание фона
    }
  }, 1000);
}

function playAlarm() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
  clearInterval(timerInterval);
  document.getElementById("timeRemaining").textContent = "Time Remaining: 00:00";
  document.getElementById("set").classList.remove("blinking"); // Останавливаем мигание кнопки
  document.body.classList.remove("bg-blinking"); // Останавливаем мигание фона
}

// Форматирование времени (MM:SS)
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

window.onload = setup;