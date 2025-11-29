function sum(elements) {
  const numbers = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbers.length === 0) return 0;

  const maxDecimalPlaces = numbers.reduce(
    (currMax, el) => Math.max(currMax, (String(el).split(".") || "").length),
    0
  );
  const decMultiplier = 10 ** maxDecimalPlaces;

  const total = numbers.reduce((acc, el) => acc + el, 0);

  return Math.round((total + Number.EPSILON) * decMultiplier) / decMultiplier;
}

module.exports = sum;
