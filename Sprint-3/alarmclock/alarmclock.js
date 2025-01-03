//to handle multiple occurences of setting the timer
let currentTimer = null;

function setAlarm() {

  const body = document.querySelector("body");
  //access the input field
  const inputValue = document.querySelector("#alarmSet").value;
  //timeRemaning title
  const timeRemaining = document.querySelector("#timeRemaining");
  let min = parseInt(inputValue / 60);//minutes if input is above 60
  let sec = inputValue % 60;//seconds left over after minutes

  timeRemaining.textContent = `Time Remaining: ${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;


  //clear previous timer set
  if (currentTimer !== null) {
    clearInterval(currentTimer);
  }


  currentTimer = setInterval(() => {
    //console.log(`min: ${min}, sec: ${sec}`);
    if (min === 0 && sec === 0) {

      clearInterval(currentTimer);
      console.log("Timer ended. Playing alarm.");
      body.style.backgroundColor = 'lightgreen';
      playAlarm();

    }

    else if (min >= 0 && min < 10) {
      let stringMin = min.toString().padStart(2, "0");
      let stringSec = sec.toString().padStart(2, "0");
      if (sec > 0) {

        sec--;
        if (sec < 10) {
          stringSec = sec.toString().padStart(2, "0");
        }
      }
      else if (sec === 0 && min > 0) {
        min--;
        sec = 59;
      }
      timeRemaining.textContent = `Time Remaining: ${stringMin}:${stringSec}`;

    }
    else if (min >= 10) {
      let stringSec = sec.toString().padStart(2, "0");
      if (sec > 0) {

        sec--;
        if (sec < 10) {
          stringSec = sec.toString().padStart(2, "0");
        }
      }
      else if (sec === 0 && min > 0) {
        min--;
        sec = 59;
      }
      timeRemaining.textContent = `Time Remaining: ${min}:${stringSec}`;


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
