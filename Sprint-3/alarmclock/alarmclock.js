function displayTime(time) {
    const remainingElement = document.getElementById("timeRemaining");
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    remainingElement.innerText = `Time Remaining: ${minutes}:${seconds}`;
}

let interval;

function setAlarm() {
    let time = parseInt(document.getElementById("alarmSet").value);

    clearInterval(interval);

    displayTime(time);

    interval = setInterval(() => {
        time--;
        displayTime(time);

        if (time === 0) {
            clearInterval(interval);
            playAlarm();
        }
    }, 1000);
}

window.addEventListener("load", () => {
    document.getElementById("stop").addEventListener("click", () => {
        clearInterval(interval);
    });
});


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
