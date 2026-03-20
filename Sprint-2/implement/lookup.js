
  // implementation here
  function createLookup(pairs) {

  if (!Array.isArray(pairs)) {
    throw new Error('Input must be an array of pairs');
  }

  const lookup = {};

  for (const pair of pairs) {
    
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error('Each element must be an array of [countryCode, currencyCode]');
    }
    const [country, currency] = pair;
    lookup[country] = currency;
  }

  return lookup;
}

module.exports = createLookup;
