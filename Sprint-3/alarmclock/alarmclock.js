const userInput = document.getElementById("alarmSet").value;

//split function
const splitTime = (userInput) => {
  return userInput.split(":");
};

//parse time to a format we can work with
const splitAndParseTime = (userInput) => {
  const split = splitTime(userInput);

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (split.length >= 1) hours = parseInt(split[0]);
  if (split.length >= 2) minutes = parseInt(split[1]);
  if (split.length === 3) seconds = parseInt(split[2]);

  return { hours, minutes, seconds };
};

// check if num and : only
const checkNums = (userInput) => {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];
  for (let char of userInput) {
    if (!nums.includes(char)) {
      // if invalid character found
      // display an error message
      alert("Please enter a valid time.");
      return false;
    }
  }
  return true; // all characters are valid, if true we can continue
};

const checkTimeRange = (hours, minutes, seconds) => {
  // check time range is correct
  if (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59
  ) {
    // return it
    // return `${hours}:${minutes}:${seconds}`;
    return true;
  }
  alert("Please enter a valid time.");
  return false; // wrong time input
};

// format single digit time and return as an object
const formattedTime = (hours, minutes, seconds) => {
  // formatted time obj
  const timeObj = {
    hours: parseInt(hours.toString().padStart(2, "0")),
    minutes: parseInt(minutes.toString().padStart(2, "0")),
    seconds: parseInt(seconds.toString().padStart(2, "0")),
  };

  return timeObj;
};

//convert user time to seconds touse interval
const timeInSeconds = (userInput) => {
  const { hours, minutes, seconds } = splitAndParseTime(userInput);
  return hours * 3600 + minutes * 60 + seconds;
};

//count down variables
let timerDown;
let timeLeft;

//helper to show time remaining
const showTimeRemainingToUser = (timeLeft) => {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const displayHours = hours.toString().padStart(2, "0");
  const displayMinutes = minutes.toString().padStart(2, "0");
  const displaySeconds = seconds.toString().padStart(2, "0");

  document.getElementById(
    "timeRemaining"
  ).innerHTML = `Time remaining: ${displayHours}:${displayMinutes}:${displaySeconds}`;
};

const startTimer = (userInput) => {
  let timeLeft = timeInSeconds(userInput); // get total seconds from input

  timerDown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerDown);
      playAlarm();
      return;
    }
    //show to user
    showTimeRemainingToUser(timeLeft);

    //decrease time left counter
    timeLeft--;
  }, 1000);
};

function setAlarm() {
  const userInput = document.getElementById("alarmSet").value;

  if (checkNums(userInput)) {
    //parse
    const formattedUserTime = splitAndParseTime(userInput);

    //range
    const validRange = checkTimeRange(
      formattedUserTime.hours,
      formattedUserTime.minutes,
      formattedUserTime.seconds
    );

    // if valid format display
    if (validRange) {
      const { hours, minutes, seconds } = formattedUserTime;
      const timeWeDisplayToUser = formattedTime(hours, minutes, seconds);

      // show to user
      document.getElementById(
        "timeRemaining"
      ).innerHTML = `Time set: ${timeWeDisplayToUser.hours}:${timeWeDisplayToUser.minutes}:${timeWeDisplayToUser.seconds}`;
      console.log("Valid time:", timeWeDisplayToUser);
    }

    // start timer
    startTimer(userInput);
  } else {
    alert("Please enter a valid time.");
  }
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
