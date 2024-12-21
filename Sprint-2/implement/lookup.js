function createLookup(countryCurrencyPairs) {
  // implementation here

  if (
    !Array.isArray(countryCurrencyPairs) ||
    countryCurrencyPairs.length == 0
  ) {
    return "Value is empty or empty array";
  }
  // return countryCurrencyPairs[0].length;
  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    if (countryCurrencyPairs[i].length !== 2) {
      return "Input pair is invalid";
    }
  }
  const currencyPair = {};
  countryCurrencyPairs.map((countryAndCurrency) => {
    const [key, value] = countryAndCurrency;
    currencyPair[String(key)] = value;
  });
  return currencyPair;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);
console.log(createLookup([[1, 2], [2, 3], [3]]));
module.exports = createLookup;
