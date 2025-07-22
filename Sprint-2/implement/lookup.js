function createLookup(currencyPairs){
  const lookup = {};
  for (const [countryCode, currencyCode] of currencyPairs) { 
    lookup[countryCode] = currencyCode;
  }  
  return lookup;
}

module.exports = createLookup;
