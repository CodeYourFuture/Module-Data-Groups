/* globals quotes, pickFromArray */

const AUTO_PLAY_INTERVAL_MS = 60000;
let autoPlayIntervalId = null;

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const autoPlaySwitch = document.getElementById('auto-play-switch');
const autoPlayStatus = document.getElementById('auto-play-status');

function displayNewQuote() {
  const randomQuote = pickFromArray(quotes);
  quoteElement.innerText = randomQuote.quote;
  authorElement.innerText = randomQuote.author;
}

function startAutoPlay() {
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
  }
  autoPlayStatus.classList.add('active');
  autoPlayIntervalId = setInterval(displayNewQuote, AUTO_PLAY_INTERVAL_MS);
}

function stopAutoPlay() {
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
    autoPlayIntervalId = null;
  }
  autoPlayStatus.classList.remove('active');
}

function handleAutoPlayToggle(event) {
  if (event.target.checked) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

newQuoteButton.addEventListener('click', function () {
  displayNewQuote();
  if (autoPlaySwitch.checked) {
    startAutoPlay();
  }
});

autoPlaySwitch.addEventListener('change', handleAutoPlayToggle);

// Initial display on load.
displayNewQuote();