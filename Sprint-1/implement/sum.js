function sum(elements) {
  const numbers = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbers.length === 0) return 0;

  const total = numbers.reduce((acc, el) => acc + el, 0);

  const decMultiplier = 100;

  return Math.round(total * decMultiplier) / decMultiplier;
}

module.exports = sum;
