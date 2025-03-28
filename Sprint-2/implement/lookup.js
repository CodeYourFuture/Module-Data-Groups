function createLookup(pairs) {
// implementation here
  if (!Array.isArray(pairs) || !pairs.every(pair => Array.isArray(pair) && pair.length === 2)) {
    throw new Error("Invalid input: Expected an array of key-value pairs.");
  }

  let lookup = {};

  for (let pair of pairs) {
    let [country, currency] = pair;
    lookup[country] = currency;
  }

  return lookup;
}

module.exports = createLookup;
