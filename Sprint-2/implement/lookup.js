function createLookup(pairs) {
  if (!Array.isArray(pairs)) {
    throw new Error("Input must be an array of arrays.");
  }

  const lookup = {};
  for (const [country, currency] of pairs) {
    if (typeof country !== "string" || typeof currency !== "string") {
      throw new Error("Each pair must contain two strings.");
    }
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;


