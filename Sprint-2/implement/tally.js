function tally(array) {
    if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }
    const counts = {};

  for (const item of array) {
  if (item === undefined || item === null || typeof item === "object" || typeof item === "function") {
    continue; // Skip invalid or problematic values
  }
  const key = String(item); // Convert to string to avoid type confusion
  counts[key] = (counts[key] || 0) + 1;
}

  return counts;
}

module.exports = tally;
