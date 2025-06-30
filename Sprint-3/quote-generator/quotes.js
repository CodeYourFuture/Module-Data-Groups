
let quotes = [];

fetch('quotes.json')
  .then((res) => res.json())
  .then((data) => {
    quotes = data;
    pickFromArray();
  });

function pickFromArray() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  document.getElementById('quote').textContent = quote.quote;
  document.getElementById('author').textContent = `— ${quote.author}`;
}

document.getElementById('new-quote').addEventListener('click', pickFromArray);

let intervalId = null;
const autoplayToggle = document.getElementById('autoplay-toggle');
const autoplayStatus = document.getElementById('autoplay-status');

autoplayToggle.addEventListener('change', () => {
  if (autoplayToggle.checked) {
    autoplayStatus.textContent = 'Auto-play: ON';
    intervalId = setInterval(pickFromArray, 2000); 
  } else {
    autoplayStatus.textContent = 'Auto-play: OFF';
    clearInterval(intervalId);
  }
});

