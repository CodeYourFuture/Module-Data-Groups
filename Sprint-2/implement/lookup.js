function createLookup(countryCurrencyPairs) {
  const lookup = {};

  countryCurrencyPairs.forEach(function (pair) {
    const country = pair[0];
    const currency = pair[1];
    lookup[country] = currency;
  });

  return lookup;
}
module.exports = createLookup;
