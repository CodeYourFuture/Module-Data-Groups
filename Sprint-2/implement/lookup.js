function createLookup() {
  const array = {};

  for (const pair of countryCurrencyPairs) {
    const country = pair[0];
    const currency = pair[1];
    array[country] = currency;
  }

  return array;
}

module.exports = createLookup;
