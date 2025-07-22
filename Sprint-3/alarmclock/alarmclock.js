// When you click the `Set Alarm` button the counter at the top of the screen should change 
// to the number you entered in the `input` field. 
// For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. 
// You can make the sound happen by using `playAlarm()`.
// You can stop the alarm sound by pressing the `Stop Alarm` button.


//   Steps:
// 1) we need to access the input area in the DOM.
const inputArea = document.querySelector("#alarmSet")
// 2) we need to access the value in the input area when an event occur
inputArea.addEventListener("input", function () {
  console.log("You reached input area")
})
// 3) we need to access the `Set Alarm` button in the DOM then get the click event of it
const setAlarmButton = document.querySelector("#set")
setAlarmButton.addEventListener("click", setAlarm)
// 4) we need to access the `Stop Alarm` button in the DOM then get the click event of it
const stopAlarmButton = document.querySelector("#stop")
stopAlarmButton.addEventListener("click", function () {
  console.log("stop alarm pressed")
})
// 5) we need to change the top of the screen to be updated with the input value.


function setAlarm() {
  const timeInterval = Number(inputArea.value);
  console.log("🚀 ~ setAlarm ~ secondsRemaining:", timeInterval);
  const seconds = (timeInterval % 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeInterval / 60).toString().padStart(2, '0');
  const timeRemainingInfo = document.querySelector("#timeRemaining");
  timeRemainingInfo.innerText = `Time Remaining: ${minutes} : ${seconds}`;

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
