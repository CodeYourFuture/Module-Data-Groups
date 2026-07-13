function tally(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Input must be an array");
  const counts = Object.create(null);
  if (arr.length === 0) {
    return counts;
  }
  for (const item of arr) {
    if (typeof item !== "string" || !/^[A-Za-z0-9]+$/.test(item)) {
      throw new Error("Please Enter Valid Input!");
    }
    counts[item] = (counts[item] ?? 0) + 1;
  }
  return counts;
}

module.exports = tally;
