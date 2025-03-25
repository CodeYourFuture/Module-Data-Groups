function createLookup() {
  // implementation here
  let lookup = {};

    for (let pair of pairs) {
        let [country, currency] = pair;
        lookup[country] = currency;
    }

    return lookup;

}

module.exports = createLookup;
