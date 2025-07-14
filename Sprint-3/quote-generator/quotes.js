let quotes = [];

async function loadQuotes() {
  try {
    const res = await fetch('quotes.json');
    if (!res.ok) throw new Error('Quotes not fetched correctly');
    const data = await res.json();
    quotes = data;
    displayRandomQuote();
  } catch (err) {
    document.getElementById("quote").textContent = 'Could not load quotes.';
    console.error('Error:', err);
  }
}

loadQuotes();

  const displayRandomQuote=()=>{
    const quoteIndex = Math.floor(Math.random()*quotes.length)
    const selectedQuote = quotes[quoteIndex]
    document.getElementById('quote').textContent = selectedQuote.quote
    document.getElementById('author').textContent = `-${selectedQuote.author}`
  }
  document.getElementById('new-quote').addEventListener('click',displayRandomQuote)
  
  let intervalId
  const autoPlayCheckBox = document.getElementById('autoplay-toggle')
  const autoPlayStatus = document.getElementById('autoplay-status')

 autoPlayCheckBox.addEventListener('change',()=>{
   if(autoPlayCheckBox.checked){
    autoPlayStatus.textContent = "Auto-play: ON"
    intervalId = setInterval(displayRandomQuote,1000)
 }else{
    autoPlayStatus.textContent = "Auto-play: OFF"
    clearInterval(intervalId)
 }
})
 
