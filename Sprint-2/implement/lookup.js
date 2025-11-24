function createLookup(countryCurrency) {
  if (!Array.isArray(countryCurrency)) {
    throw new Error("Argument must be an array");
  }
  let countryCurrencyPairs = {};
  for (const pair of countryCurrency) {
    let country = pair[0];
    let currency = pair[1];
    countryCurrencyPairs[country] = currency;
  }
  return countryCurrencyPairs;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
    ["RO", "RON"],
  ])
);

module.exports = createLookup;
