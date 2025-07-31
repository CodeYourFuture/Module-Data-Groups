function createLookup(countryCurrencyPairs) {
  // implementation here
  let objectLookup = {}
  for (i = 0 ; i<  countryCurrencyPairs.length ; i++){
    //const [country, currency] = countryCurrencyPairs[i]
     //objectLookup[country] = currency;
    objectLookup[countryCurrencyPairs[i][0]] = countryCurrencyPairs[i][1];
  }
  return objectLookup
}

module.exports = createLookup;
