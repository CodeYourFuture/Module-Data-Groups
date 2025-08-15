function createLookup(pairs) {
  const lookup = {};
  for (const [key, value] of pairs) {
    lookup[key] = value;
  }
  return lookup;
}

module.exports = createLookup;
