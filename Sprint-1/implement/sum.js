function sum(elements) {
  if (!Array.isArray(elements)) return 0;

  let total = 0;
  for (const el of elements) {
    if (typeof el === "number") {
      total += el;
    }
  }
  return total;
}

module.exports = sum;
