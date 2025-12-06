function createLookup() {
  // implementation here
  function createLookup(pairs) {
  const lookup = {}; 

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];          
    const country = pair[0];        
    const currency = pair[1];       
    lookup[country] = currency;     
  }

  return lookup; 
}

module.exports = createLookup;

}

module.exports = createLookup;
