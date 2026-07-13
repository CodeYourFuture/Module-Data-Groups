function createLookup(countrycurrency) {
  const lookup = {};
  countrycurrency.map(function ([country, currency]) {
    console.log(`${country}: ${currency}`);
    lookup[country] = currency;
  });
  return lookup;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["UAE", "AED"],
    ["ERI", "ERN"],
  ])
);

module.exports = createLookup;
