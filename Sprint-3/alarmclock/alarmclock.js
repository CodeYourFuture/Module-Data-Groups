function setAlarm() {
  const alarmInput = document.querySelector("#alarmSet");
  const alarmTime = document.querySelector("#timeRemaining");
  let number = Number(alarmInput.value);
  if (number <= 0) {
    return;
  }
  const timer = setInterval(() => {
    number = number - 1;
    if (number <= 0) {
      clearInterval(timer);
      playAlarm();
      document.body.style.background = "yellow";
    }
    let second = number % 60;
    let minute = Math.floor(number / 60);
    alarmTime.innerText = `Time Remaining: ${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
audio.loop = true;

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
