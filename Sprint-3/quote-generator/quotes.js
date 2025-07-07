let quotes =[];
fetch('quotes.json')
  .then((res)=>{
    if(!res.ok){
      throw new Error('quotes not fetched correctly');
      }
    return res.json()
    })
  .then((data)=>{
    quotes = data;
    displayRandomQuote()
    })
  .catch((err)=>{
    document.getElementById("quote").textContent='Could not load quotes.';
    console.error('the error encountered is :', err)
  })

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
 
