function createLookup(countryCurrencyPairs) {
  // implementation here
  pairs = {};
  for (const [country, currency] of countryCurrencyPairs) {
    pairs[country] = currency;
  }
  return pairs;
}
console.log(
  createLookup([
    ["UK", "GBP"],
    ["ET", "ETB"],
    ["CA", "CAD"],
    ["FR", "EUR"],
  ])
);

module.exports = createLookup;
