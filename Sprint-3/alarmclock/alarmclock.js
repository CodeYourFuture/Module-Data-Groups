let timer; // let because timer will be assigned a new timeout ID each time.

const input = document.getElementById("alarmSet");

input.addEventListener("keydown", function (event) {
  if (event.key === "-" || event.key === "e") {
    event.preventDefault();
  }
});

function setAlarm() {
  clearTimeout(timer); // Stop the previous countdown if there is one

  const input = document.getElementById("alarmSet");

  // Convert the input value from a string to a number
  let seconds = Number(input.value);

  // Don't start the alarm if the input is empty or negative/zero
  if (input.value === "" || seconds <= 0) {
    return;
  }

  function countdown() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;

    if (seconds === 0) {
      playAlarm();
      input.value = "";
      return;
    }

    seconds--;
    timer = setTimeout(countdown, 1000);
  }

  countdown();
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
