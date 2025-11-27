function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  if (items.length === 0) {
    return {};
  }

  const counts = {};

  for (const item of items) {

    // Convert objects and arrays to JSON string 
    const key = (typeof item === "object" && item !== null) ? JSON.stringify(item) : item;
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;
}

module.exports = tally;

// In tally.js function tally() implemented. 
