
function setAlarm() {
  const title = document.getElementById("timeRemaining");
  let time =10;
  const timerId = setInterval(() => {
    time--;
    const minutes=Math.floor(time / 60);
    const seconds= time%60;

    const formattedMinutes= minutes.toString().padStart(2, '0');
    const formattedSeconds= seconds.toString().padStart(2, '0');

    const formattedTime = `${formattedMinutes}: ${formattedSeconds}`;
    title.textContent = `Time Remaining : ${formattedTime}`;
    if (time<=0){
      clearInterval(timerId);
      playAlarm();
    }
}, 1000);
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
