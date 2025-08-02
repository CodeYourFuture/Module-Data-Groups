function tally(items) {
  // Check if input is a valid array
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Initialize result object with no inherited properties
  const counts = Object.create(null);

  // Count frequency of each item
  for (const item of items) {
    // Validate item: allow only numbers and non-empty strings
    if (
      !Number.isFinite(item) &&
      (typeof item !== "string" || item === "")
    ) {
      throw new Error("Array elements must be numbers or non-empty strings");
    }

    // Convert item to string to ensure consistent keys
    const key = String(item);
    if (counts[key] === undefined) {
      counts[key] = 1;
    } else {
      counts[key] = counts[key] + 1;
    }
  }

  return counts;
}

module.exports = tally;
