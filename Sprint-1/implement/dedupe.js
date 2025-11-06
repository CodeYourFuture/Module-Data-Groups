function dedupe(arrayInput) {
  if (!Array.isArray(arrayInput)) {
    throw new TypeError("Input must be an array");
  }

  if (arrayInput.length === 0) {
    return [];
  }

  const newArray = [];
  const seen = new Set();

  for (const item of arrayInput) {
    if (
      !seen.has(item) &&
      ((typeof item === "number" && !Number.isNaN(item)) ||
        typeof item === "string")
    ) {
      newArray.push(item);
      seen.add(item);
    }
  }

  return newArray;
}

module.exports = dedupe;
