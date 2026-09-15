function createLookup(countryCurrencyPairs) {
  // Object.fromEntries turns [[key, value], ...] into { key: value, ... }.
  // It builds a brand-new object and leaves the input array untouched.
  // If a country code appears more than once, the last pair wins.
  return Object.fromEntries(countryCurrencyPairs);
}

module.exports = createLookup;
