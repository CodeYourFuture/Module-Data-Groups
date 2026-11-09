function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }

  const counts = new Map();
  for (const item of items) {
    const key = String(item);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return Object.fromEntries(counts);
}

module.exports = tally;
