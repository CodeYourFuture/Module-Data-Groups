let intervalId;
function setAlarm() {
  if (intervalId) clearInterval(intervalId);
  let input = Number(document.getElementById("alarmSet").value);
  if (input < 0 || isNaN(input)) {
    alert("Please enter positive number");
    return;
  }
  updateTime(input);

  intervalId = setInterval(() => {
    input--;
    updateTime(input);

    if (input <= 0) {
      clearInterval(intervalId);
      playAlarm();
      return;
    }
  }, 1000);
}
function updateTime(left) {
  const minutes = String(Math.floor(left / 60)).padStart(2, "0");
  const seconds = String(left % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${minutes}:${seconds}`;
}

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

window.onload = setup;
