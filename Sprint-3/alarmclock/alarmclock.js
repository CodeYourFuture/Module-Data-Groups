// This is the countdown number that will go down every second
let countdownTimer;

function startFlashing() {
  document.body.classList.add("flash-background");
}

function stopFlashing() {
  document.body.classList.remove("flash-background");
}

function setAlarm() {
  const rawInput = document.getElementById("alarmSet").value.trim();

  // Reject empty input
  if (rawInput === "") {
    alert("Please enter a time.");
    return;
  }

  // 2. Parse input → returns either a number of seconds or null
  const totalSeconds = parseInput(rawInput);

  // 3. Reject invalid parsed values
  if (totalSeconds === null || totalSeconds <= 0) {
    alert("Please enter a valid positive time.");
    return;
  }

  // 4. Reject extremely large values
  if (totalSeconds > 36000) {
    alert("Please enter a time less than 10 hours.");
    return;
  }

  stopFlashing();
  pauseAlarm();

  // 5. If we reach here → input is valid
  startCountdown(totalSeconds);
}

function parseInput(rawInput) {
  if (rawInput.includes(":")) {
    const [minsStr, secsStr] = rawInput.split(":");

    const mins = Number(minsStr);
    const secs = Number(secsStr);

    if (
      Number.isNaN(mins) ||
      Number.isNaN(secs) ||
      mins < 0 ||
      secs < 0 ||
      secs >= 60
    ) {
      return null;
    }

    return mins * 60 + secs;
  }

  const secs = Number(rawInput);
  return Number.isNaN(secs) ? null : secs;
}

function startCountdown(totalSeconds) {
  let timeLeft = totalSeconds;

  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  updateDisplay(timeLeft);

  countdownTimer = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      playAlarm();
      startFlashing();
    }
  }, 1000);
}

// A simple helper to turn seconds into MM:SS format
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  // Make sure both numbers always have two digits
  const paddedMins = String(mins).padStart(2, "0");
  const paddedSecs = String(secs).padStart(2, "0");

  return `${paddedMins}:${paddedSecs}`;
}

function updateDisplay(seconds) {
  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${formatTime(seconds)}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    stopFlashing(); // stop flashing if running
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
