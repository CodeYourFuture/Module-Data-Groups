function createLookup(countryCurrencyPairs) {
  // implementation here
  let countryCurrency={}
  for(let i=0;i<countryCurrencyPairs.length;i++){
    countryCurrency[countryCurrencyPairs[i][0]]=countryCurrencyPairs[i][1]
  }
  return countryCurrency;

}


module.exports = createLookup;
