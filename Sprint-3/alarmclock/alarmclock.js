const currentTime = document.querySelector("h1");  
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select"); 
const setAlarmBtn = document.querySelector(".set-alarm");  
const stopAlarmBtn = document.querySelector(".stop-alarm"); 

let alarmTime, isAlarmSet;
let countdown; 
const ringtone = new Audio("alarmsound.mp3");

 
for (let i = 0; i <= 4; i++) { 
  const option = `<option value="${i < 10 ? '0' + i : i}">${i < 10 ? '0' + i : i}</option>`;
  selectMenu[0].insertAdjacentHTML("beforeend", option);
}

 
for (let i = 0; i < 60; i++) {
  const option = `<option value="${i < 10 ? '0' + i : i}">${i < 10 ? '0' + i : i}</option>`;
  selectMenu[1].insertAdjacentHTML("beforeend", option);
}

 
for (let i = 0; i < 60; i++) {
  const option = `<option value="${i < 10 ? '0' + i : i}">${i < 10 ? '0' + i : i}</option>`;
  selectMenu[2].insertAdjacentHTML("beforeend", option);
}

 
currentTime.innerText = "Time Remaining: 00:00";

 
setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
}, 1000);  

function setAlarm() {
  if (isAlarmSet) {
    clearInterval(countdown);  
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    currentTime.innerText = "Time Remaining: 00:00";  
    return (isAlarmSet = false);
  }

  const hours = selectMenu[0].value;  
  const minutes = selectMenu[1].value; 
  const seconds = selectMenu[2].value;  

   
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  
  if (totalSeconds <= 0) {
    alert("Please, select a valid time to set Alarm!");
    return;
  }

  alarmTime = totalSeconds;  
  isAlarmSet = true;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";  

   
  countdown = setInterval(() => {
    if (alarmTime > 0) {
      alarmTime--;  
      const displayMinutes = Math.floor(alarmTime / 60).toString().padStart(2, '0');
      const displaySeconds = (alarmTime % 60).toString().padStart(2, '0');
      currentTime.innerText = `Time Remaining: ${displayMinutes}:${displaySeconds}`; 
    } else {
      clearInterval(countdown);
      playAlarm();  
    }
  }, 1000);
}

function playAlarm() {
  ringtone.play();
  ringtone.loop = true;
  document.body.style.backgroundColor = 'red';  
}

 
function stopAlarm() {
  ringtone.pause();
  ringtone.currentTime = 0;  
  document.body.style.backgroundColor = ''; 
  clearInterval(countdown);  
  currentTime.innerText = "Time Remaining: 00:00";  
  isAlarmSet = false;  
  content.classList.remove("disable");  
  setAlarmBtn.innerText = "Set Alarm"; 
}

 
setAlarmBtn.addEventListener("click", setAlarm);
stopAlarmBtn.addEventListener("click", stopAlarm);

//DO NOT EDIT BELOW HERE

//var audio = new Audio("alarmsound.mp3");

//function setup() {
 //document.getElementById("set").addEventListener("click", () => {
 //  setAlarm();
 //});

 //document.getElementById("stop").addEventListener("click", () => {
 //  pauseAlarm();
 //});
//}

//function playAlarm() {
 //audio.play();
//}

//function pauseAlarm() {
 //audio.pause();
//}

//window.onload = setup;
