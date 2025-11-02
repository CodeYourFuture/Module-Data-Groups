function createLookup(pairs) {
  /**
   * Creates a lookup object from an array of [key, value] pairs.
   * @param {Array<Array<string>>} pairs - An array of [countryCode, currencyCode] pairs.
   * @returns {Object} - A lookup object mapping country codes to currency codes.
   */
  if (!Array.isArray(pairs)) {
    throw new TypeError("Argument must be an array of pairs");
  }

  return pairs.reduce((lookup, [country, currency]) => {
    lookup[country] = currency;
    return lookup;
  }, {});
}

module.exports = createLookup;
