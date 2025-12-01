function createLookup(arr) {
  const lookup = {};
  for (const [country, currency] of arr) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
