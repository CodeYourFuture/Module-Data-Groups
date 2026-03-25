function sum(elements) {
  if (!Array.isArray(elements)) return 0;

  let total = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && isFinite(elements[i])) {
      total += elements[i];
    }
  }

  return total;
}

module.exports = sum;
