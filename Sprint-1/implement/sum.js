function sum(elements) {
  if (!Array.isArray(elements)) return null;

  const numbers = elements.filter(
    (x) => typeof x === "number" && Number.isFinite(x)
  );

  if (numbers.length === 0) return 0;

  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

module.exports = sum;