function createLookup(countryCurrencyPairs) {
  // implementation here
  const result = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const pair = countryCurrencyPairs[i];
    const country = pair[0];
    const currency = pair[1];
    result[country] = currency;
  }
  return result;
}

module.exports = createLookup;
