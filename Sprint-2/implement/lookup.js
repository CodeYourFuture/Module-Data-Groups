function createLookup(pairs) {
  const result = {};

  for (const [key, value] of pairs) {
    result[key] = value;
  }

  return result;
}

module.exports = createLookup;
