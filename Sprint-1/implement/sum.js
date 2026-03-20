function sum(elements) {
  if (!Array.isArray(elements)) return 0;

  let total = 0;

  for (const item of elements) {
    if (typeof item === "number") {
      total += item;
    }
  }

  return total;
}

module.exports = sum;
