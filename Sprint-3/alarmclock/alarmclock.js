let alarmInterval;
let colorInterval;

function setAlarm() {
  clearInterval(alarmInterval);
  const timeRemaining = document.querySelector("#alarmSet");
  const display = document.querySelector("#timeRemaining");
  if (!timeRemaining || !display) return;
  //what ever we input is turned into seconds
  let totalSeconds = parseInt(timeRemaining.value);

  if (isNaN(totalSeconds) || totalSeconds <= 0) return;

  const formattedTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  display.innerHTML = `Time Remaining: ${formattedTime(totalSeconds)}`;

  alarmInterval = setInterval(() => {
    totalSeconds--;

    display.innerHTML = `Time Remaining: ${formattedTime(totalSeconds)}`;

    if (totalSeconds <= 0) {
      clearInterval(alarmInterval);
      playAlarm();
    }
  }, 1000);
}
//add color changing background when alarm reaches 0 until stopped.
//function from color changing assignment 10 year ago!
function makeRandomColor() {
  var colorOptions = "0123456789ABCDEF";
  var newColor = "#";
  //repeat 6 times to generate 6 random hex digits from the 16 characters in colorOptions
  for (var i = 0; i < 6; i++) {
    //picks random numbers from colorOptions and appends it to the # to make a new color.
    newColor += colorOptions[Math.floor(Math.random() * 16)];
  }
  return newColor;
}
//end color changing

//keep the existing code below and call the setup
//set the background color transition
document.body.style.transition = "background-color 0.7s ease";
// call the entire page
window.addEventListener("load", function () {
  // attach the alarm sound to the make Random color so it starts changing when the alarm starts.
  audio.addEventListener("play", () => {
    // stops any previous color changing intervals
    clearInterval(colorInterval);
    //starts a new repeating timer and saves it's ID in colorInterval. setInterval runs every 2seconds
    colorInterval = setInterval(() => {
      //style the background and make it important! so it over-rides the style.css
      document.body.style.setProperty(
        "background-color",
        makeRandomColor(),
        "important"
      );
      //closes setInterval after 1 seconds
    }, 1000);
  });

  audio.addEventListener("pause", () => {
    clearInterval(colorInterval);
    document.body.style.backgroundColor = "";
  });
});
//not sure that this is helping. The function works without it.
window.setAlarm = setAlarm;
//end linking

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
