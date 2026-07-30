function sum(elements) {
  if (!Array.isArray(elements)) return 0;

  let total = 0;

  for (const element of elements) {
    if (typeof element === "number") {
      total += element;
    }
  }
  total = Number(total.toFixed(2));
  return total;
}

module.exports = sum;
