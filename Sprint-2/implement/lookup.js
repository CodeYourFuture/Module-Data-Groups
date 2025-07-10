function createLookup(arrayCountryCurrency) {
  // implementation here
  const lookup = {};
  arrayCountryCurrency.forEach(pair => {
    if (Array.isArray(pair) && pair.length === 2) {
      const [country, currency] = pair;
      lookup[country] = currency;
    }
  });
  return lookup;
}

module.exports = createLookup;
