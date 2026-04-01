
// Only define Audio if it doesn't exist (Node environment)
if (typeof Audio === "undefined") {  // In a Node define a mock Audio class to prevent errors when calling play() and pause()
  global.Audio = class {  // Mock Audio class
    constructor(src) { // Takes a source for the audio file, but we won't load audio in this mock
      this.src = src;  // stores the source (unused in the mock)
    }
    play() {}  // no-op in this mock
    pause() {}  // no-op in this mock
  };
}

let countdownIntervalId;   //stores timer ID so we can clear it when needed

const formatTime = (seconds) => {  // takes a number of seconds and formats it into a string in the format "MM:SS"
  const minutes = Math.floor(seconds / 60);  // calculates whole minutes
  const remainingSeconds = seconds % 60;  // calculates remaining seconds
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;  // formats as MM:SS
};

function setAlarm() {  // called  "Set" button is clicked
  const alarmInput = document.getElementById("alarmSet");  // gets input for seconds
  const timerDisplay = document.getElementById("timeRemaining");  // gets element showing remaining time

  const seconds = parseInt(alarmInput.value, 10); // converts input value to integer 
  if (isNaN(seconds) || seconds < 0) return;  // if ignore invalid or negative input

  let remainingSeconds = seconds; // initializes countdown

  timerDisplay.textContent = `Time Remaining: ${formatTime(remainingSeconds)}`;  // shows initial time

  if (countdownIntervalId) clearInterval(countdownIntervalId); // stops previous countdown to prevent multiple timers from running simultaneously

  countdownIntervalId = setInterval(() => { // timer runs every second
    remainingSeconds--;  // decrements remaining time by 1 second

    if (remainingSeconds <= 0) {  // when time runs out, clear the timer and play the alarm sound
      clearInterval(countdownIntervalId);  // stops the countdown
      timerDisplay.textContent = "Time Remaining: 00:00"; // shows zero time
      playAlarm();  // plays alarm sound
      return; // prevents further execution
    }
    timerDisplay.textContent = `Time Remaining: ${formatTime(remainingSeconds)}`; // updates countdown display
  }, 1000);  // repeats every second
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {  // This function sets up event listeners for the "Set" and "Stop" buttons when the page loads
  document.getElementById("set").addEventListener("click", () => { // adds a click event listener to the "Set" button that calls the setAlarm function when clicked
    setAlarm();  // calls the setAlarm function to start the timer when the "Set" button is clicked
  });

  document.getElementById("stop").addEventListener("click", () => {  // adds a click event listener to the "Stop" button that calls the pauseAlarm function when clicked
    pauseAlarm();  // calls the pauseAlarm function to stop the alarm sound when the "Stop" button is clicked
  });
}

function playAlarm() {  // This function plays the alarm sound when called
  audio.play();  // calls the play method on the audio object to start playing the alarm sound
}

function pauseAlarm() {  // This function pauses the alarm sound when called
  audio.pause();  // calls the pause method on the audio object to stop playing the alarm sound
}

window.onload = setup;  // sets the setup function to run when the window finishes loading, ensuring that event listeners are set up properly
