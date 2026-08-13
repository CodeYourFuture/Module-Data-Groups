function createLookup(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("invalid data type entered");
  }
  if (arr.length === 0) {
    throw new Error("country and currency code not entered");
  }

  const objectLookup = {};

  for (const pair of arr) {
    if (!Array.isArray(pair)) {
      throw new Error("Each item must be an array.");
    }
    if (pair.length !== 2) {
      throw new Error(
        "Each inner array must contain exactly two elements: a key and a value"
      );
    }
    const [country, currency] = pair;
    if (country === currency) {
      throw new Error("Country code and currency code cannot be the same");
    }
    objectLookup[country] = currency;
  }
  return objectLookup;
}
module.exports = createLookup;
