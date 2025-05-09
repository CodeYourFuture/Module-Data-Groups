function createLookup(countryCurrencyPairs) {
  // implementation here
  const lookup = {}; 

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const [countryCode, currencyCode] = countryCurrencyPairs[i]; 
    lookup[countryCode] = currencyCode; }

  return lookup;
}

module.exports = createLookup;
