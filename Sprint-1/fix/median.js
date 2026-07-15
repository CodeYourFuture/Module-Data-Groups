function calculateMedian(arr) {
  
  if (!Array.isArray(arr)) return null;

  if (arr.length === 0) return null;

  const cleaned = arr.filter(x => typeof x === "number" && Number.isFinite(x));

  if (cleaned.length === 0) return null;

  const sorted = cleaned.sort((a, b) => a - b);

  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}
module.exports = calculateMedian;
