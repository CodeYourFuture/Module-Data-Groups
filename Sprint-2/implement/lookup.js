function createLookup(pairs) {
  // implementation here
  let countryPair = {};
  for (const [country, currency] of pairs) {
    countryPair[country] = currency;
  }

  return countryPair;
}

module.exports = createLookup;
