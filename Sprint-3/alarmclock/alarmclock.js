function setAlarm() {
  const input = document.querySelector("#alarmSet");
  let seconds = input.value%60;
  let minutes = (input.value - seconds)/60;
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.textContent = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
   givenTime = Number(input.value);
    clearInterval(timerId);
    timerId =setInterval(()=>
   {
    givenTime = givenTime - 1;
    updateTime();
     if (givenTime === 0) {
       clearInterval(timerId);
       playAlarm();
     } 
  }, 1000);

}
  let timerId;
 let givenTime;

function updateTime(){
  let seconds = givenTime%60;
  let minutes = (givenTime - seconds)/60; 
  const remainingTime = document.querySelector("#timeRemaining");
  remainingTime.textContent = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; 
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
