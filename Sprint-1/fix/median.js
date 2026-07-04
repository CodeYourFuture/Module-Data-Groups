function calculateMedian(arr) {
  try {
    if (!Array.isArray(arr)) return null;

    const nums = [];

    for (const x of arr) {
      if (typeof x === "number" && Number.isFinite(x)) {
        nums.push(x);
        continue;
      }

      if (typeof x === "string") {
        const n = Number(x.trim());
        if (Number.isFinite(n)) nums.push(n);
      }
    }

    if (nums.length === 0) return null;

    const sorted = nums.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return sorted.length % 2 === 1
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;

  } catch {
    return null;
  }
}

module.exports = calculateMedian;
