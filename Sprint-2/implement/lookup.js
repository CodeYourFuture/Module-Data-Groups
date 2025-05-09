function createLookup(countryCourencyPairs) {
  const lookup = {};
  for (const pairs of countryCourencyPairs) {
    [coutryCode, currencycode] = pairs;
    lookup[coutryCode] = currencycode;
  }
  return lookup;
}

const majorPairs = [
  ["GB", "GBP"],
  ["USA", "USD"],
  ["CA", "CAD"],
  ["EU", "EUR"],
];
console.log(createLookup(majorPairs));

module.exports = createLookup;
