// Create a lookup object from an array of [key, value] pairs
function createLookup(pairs) {
  if (!Array.isArray(pairs))
    throw new TypeError("Input must be an array of pairs");
  return pairs.reduce((acc, pair) => {
    if (!Array.isArray(pair) || pair.length < 2) return acc;
    const [key, value] = pair;
    acc[key] = value;
    return acc;
  }, {});
}

module.exports = createLookup;
