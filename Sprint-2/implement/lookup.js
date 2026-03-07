function createLookup(countryAndCurrency) {
  const money = new Map(countryAndCurrency);
  const cash = Object.fromEntries(money);
  console.log(cash);
  console.log(money);
  return cash;
}
createLookup([
  ["US", "USD"],
  ["CA", "CAD"],
]);

module.exports = createLookup;
