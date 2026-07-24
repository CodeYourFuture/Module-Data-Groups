function createLookup(country_currency_pairs) {
  // implementation here
      const lookup = {};
      for (const [country, currency] of country_currency_pairs) {
        lookup[country] = currency;
    }

    return lookup;
}

module.exports = createLookup;
