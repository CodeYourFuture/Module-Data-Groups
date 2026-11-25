const AUTO_PLAY_SECONDS = 60; // use 5 while testing, then change back to 60
let timerId = null;

function showRandomQuote() {
  const item = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = item.quote;
  document.getElementById("author").textContent = "- " + item.author;
}

const autoPlayToggle = document.getElementById("auto-play");
const autoPlayStatus = document.getElementById("auto-play-status");

autoPlayToggle.addEventListener("change", function () {
  if (autoPlayToggle.checked) {
    timerId = setInterval(showRandomQuote, AUTO_PLAY_SECONDS * 1000);
    autoPlayStatus.textContent = "auto-play:ON";
  } else {
    clearInterval(timerId);
    timerId = null;
    autoPlayStatus.textContent = "auto-play:OFF";
  }
});

document.getElementById("new-quote").addEventListener("click", showRandomQuote);

showRandomQuote();