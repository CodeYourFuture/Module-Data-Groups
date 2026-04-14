// added extra functionality to play music when the user click on autoplay
let backgroundSound = new Audio("assets/SPACE.mp3");
let isSoundStarted = false;

//avoid auto-playing sound in test environment and jsdom which does not implement audio playback
function playSound() {
  // Solo intentamos reproducir si no es un entorno de test (JSDOM)
  if (!navigator.userAgent.includes("jsdom") && !isSoundStarted) {
    backgroundSound
      .play()
      .then(() => (isSoundStarted = true))
      .catch(() =>
        console.log("Esperando interacción del usuario para el audio...")
      );
  }
}

// Lógica de Quotes
function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const autoQuoteBtn = document.querySelector("#playButton");

// updates the quote and author text in the HTML
function randomQuoteGenerate() {
  const randomArr = pickFromArray(quotes);
  quoteText.textContent = randomArr.quote;
  quoteAuthor.textContent = randomArr.author;
}

// generates an initial quote when the page loads
  randomQuoteGenerate();

// listens for clicks to change quotes manually and start the background sound
newQuoteBtn.addEventListener("click", () => {
  randomQuoteGenerate();
  playSound();
});

let quoteInterval;

// toggles the automatic quote generator and manages the play/stop state
autoQuoteBtn.addEventListener("click", () => {
  if (quoteInterval) {
    clearInterval(quoteInterval);
    quoteInterval = null;
    autoQuoteBtn.textContent = "Play Auto-Quotes";
  } else {
    randomQuoteGenerate(); // Genera una nueva al empezar
    quoteInterval = setInterval(randomQuoteGenerate, 2000);
    autoQuoteBtn.textContent = "Stop";
    playSound();
  }
});
