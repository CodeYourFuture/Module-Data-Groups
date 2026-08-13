function createLookup(countrycurrency) {
  const lookup = {}; // lookup object is created empty to store the new keys and values mapped from the function
  countrycurrency.map(function ([country, currency]) {
    // maps every keys and values passed as argument in countrycurrency and stores to the variable names of country and currency
    console.log(`${country}: ${currency}`);
    lookup[country] = currency; // this lookup object is then used to store the already mapped keys and values of the countrycurrency
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
