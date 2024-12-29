function setAlarm() {
  //access the input field
  const inputValue = document.querySelector("#alarmSet").value;
  //timeRemaning title
  const timeRemaining = document.querySelector("#timeRemaining");
  let min = parseInt(inputValue / 60);//minutes if input is above 60
  let sec = inputValue % 60;//seconds left over after minutes

  setInterval(() => {
    if (min >= 1 && min < 10 && sec < 10) {
      timeRemaining.textContent = `Time Remaining: ${min}:${sec}`;
      if (sec > 0) {
        sec--
      }
      else if (sec === 0 && min >= 1) {
        min--;
        sec = 60;
      }

    }
    else if (inputValue > 60 && sec >= 10) {
      timeRemaining.textContent = `Time Remaining: ${min}:${sec}`;
      if (sec > 0) {
        sec--
      }
      else if (sec === 0 && min >= 1) {
        min--;
        sec = 60;
      }
    }
    else {
      timeRemaining.innerHTML = `Time Remaining: 00:${sec}`;
      if (sec > 0) {
        sec--
      }
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
