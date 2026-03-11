function sum(elements) {
  if (!Array.isArray(elements)) return null;

  let total = 0;

  for (const element of elements) {
    if (Number.isFinite(element)) {
      total += element;
    }
  }

  return total;
}

module.exports = sum;