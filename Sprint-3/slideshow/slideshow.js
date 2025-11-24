const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const buttons = [
  {
    type: "button",
    id: "auto-backward",
    text: "Auto Back",
  },
  {
    type: "button",
    id: "backward-btn", // updated to match test
    text: "Back",
  },
  {
    type: "button",
    id: "stop",
    text: "Stop",
  },
  {
    type: "button",
    id: "forward-btn", // updated to match test
    text: "Forward",
  },
  {
    type: "button",
    id: "auto-forward",
    text: "Auto Forward",
  },
];

const buttonBar = document.getElementById("button-bar");
const imageElement = document.getElementById("carousel-img");

let index = 0;
let intervalId = null;

// Set initial image
imageElement.src = images[index];

// Create buttons and add event listeners
buttons.forEach((item) => {
  const button = document.createElement("button");
  button.type = item.type;
  button.id = item.id;
  button.textContent = item.text;
  button.addEventListener("click", () => actButton(item.id));
  buttonBar.appendChild(button);
});

function actButton(id) {
  switch (id) {
    case "auto-backward":
      clearInterval(intervalId);
      disableAutoButtons();
      intervalId = setInterval(backward, 2000);
      break;

    case "backward-btn":
      backward();
      break;

    case "stop":
      clearInterval(intervalId);
      enableAutoButtons();
      break;

    case "forward-btn":
      forward();
      break;

    case "auto-forward":
      clearInterval(intervalId);
      disableAutoButtons();
      intervalId = setInterval(() => {
        forward();
      }, 2000);
      break;
  }
}

function disableAutoButtons() {
  document.getElementById("auto-forward").disabled = true;
  document.getElementById("auto-backward").disabled = true;
}

function enableAutoButtons() {
  document.getElementById("auto-forward").disabled = false;
  document.getElementById("auto-backward").disabled = false;
}

function backward() {
  index = index === 0 ? images.length - 1 : index - 1;
  imageElement.src = images[index];
}

function forward() {
  index = (index + 1) % images.length;
  imageElement.src = images[index];
}