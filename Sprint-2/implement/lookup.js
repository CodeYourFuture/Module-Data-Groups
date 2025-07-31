function createLookup(countryCurrencyPairs) {
  const lookup= {};
  for (let pair of countryCurrencyPairs){
    const country = pair[0];
    const currency = pair[1];
    lookup[country]= currency;
    
  } 
  return lookup;
}

module.exports = createLookup;
