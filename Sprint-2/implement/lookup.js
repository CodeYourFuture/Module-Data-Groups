function createLookup(countryCurrencyPairs) {
  const lookUp = {};
  for (const item of countryCurrencyPairs) {
    lookUp[item[0]] = item[1];
  }
  return lookUp;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);
module.exports = createLookup;
