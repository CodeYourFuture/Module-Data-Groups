function createLookup(pairs) {
  // implementation here
  const lookup = {};
  for(const [countryCode, currencyCode]of pairs){
    lookup[countryCode] = currencyCode;
  }
  return lookup;
}

module.exports = createLookup;
