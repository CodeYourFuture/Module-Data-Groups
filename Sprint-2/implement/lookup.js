function createLookup(input) {
  if (!Array.isArray(input)) {
    throw new Error("Input must be an array of [country, currency] pairs");
  }

  const lookup = {};

  for (const pair of input) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error("Each item must be an array of [country, currency]");
    }

    const [country, currency] = pair;

    if (typeof country !== "string" || typeof currency !== "string") {
      throw new Error("Each item must be an array of [country, currency]");
    }

    lookup[country] = currency;
  }

  return lookup;
}

module.exports = createLookup;

// In lookup.js function createLookup implemented. 