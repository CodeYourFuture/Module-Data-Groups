
function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }
  const counts = {};
  for (const item of items) {
    if (typeof item !== "string" && typeof item !== "number") {
      throw new Error("Items must be strings or numbers");
    }
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports = tally;
