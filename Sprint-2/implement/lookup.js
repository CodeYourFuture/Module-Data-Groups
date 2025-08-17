function createLookup(pairs) {
  // implementation here
    if (!Array.isArray(pairs)) {
    throw new Error("Input must be an array of [key, value] pairs");
  }

  return pairs.reduce((acc, pair) => {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error("Each item must be an array with exactly 2 elements");
    }
    const [countryCode, currencyCode] = pair;
    acc[countryCode] = currencyCode;
    return acc;
  }, {});
}

module.exports = createLookup;
