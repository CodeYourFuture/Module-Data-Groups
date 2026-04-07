function createLookup(countryCurrencyPairs) {
  let lookup = {};
  for (let pair of countryCurrencyPairs) {
    let key = pair[0];
    let value = pair[1];
    lookup[key] = value;
  }
  return lookup;
}

module.exports = createLookup;
