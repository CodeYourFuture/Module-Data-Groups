function tally(list) {
  if (!Array.isArray(list)) {
    throw new TypeError("Invalid input: not an array");
  }
  return (itemCountMapping = list.reduce((acc, curr) => {
    if (typeof curr !== "string" && typeof curr !== "number") {
      throw new Error(`Invalid element: ${curr} must be a string or number`);
    }
    acc[curr] = (acc[curr] ?? 0) + 1;
    return acc;
  }, {}));
}

module.exports = tally;
