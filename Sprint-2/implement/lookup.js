function createLookup(elements) {
  if (!Array.isArray(elements) || !elements.every(Array.isArray)) {
    return "Invalid input";
  }
  if (elements.length === 0) return "Invalid input";
  const lookup = {};

  for (const value of elements) {
    lookup[value[0]] = value[1];
  }
  return lookup;
}

module.exports = createLookup;
