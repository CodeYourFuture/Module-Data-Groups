function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    return {};
  }
  const currencyByCountry = {};
  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const [country, currency] = countryCurrencyPairs[i];
    currencyByCountry[country] = currency;
  }
  return currencyByCountry;
}
const example = [
  ["US", "USD"],
  ["CA", "CAD"],
];
console.log(createLookup(example));
module.exports = createLookup;
