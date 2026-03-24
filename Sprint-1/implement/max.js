function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity;

  // Keep only finite numbers
  const numbers = elements.filter(
    (x) => typeof x === "number" && Number.isFinite(x)
  );
  if (numbers.length === 0) return -Infinity;

  // Find max without mutating the input
  let max = -Infinity;
  for (const n of numbers) {
    if (n > max) max = n;
  }
  return max;
}

module.exports = findMax;
