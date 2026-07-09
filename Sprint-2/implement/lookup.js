function createLookup() {
  // implementation here
      for (const [country, currency] of country_currency_pairs) {
        lookup[country] = currency;
    }

    return lookup;
}

module.exports = createLookup;
