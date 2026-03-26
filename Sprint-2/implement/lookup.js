function createLookup(elements) {
  if (!Array.isArray(elements) || !elements.every(Array.isArray)) {
    return "Invalid input";
  }
  if (elements.length === 0) return "Invalid input";
  let lookup = {};

  for (x of elements) {
    lookup[x[0]] = x[1];
  }
  return lookup;
}

module.exports = createLookup;
