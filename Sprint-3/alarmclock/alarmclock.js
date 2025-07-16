let runningTimer;                                                                           // Store the interval ID for countdown timer                        
let timeLeft = 0;                                                                           // Remaining time in seconds
let flashInterval;                                                                          // Store interval ID for flashing background effect

const random = num => Math.floor(Math.random() * (num + 1));                                // Return random integer to generate RGB color values for flashing background

const setAlarm = () => {
  clearInterval(runningTimer);                                                              // Clear any previous running timer

  const timeInput = document.getElementById("alarmSet");                                    // Get user input element 
  const inputSeconds = parseInt(timeInput.value, 10);                                       // Convert string input to integer and assign as 'inputSeconds'

  if (!Number.isInteger(inputSeconds) || inputSeconds <= 0) {                               // Validate input: positive whole numbers only
    alert("Please enter an integer greater than 0");
    return;
  }

  timeLeft = inputSeconds;                                                                  // Store valid input in timeLeft variable
  timeInput.value = "";                                                                     // Clear input field after valid value is entered
  updateDisplay();                                                                          // Show initial countdown immediately

  runningTimer = setInterval(() => {                                                        // Start runningTimer by creating an interval that runs every 1 second
    timeLeft--;
    updateDisplay();                                                                        // Decrease time left by 1 second and update the display

    if (timeLeft <= 0) {                                                                    // Stop timer and play alarm sound once time is up
      clearInterval(runningTimer);
      playAlarm();
    }
  }, 1000);                                                                                 // Update time remaining display each second
};

const updateDisplay = () => {                                                               // Format and update runningTimer display
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");                          // Format minutes and seconds with leading 0
  const secs = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${mins}:${secs}`; // Update display with formatted MM:SS time
};

const flashing = () => {                                                                    // Adding flashing effect to run when the alarm sounds
  const [startFlash, pauseFlash] = [window.playAlarm, window.pauseAlarm];                   // Store the playAlarm and pauseAlarm functions to use as flashing trigger/ stop

  window.playAlarm = () => {
    startFlash();                                                                           // Run the original alarm response
    flashInterval = setInterval(() => {                                                     // Start a new interval that changes the background colour 
      document.body.style.backgroundColor =
        `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }, 300);                                                                                //  Change background every 300ms to create flashing effect
  };

  window.pauseAlarm = () => {
    pauseFlash();                                                                           // Apply the original pause sound logic to stop flashing 
    clearInterval(flashInterval);                                                           // Stop flashing interval by pressing 'Stop Alarm' button
    document.body.style.backgroundColor = "";                                               // Reset the background colour
  };
};

window.addEventListener("DOMContentLoaded", flashing);

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
