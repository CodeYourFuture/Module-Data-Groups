function dedupe(arr) {
  if (!Array.isArray(arr)) throw new Error(arr + " is not an array");
  else if (arr.length === 0) return arr;
  else return Array.from(new Set(arr));
}

module.exports = dedupe;
