// Only define Audio if it doesn't exist (Node environment)
if (typeof Audio === "undefined") {
  // In a Node define a mock Audio class to prevent errors when calling play() and pause()
  global.Audio = class {
    // Mock Audio class
    constructor(src) {
      // Takes a source for the audio file, but we won't load audio in this mock
      this.src = src; // stores the source (unused in the mock)
    }
    play() {} // no-op in this mock
    pause() {} // no-op in this mock
  };
}

let countdownIntervalId; //stores timer ID so we can clear it when needed
let alarmRunning = false; // tracks if a countdown is currently active
let alarmRinging = false; // tracks if the alarm sound is currently playing

const formatTime = (seconds) => {
  // takes a number of seconds and formats it into a string in the format "MM:SS"
  const minutes = Math.floor(seconds / 60); // calculates whole minutes
  const remainingSeconds = seconds % 60; // calculates remaining seconds
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`; // formats as MM:SS
};

function updateTimerDisplay(timerElement, seconds) {
  timerElement.textContent = `Time Remaining: ${formatTime(seconds)}`;
}

function resetAllStates(timerDisplay) {
  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
    countdownIntervalId = null;
  }
  alarmRunning = false;
  alarmRinging = false;
  pauseAlarm();
  updateTimerDisplay(timerDisplay, 0);
  document.getElementById("alarmSet").value = "";
}
function setAlarm() {
  // called  "Set" button is clicked
  const alarmInput = document.getElementById("alarmSet"); // gets input for seconds
  const timerDisplay = document.getElementById("timeRemaining"); // gets element showing remaining time

  // Prevent starting a new alarm if one is already running
  if (alarmRunning) {
    alert("Please press Stop before setting a new alarm."); //  ensues user cannot set another alarm without stopping the current one first
    return;
  }
  if (alarmRinging) {
    resetAllStates(timerDisplay); // stop previous alarm and reset states
  }

  const seconds = parseInt(alarmInput.value, 10); // converts input value to integer

  if (isNaN(seconds) || seconds < 0) return; // ignore invalid or negative input

  let remainingSeconds = seconds; // initializes countdown

  updateTimerDisplay(timerDisplay, remainingSeconds); // shows initial time

  if (countdownIntervalId) {
    clearInterval(countdownIntervalId); // stops previous countdown to prevent multiple timers from running simultaneously
    countdownIntervalId = null; // resets timer ID
  }

  if (remainingSeconds === 0) {
    // if the input is zero, play the alarm immediately without starting a countdown
    alarmRinging = true; // mark that alarm sound is currently playing
    playAlarm();
    return;
  }

  alarmRunning = true; // mark that alarm is active
  countdownIntervalId = setInterval(() => {
    remainingSeconds--; // decrements remaining time by 1 second

    if (remainingSeconds <= 0) {
      // when time runs out, clear the timer and play the alarm sound
      clearInterval(countdownIntervalId); // stops the countdown timer
      countdownIntervalId = null; // resets timer ID

      alarmRunning = false; // mark that alarm is no longer active
      alarmRinging = true; // mark that alarm sound is currently playing

      updateTimerDisplay(timerDisplay, 0); // shows zero time
      playAlarm(); // plays alarm sound
      return; // prevents further execution
    }

    updateTimerDisplay(timerDisplay, remainingSeconds); // updates countdown display
  }, 1000); // repeats every second
}

window.addEventListener("load", () => {
  // Add a listener to the Stop button that also clears the timer
  const stopBtn = document.getElementById("stop");

  stopBtn.addEventListener("click", () => {
    // stops countdown amd stops audio
    if (countdownIntervalId) {
      clearInterval(countdownIntervalId);
      countdownIntervalId = null;
    }
    alarmRunning = false; // mark that alarm is no longer active
    alarmRinging = false; // mark that alarm sound is no longer playing
    pauseAlarm(); // stop audio if it's playing

    const timerDisplay = document.getElementById("timeRemaining");
    updateTimerDisplay(timerDisplay, 0);

    document.getElementById("alarmSet").value = ""; // clears input field when stopped
  });
});

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  // This function sets up event listeners for the "Set" and "Stop" buttons when the page loads
  document.getElementById("set").addEventListener("click", () => {
    // adds a click event listener to the "Set" button that calls the setAlarm function when clicked
    setAlarm(); // calls the setAlarm function to start the timer when the "Set" button is clicked
  });

  document.getElementById("stop").addEventListener("click", () => {
    // adds a click event listener to the "Stop" button that calls the pauseAlarm function when clicked
    pauseAlarm(); // calls the pauseAlarm function to stop the alarm sound when the "Stop" button is clicked
  });
}

function playAlarm() {
  // This function plays the alarm sound when called
  audio.play(); // calls the play method on the audio object to start playing the alarm sound
}

function pauseAlarm() {
  // This function pauses the alarm sound when called
  audio.pause(); // calls the pause method on the audio object to stop playing the alarm sound
}

window.onload = setup; // sets the setup function to run when the window finishes loading, ensuring that event listeners are set up properly
