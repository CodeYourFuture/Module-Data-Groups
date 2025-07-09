function createLookup(countryCurrencyPairs) {
  const result = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const pair = countryCurrencyPairs[i];
    const [countryCode, currencyCode] = pair;

    result[countryCode] = currencyCode;
  }

  return result;
}

console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;
