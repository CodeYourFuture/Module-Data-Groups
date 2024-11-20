function dedupe(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }
 
  return Array.from(new Set(array));
}

module.exports = dedupe;

