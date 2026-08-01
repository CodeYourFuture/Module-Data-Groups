// ## How the clock should work

// When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

// You can stop the alarm sound by pressing the `Stop Alarm` button.

//
const alarmInput = document.querySelector("#alarmSet");
const setButton = document.querySelector("#set");
const timeRemaining = document.querySelector("#timeRemaining");
function setAlarm() {
  let totalSeconds = Number(alarmInput.value);
  const timer = setInterval(() => {
    totalSeconds--;
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
    const remainingTime = minutes + ":" + seconds;
    timeRemaining.innerText = `Time Remaining:${remainingTime}`;
    if (totalSeconds === 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

setButton.addEventListener("click", setAlarm);
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
