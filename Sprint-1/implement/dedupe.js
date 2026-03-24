// Remove duplicate primitive values from an array while preserving
// the first occurrence order. Does not mutate the input array.
function dedupe(list) {
  // Defensive: if input is not an array, return an empty array
  if (!Array.isArray(list)) return [];

  const seen = new Set();
  const out = [];

  for (const item of list) {
    if (!seen.has(item)) {
      seen.add(item);
      out.push(item);
    }
  }

  return out;
}

module.exports = dedupe;
