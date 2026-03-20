function dedupe(arr) {
  if (!Array.isArray(arr)) return [];

  const seen = new Set();
  const result = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;
