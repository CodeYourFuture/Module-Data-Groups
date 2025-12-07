function setAlarm() {}

// DO NOT EDIT BELOW HERE
let countdown;

function setAlarm() {
  let seconds = Number(document.getElementById("alarmSet").value);

  function updateDisplay() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    let mm = String(mins).padStart(2, "0");
    let ss = String(secs).padStart(2, "0");
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: " + mm + ":" + ss;
  }

  updateDisplay();
  clearInterval(countdown);

  countdown = setInterval(function () {
    seconds--;
    updateDisplay();

    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

function pauseAlarm() {
  audio.pause();
  clearInterval(countdown);
}


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
