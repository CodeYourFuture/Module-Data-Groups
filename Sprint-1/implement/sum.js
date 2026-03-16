function sum(elements) {
  const numbers = elements.filter((el) => typeof el === "number");

  if (numbers.length === 0) return 0;

  if (numbers.length === 1) return numbers[0];

  const sumNumbers = numbers.reduce((a, b) => a + b, 0);
  return sumNumbers;
}

module.exports = sum;
