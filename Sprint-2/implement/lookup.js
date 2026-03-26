function createLookup(elements) {
  if (!Array.isArray(elements) || !elements.every(Array.isArray)) {
    return "Invalid input";
  }
  if (elements.length === 0) return "Invalid input";
  console.log("a");
  let lookup = {};

  for (x of elements) {
    lookup[x[0]] = x[1];
  }
  console.log(lookup);
  return lookup;
}

module.exports = createLookup;
