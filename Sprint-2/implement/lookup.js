function createLookup(countryAndCurrency) {
  // const money = new Map(countryAndCurrency);
  const cash = Object.fromEntries(countryAndCurrency);
  // console.log(cash);
  console.log(countryAndCurrency);
  return cash;
}
createLookup([
  ["US", "USD"],
  ["CA", "CAD"],
]);

module.exports = createLookup;
